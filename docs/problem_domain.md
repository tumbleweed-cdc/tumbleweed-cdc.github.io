---
id: problem_domain
title: Problem Domain
sidebar_position: 2
---

# 2. Problem Domain

## 2.1 Microservices and Event Driven Architecture

Microservice architectures have become a prominent solution to the difficulties involved in maintaining and scaling large-scale applications. Whereas monolithic architecture functionality is built into a single unit of tightly-coupled components, a microservice architecture separates core functionality into smaller, independent services. These services are typically distributed across a network. This allows for each service to be maintained and scaled independently as needed, which in turn allows for faster development cycles.

The flexibility and scalability of a distributed architecture introduces additional challenges, particularly in the realm of inter-service communication and data exchange. A good microservice architecture involves the decoupling of services from each other. In other words, services should be as autonomous as possible, with few external dependencies.[^1] It is precisely this autonomy and loose coupling between services that provides much of the benefit of microservice architectures: allowing for services to fail and/or change in isolation, scale as needed, and more.

Perhaps the greatest challenge[^2] then becomes how to exchange data between services under famously unreliable and complex circumstances[^3], while maintaining this autonomy and decoupling. Services that need to interact are required to update both their own data and propagate this data and/or send notification of the data changes to other services. While this can be done via some manner of synchronous point-to-point API (ex. REST, RPC) between services, such an approach would require the services to be aware of each other to a degree that creates more coupling than is ideal in microservice architectures. Such tight coupling can lead to issues in a variety of ways, such as when a service becomes unavailable, when implementing new services, or when refactoring existing services.[^4] Additionally, if data is propagated in a synchronous manner, this can become a blocking bottleneck with cascading effects throughout the system.

One solution for this problem is the use of Event Driven Architecture (EDA). In EDA, any “state changes” in a service can also be viewed as events, and records of such events can be sent as messages to be consumed by other services.[^5] Services that need to communicate assume the role of event producers and/or event consumers. We can further enhance the strong decoupling of this approach by introducing an event stream processing platform to receive data from producers and propagate them to downstream consumers.

## 2.2 Event Stream Processing and Message Brokers

In event stream processing, an event is a record or "...a small, self-contained, immutable object containing the details of something that happened at some point in time..."[^6] and an event stream is therefore an "unbounded, incrementally processed[^6] " stream of such data. Many event stream processing frameworks can also be described as asynchronous message-passing systems or message brokers.[^6] Generally speaking, message brokers allow producing processes to send messages or records to a topic or queue, then the broker facilitates the delivery of that data to subscribed consumers.

The use of a message broker has a number of advantages over direct messaging between services. It can act as a buffer for when consumers are unavailable and more easily allows for a single message to be sent to multiple consumers. This approach also promotes greater decoupling between producer and consumer services, allowing microservices to be designed agnostic as to whom the event data is being sent or how it is being consumed. [^7] Consumers,  likewise, subscribe to only the types of events that concern their business logic and receive these events for processing from the streaming platform.

## 2.3 The Dual-Write Problem

As we’ve seen, a microservice architecture introduces many challenges related to data management across services and one of the most notable is the dual-write problem.
A dual-write may occur when data needs to be written to different systems. For example, if one service has its own database and needs to propagate information to other services, the data is typically written to the source database as well as another system, such as a message broker, before reaching its destination.

This process of writing changes to separate systems is where problems can arise and create data inconsistencies between services. If the data successfully writes to the source database but fails to be sent to a message broker due to some kind of application or network issue, the source database will have a record of the change even if the destination never receives it.

On the other hand, if the data was successfully written to a message broker, but failed to write to the source database, the destination service received the message but the source database has no record of it. Either scenario can result in errors or data inconsistencies, complicating operations between services.

One solution is to only write changes once. If we chose to write changes to a broker, the source service would be listening for new messages, as well as the destination service. When a change occurs in the source service, the message is first sent to the broker before being consumed by both the source and destination services.

This scenario comes with its own drawbacks. While data may eventually be consistent, a source service writing to the broker before updating its own database can introduce latency and create delays, especially if that data needs to be immediately queried from the source database. This has the potential to negatively impact user experience. The handling of delivery failures would also need to be considered. For example, if a message was successfully sent to the message broker but failed to write to the source database for some reason, additional retry logic may be required to address this failure.

Instead, we could write changes to the source database before pushing messages to a broker. For such an approach, a microservice architecture design pattern known as the “transactional outbox pattern” can be used.

## 2.4 The Outbox Pattern

When using the transactional outbox pattern, database changes are recorded locally to a specially created “outbox” table within the same transaction as the original operation. Transactions in a database allow multiple actions to be carried out as a single logical operation. The outbox table stores metadata about the changes, such as the operation type, and a data payload. Separate processes should then monitor the outbox table for new entries and update the necessary microservices accordingly.

Outbox table schemas can vary but typically include the following columns:
- `id`: A unique identifier for each outbox event
- `aggregatetype`: An event descriptor, often called a topic, which can be used for categorized routing of event records via a messaging system. For example, In an order propagating service, a change to an orders database might have the aggregate type of “orders”.
- `type`: An event category sub-type, e.g. “order_created” which can be used by an event stream processing framework and/or consumer microservices for filtering purposes or triggering various actions.
- `payload`: A JSONB object that contains the actual data of the event, e.g. the row-level data change to the orders database.
- `aggregateid`: An event key which is the ID of the payload and is used for correct ordering of event records in a messaging system.

Though the outbox pattern is an effective solution to the dual-write problem, it also comes with its own potential drawbacks. Source services now have to write additional statements to insert data to an outbox table, which could have an impact on latency and throughput. In most situations, this likely wouldn’t be noticeable, but may be something to consider if your application is processing large volumes of data. There is also a risk of losing messages or accumulating excess data if the outbox table is not properly managed.

While the outbox pattern can be configured in multiple ways, implementing it via Change Data Capture can ensure that all changes to the source database are efficiently propagated to other microservices in near real-time.

## 2.5 Change Data Capture

Data has become a fundamental component of our world and when it comes to choosing the best way to manage and move that data, there are two common methods, Extract, Transform, Load (ETL) and Change Data Capture (CDC). ETL is a more traditional approach and most effective when data can be moved in larger batches (batch processing) at regular intervals. CDC is best used in streaming data contexts, where batching makes less sense, and information is needed in near real-time. Near real-time refers to systems that can tolerate slightly longer than the 250 milliseconds required for hard real-time. As many modern data systems involve a non-stop flow of data, CDC is taking prominence as a valuable approach.

Change Data Capture (CDC) is the process of monitoring a source, capturing data changes in near real-time, and propagating those changes to a variety of downstream consumers, which may include other databases, caches, applications, and more. There are three primary CDC methods in common usage: time-based, trigger-based, and log-based. 
Time-based CDC requires semi-invasive database schema changes by adding timestamp columns to each table that tracks when the row was last modified. While somewhat straightforward to implement, time-based CDC is unable to track delete operations and every row in a table must be scanned to find the latest updated value, making it suitable only when a small percentage of data changes.

Trigger-based CDC involves using a built-in database function that is automatically triggered whenever an insert, update, or delete operation occurs on a table. These changes are then stored in what is often called a “shadow table”, which can then be used for propagation of data changes to downstream systems. While triggers are supported by most databases, this method requires multiple writes for every change which impacts the source database performance. It can also become cumbersome to manage a large number of triggers.

Although both time-based and trigger-based CDC still remain in use, log-based CDC has emerged as a generally more efficient and less invasive technique by capturing changes directly from database transaction logs.

### 2.5.1 Log-based CDC

For applications that need to access data in near-real time, Log-based CDC is the most widely-used among the various CDC solutions.  When changes happen to a database via create, update, or delete operations, the database writes these changes into the transaction log before they are written to the database. In PostgreSQL the transaction log is known as the Write-Ahead Log (WAL). The primary use for transaction logs is backup and recovery, but various CDC tools can read from these logs in order to replicate changes and send them to other systems.

Some of the advantages of log-based CDC include:
- Near real-time tracking of changes, ensuring quick delivery to target systems.
- Minimal performance impact on source database since changes are read from transaction logs instead of the direct database querying method that other techniques may use.
- Changes are received in the same order that they occurred, ensuring data consistency.

One of the disadvantages of Log-based CDC is that it is highly dependent on the type of source database being used. No universal log format or mechanisms between different types of databases results in less flexibility in CDC solutions. For example, Tumbleweed only works with PostgreSQL and would require significant modification in order to accommodate other database types.

## References

[^1]: [C. Posta, “Why Microservices Should Be Event Driven: Autonomy vs Authority,” Software Blog, May 27, 2016](https://blog.christianposta.com/microservices/why-microservices-should-be-event-driven-autonomy-vs-authority/).
[^2]: [C. Posta, “The hardest part about microservices: your data,” Software Blog, Jul. 14, 2016.](https://blog.christianposta.com/microservices/the-hardest-part-about-microservices-data/)
[^3]: [A. Diaconu, “Navigating the 8 fallacies of distributed computing,” Ably Realtime, Oct. 07, 2022.](https://ably.com/blog/8-fallacies-of-distributed-computing)
[^4]: [G. Morling, “Reliable microservices data exchange with the outbox pattern,” Debezium, Feb. 19, 2019.](https://debezium.io/blog/2019/02/19/reliable-microservices-data-exchange-with-the-outbox-pattern/)
[^5]: [J. Skowronski, “Best Practices for Event-Driven Microservice Architecture,” dzone.com, Sep. 11, 2019.](https://dzone.com/articles/best-practices-for-event-driven-microservice-archi)
[^6]: M. Kleppmann, Designing data-intensive applications: The Big Ideas Behind Reliable, Scalable, and Maintainable Systems. Oreilly & Associates Incorporated, 2017.
[^7]: [“What is event-driven architecture?,” redhat.com, Sep. 27, 2019.](https://www.redhat.com/en/topics/integration/what-is-event-driven-architecture)
[^8]: [J. Kreps, “Benchmarking Apache Kafka: 2 million writes per second (On three cheap machines),” LinkedIn, Apr. 27, 2014.](https://engineering.linkedin.com/kafka/benchmarking-apache-kafka-2-million-writes-second-three-cheap-machines)
[^9]: [“Reliable microservices data exchange with the outbox pattern,” Debezium, Feb. 19, 2019.](https://debezium.io/blog/2019/02/19/reliable-microservices-data-exchange-with-the-outbox-pattern/)
[^10]: [“Revisiting the outbox pattern.”](https://www.decodable.co/blog/revisiting-the-outbox-pattern)
[^11]: [“What is Change Data Capture (CDC)? | Confluent,” Confluent.](https://www.confluent.io/learn/change-data-capture/)