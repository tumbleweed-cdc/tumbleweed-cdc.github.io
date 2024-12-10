"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[183],{7592:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"problem_domain","title":"Problem Domain","description":"2.1 Microservices and Event Driven Architecture","source":"@site/docs/problem_domain.md","sourceDirName":".","slug":"/problem_domain","permalink":"/docs/problem_domain","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"id":"problem_domain","title":"Problem Domain","sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"Introduction","permalink":"/docs/introduction"},"next":{"title":"Existing Solutions","permalink":"/docs/existing_solutions"}}');var s=a(4848),o=a(8453);const r={id:"problem_domain",title:"Problem Domain",sidebar_position:2},i="2. Problem Domain",c={},d=[{value:"2.1 Microservices and Event Driven Architecture",id:"21-microservices-and-event-driven-architecture",level:2},{value:"2.2 Event Stream Processing and Message Brokers",id:"22-event-stream-processing-and-message-brokers",level:2},{value:"2.3 The Dual-Write Problem",id:"23-the-dual-write-problem",level:2},{value:"2.4 The Outbox Pattern",id:"24-the-outbox-pattern",level:2},{value:"2.4.1 Implementing the Outbox: Polling vs. CDC",id:"241-implementing-the-outbox-polling-vs-cdc",level:3},{value:"2.5 Change Data Capture",id:"25-change-data-capture",level:2},{value:"2.5.1 Log-based CDC",id:"251-log-based-cdc",level:3},{value:"2.5.2 Implementing the Outbox Pattern via Log-based CDC",id:"252-implementing-the-outbox-pattern-via-log-based-cdc",level:3}];function l(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",section:"section",strong:"strong",sup:"sup",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"2-problem-domain",children:"2. Problem Domain"})}),"\n",(0,s.jsx)(t.h2,{id:"21-microservices-and-event-driven-architecture",children:"2.1 Microservices and Event Driven Architecture"}),"\n",(0,s.jsx)(t.p,{children:"Microservice architectures have become a prominent solution to the difficulties involved in maintaining and scaling large-scale applications. Whereas monolithic architecture functionality is built into a single unit of tightly-coupled components, a microservice architecture separates core functionality into smaller, independent services. These services are typically distributed across a network. This allows for each service to be maintained and scaled independently as needed, which in turn allows for faster development cycles."}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.img,{alt:"Microservice vs Monolith",src:a(4759).A+"",title:"Microservices vs Monolith",width:"1500",height:"901"}),"\n",(0,s.jsx)("figcaption",{children:"Figure 1: Monolith VS Microservice architecture."})]}),"\n",(0,s.jsxs)(t.p,{children:["The flexibility and scalability of a distributed architecture introduces additional challenges, particularly in the realm of inter-service communication and data exchange. A good microservice architecture involves the decoupling of services from each other. In other words, services should be as autonomous as possible, with few external dependencies ",(0,s.jsx)(t.sup,{children:(0,s.jsx)(t.a,{href:"#user-content-fn-1",id:"user-content-fnref-1","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"1"})}),". It is precisely this autonomy and loose coupling between services that provides much of the benefit of microservice architectures: allowing for services to fail and/or change in isolation, scale as needed, and more."]}),"\n",(0,s.jsxs)(t.p,{children:["Perhaps the greatest challenge ",(0,s.jsx)(t.sup,{children:(0,s.jsx)(t.a,{href:"#user-content-fn-2",id:"user-content-fnref-2","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"2"})})," then becomes how to exchange data between services under famously unreliable and complex circumstances",(0,s.jsx)(t.sup,{children:(0,s.jsx)(t.a,{href:"#user-content-fn-3",id:"user-content-fnref-3","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"3"})}),", while maintaining this autonomy and decoupling. Services that need to interact are required to update both their own data and propagate this data and/or send notification of the data changes to other services. While this can be done via some manner of synchronous point-to-point API (ex. REST, RPC) between services, such an approach would require the services to be aware of each other to a degree that creates more coupling than is ideal in microservice architectures. Such tight coupling can lead to issues in a variety of ways, such as when a service becomes unavailable, when implementing new services, or when refactoring existing services.",(0,s.jsx)(t.sup,{children:(0,s.jsx)(t.a,{href:"#user-content-fn-4",id:"user-content-fnref-4","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"4"})})," Additionally, if data is propagated in a synchronous manner, this can become a blocking bottleneck with cascading effects throughout the system."]}),"\n",(0,s.jsxs)(t.p,{children:["One solution for this problem is the use of Event Driven Architecture (EDA). In EDA, any \u201cstate changes\u201d in a service can also be viewed as events, and records of such events can be sent as messages to be consumed by other services.",(0,s.jsx)(t.sup,{children:(0,s.jsx)(t.a,{href:"#user-content-fn-5",id:"user-content-fnref-5","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"5"})})," Services that need to communicate assume the role of event producers and/or event consumers. We can further enhance the strong decoupling of this approach by introducing an event stream processing platform to receive data from producers and propagate them to downstream consumers."]}),"\n",(0,s.jsx)(t.h2,{id:"22-event-stream-processing-and-message-brokers",children:"2.2 Event Stream Processing and Message Brokers"}),"\n",(0,s.jsxs)(t.p,{children:['In event stream processing, an event is a record or "...a small, self-contained, immutable object containing the details of something that happened at some point in time..."',(0,s.jsx)(t.sup,{children:(0,s.jsx)(t.a,{href:"#user-content-fn-6",id:"user-content-fnref-6","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"6"})}),' and an event stream is therefore an "unbounded, incrementally processed',(0,s.jsx)(t.sup,{children:(0,s.jsx)(t.a,{href:"#user-content-fn-6",id:"user-content-fnref-6-2","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"6"})}),' " stream of such data. Many event stream processing frameworks can also be described as asynchronous message-passing systems or message brokers.',(0,s.jsx)(t.sup,{children:(0,s.jsx)(t.a,{href:"#user-content-fn-6",id:"user-content-fnref-6-3","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"6"})})," Generally speaking, message brokers allow producing processes to send messages or records to a topic or queue, then the broker facilitates the delivery of that data to subscribed consumers."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.img,{alt:"Event Streaming",src:a(2568).A+"",title:"Event streaming",width:"1800",height:"501"}),"\n",(0,s.jsx)("figcaption",{children:"Figure 2: Event Stream Processing."})]}),"\n",(0,s.jsxs)(t.p,{children:["The use of a message broker has a number of advantages over direct messaging between services. It can act as a buffer for when consumers are unavailable and more easily allows for a single message to be sent to multiple consumers. This approach also promotes greater decoupling between producer and consumer services, allowing microservices to be designed agnostic as to whom the event data is being sent or how it is being consumed. ",(0,s.jsx)(t.sup,{children:(0,s.jsx)(t.a,{href:"#user-content-fn-7",id:"user-content-fnref-7","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"7"})})," Consumers,  likewise, subscribe to only the types of events that concern their business logic and receive these events for processing from the streaming platform."]}),"\n",(0,s.jsx)(t.h2,{id:"23-the-dual-write-problem",children:"2.3 The Dual-Write Problem"}),"\n",(0,s.jsx)(t.p,{children:"As we\u2019ve seen, a microservice architecture introduces many challenges related to data management across services and one of the most notable is the dual-write problem."}),"\n",(0,s.jsx)(t.p,{children:"A dual-write may occur when data needs to be written to different systems. For example, if one service has its own database and needs to propagate information to other services, the data is typically written to the source database as well as another system, such as a message broker, before reaching its destination."}),"\n",(0,s.jsx)(t.p,{children:"This process of writing changes to separate systems is where problems can arise and create data inconsistencies between services. If the data successfully writes to the source database but fails to be sent to a message broker due to some kind of application or network issue, the source database will have a record of the change even if the destination never receives it."}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.img,{alt:"Dual Write 1",src:a(6299).A+"",title:"Dual Write Problem 1",width:"1600",height:"801"}),"\n",(0,s.jsx)("figcaption",{children:"Figure 3: Fails to write to the message broker."})]}),"\n",(0,s.jsx)(t.p,{children:"On the other hand, if the data was successfully written to a message broker, but failed to write to the source database, the destination service received the message but the source database has no record of it. Either scenario can result in errors or data inconsistencies, complicating operations between services."}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.img,{alt:"Dual Write 2",src:a(1912).A+"",title:"Dual Write Problem 2",width:"1600",height:"801"}),"\n",(0,s.jsx)("figcaption",{children:"Figure 4: Fails to write to the source database."})]}),"\n",(0,s.jsx)(t.p,{children:"One solution is to only write changes once. If we chose to write changes to a broker, the source service would be listening for new messages, as well as the destination service. When a change occurs in the source service, the message is first sent to the broker before being consumed by both the source and destination services."}),"\n",(0,s.jsx)(t.p,{children:"This scenario comes with its own drawbacks. While data may eventually be consistent, a source service writing to the broker before updating its own database can introduce latency and create delays, especially if that data needs to be immediately queried from the source database. This has the potential to negatively impact user experience. The handling of delivery failures would also need to be considered. For example, if a message was successfully sent to the message broker but failed to write to the source database for some reason, additional retry logic may be required to address this failure."}),"\n",(0,s.jsx)(t.p,{children:"Instead, we could write changes to the source database before pushing messages to a broker. For such an approach, a microservice architecture design pattern known as the \u201ctransactional outbox pattern\u201d can be used."}),"\n",(0,s.jsx)(t.h2,{id:"24-the-outbox-pattern",children:"2.4 The Outbox Pattern"}),"\n",(0,s.jsx)(t.p,{children:"The outbox pattern ensures \u201cat-least-once\u201d message delivery by allowing for a single transactional write. Transactions in a database allow multiple actions to be carried out as a single logical operation. When using the transactional outbox pattern, database changes are recorded locally to a specially created \u201coutbox\u201d table within the same transaction as the original operation. External processes then monitor the database for changes to the outbox table, then create and propagate event records of those changes to downstream microservices accordingly."}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.img,{alt:"Outbox Pattern",src:a(5643).A+"",title:"Outbox Pattern",width:"1800",height:"1006"}),"\n",(0,s.jsx)("figcaption",{children:"Figure 5: The outbox pattern."})]}),"\n",(0,s.jsx)(t.p,{children:"Outbox table schemas can vary but typically include the following columns:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"id"}),": A unique identifier for each outbox event which can be used by a messaging system for duplicate detection."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"aggregatetype"}),": An event descriptor, often called a topic, which can be used for categorized routing of event records via a messaging system. For example, In an order propagating service, a change to an orders database might have the aggregate type of \u201corders\u201d."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"type"}),": An event category sub-type, e.g. \u201corder_created\u201d which can be used by an event stream processing framework and/or consumer microservices for filtering purposes or triggering various actions."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"payload"}),": A JSONB object that contains the actual data of the event, e.g. the row-level data change to the orders database."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"aggregateid"}),": An event key which is the ID of the payload and is used for correct ordering of event records in a messaging system."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"The outbox pattern is not only an effective solution to the dual-write problem via a single database transaction, but also includes additional safe-guards for database schemas. Since the event record propagation of this pattern relies solely on the structure of the outbox and changes to that table, the entirety of the database schema is never fully exposed to a single endpoint. Each event record contains only the latest insert into the outbox table and these records are only routed to the consumers that require that specific data."}),"\n",(0,s.jsx)(t.p,{children:"Additionally, as long as the outbox table structure itself remains consistent and insertions are properly handled in the producer service\u2019s code, changes can be made to the service\u2019s database schema without breaking the connection to consumer services or the stream processor. For example, columns in an orders table could be deleted or altered, but as long as the rows continued to be added as the payload to the outbox table, propagated events can still be handled without issue. Without this pattern, If we were propagating event records based on the changes to every table, consumers would be required to maintain knowledge of table schemas and have to update their code accordingly for any changes. As discussed previously, such coupling of consumers and producers is problematic in distributed systems, leading to less resiliency. Any database schema changes would likely lead to breaking changes across the propagation system."}),"\n",(0,s.jsx)(t.admonition,{title:"Drawbacks of the outbox pattern",type:"note",children:(0,s.jsx)(t.p,{children:"The outbox pattern comes with its own potential drawbacks. Source services now have to write additional statements to insert data to an outbox table, which could have an impact on latency and throughput. In most situations, this likely wouldn\u2019t be noticeable, but may be something to consider if your application is processing large volumes of data. There is also a risk of losing messages or accumulating excess data if the outbox table is not properly managed."})}),"\n",(0,s.jsx)(t.h3,{id:"241-implementing-the-outbox-polling-vs-cdc",children:"2.4.1 Implementing the Outbox: Polling vs. CDC"}),"\n",(0,s.jsx)(t.p,{children:"There are two primary methods for implementing the outbox pattern: Polling and Change Data Capture (CDC). Both methods require creating an outbox table and performing transactional writes to it, along with writes to the other tables that need to be tracked. Both methods also allow for data changes to be passed to a stream processing system or message broker. The difference lies in how the data changes are monitored and propagated to the rest of the system."}),"\n",(0,s.jsxs)(t.p,{children:["When using polling to implement the outbox pattern, background processes query the outbox table for new inserts at a defined interval. When updates are found, outbox entries are marked as processed to avoid duplicate messaging. In such a scenario, the outbox table would need an additional \u201cprocessed_at\u201d column. These processes will also need error handling and retry logic for when communication with the outbox table fails, ensuring \u2018at-least-once\u2019 delivery",(0,s.jsx)(t.sup,{children:(0,s.jsx)(t.a,{href:"#user-content-fn-8",id:"user-content-fnref-8","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"8"})}),". However, this approach can be resource-intensive and add additional load to the database. It can also be difficult to determine the correct polling interval, particularly in high throughput data systems where near-real time information is important",(0,s.jsx)(t.sup,{children:(0,s.jsx)(t.a,{href:"#user-content-fn-9",id:"user-content-fnref-9","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"9"})}),". Perhaps most importantly, this approach can lead to data inconsistency due to missed messages or the inability to guarantee message ordering. If multiple transactions occur in parallel, entry into the outbox table may not be in the same order as the commits",(0,s.jsx)(t.sup,{children:(0,s.jsx)(t.a,{href:"#user-content-fn-10",id:"user-content-fnref-10","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"10"})}),"."]}),"\n",(0,s.jsx)(t.p,{children:"As we will explore in the following section, a simpler, more efficient, and intuitive approach is the implementation of this pattern via log-based Change Data Capture."}),"\n",(0,s.jsx)(t.h2,{id:"25-change-data-capture",children:"2.5 Change Data Capture"}),"\n",(0,s.jsx)(t.p,{children:"Change Data Capture (CDC) is the process of monitoring a source database, capturing data changes, and propagating those changes to a variety of downstream consumers, which may include other databases, caches, applications, and more. In recent years, CDC has emerged as a leading method for near-real time database change propagation in event streaming contexts. There are three primary CDC methods in common usage: time-based, trigger-based, and log-based."}),"\n",(0,s.jsx)(t.p,{children:"The time-based CDC approach requires adding a modification timestamp column (e.g. \u201cupdated_at\u201d) to each table, then polling those tables at regular intervals to track when rows have been altered."}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.img,{alt:"Time Based CDC",src:a(8142).A+"",title:"Timestamp Based CDC",width:"1301",height:"401"}),"\n",(0,s.jsx)("figcaption",{children:"Figure 6: Time-Based CDC"})]}),"\n",(0,s.jsxs)(t.p,{children:["While somewhat straightforward to implement, time-based CDC comes with several disadvantages",(0,s.jsx)(t.sup,{children:(0,s.jsx)(t.a,{href:"#user-content-fn-11",id:"user-content-fnref-11","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"11"})}),":"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Schema modification"}),": It may be common for a table to have an updated_at timestamp column, but those that do not must be altered, which is not always possible."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Deletion detection"}),": This approach is unable to detect hard delete operations. Instead of deleting rows, soft deletes can be implemented by adding a deletion indicator column (e.g. \u201cdeleted_at\u201d), but this again requires schema modification and can also lead to table bloat."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Higher latency"}),": Capturing data at intervals may mean the process is no longer occurring in real-time."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Performance degradation"}),": Requires constant additional database queries which can be a particular burden when dealing with large amounts of data."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"The trigger-based CDC approach shares similarities with the polling implementation of the outbox pattern discussed in the previous section and was a prominent CDC method before the development of log-based CDC. It involves using a built-in database function that is automatically triggered whenever an insert, update, or delete operation occurs on a table. These changes are then stored in what is often called a \u201cshadow table\u201d, which can then be queried for data changes for propagation to downstream systems."}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.img,{alt:"Trigger Based CDC",src:a(8601).A+"",title:"Trigger Based CDC",width:"1301",height:"401"}),"\n",(0,s.jsx)("figcaption",{children:"Figure 7: Trigger-Based CDC"})]}),"\n",(0,s.jsxs)(t.p,{children:["While triggers are supported by most databases, this method also comes with several disadvantages, especially as a database grows larger",(0,s.jsx)(t.sup,{children:(0,s.jsx)(t.a,{href:"#user-content-fn-12",id:"user-content-fnref-12","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"12"})}),":"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Performance degradation"}),": Multiple writes are required for each operation. This can slow down high-frequency transactions, especially if there are a high amount of triggers."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Higher latency"}),": This approach can lead to higher latency due to the need for consistent querying of the shadow table."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Scalability"}),": A large amount of triggers can become difficult to manage."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Transactional consistency"}),": Multiple parallel writes to the shadow table may result in inconsistent message ordering."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Although both time-based and trigger-based CDC still remain in use, log-based CDC has emerged as a generally more efficient and less invasive technique by capturing changes directly from database transaction logs."}),"\n",(0,s.jsx)(t.h3,{id:"251-log-based-cdc",children:"2.5.1 Log-based CDC"}),"\n",(0,s.jsx)(t.p,{children:"For applications that need to access data in near-real time, Log-based CDC is the most widely-used among the various CDC solutions.  When changes happen to a database via create, update, or delete operations, the database writes these changes into a transaction log before they are written to the database. This log and its ordering are the source of truth for the database. In PostgreSQL, the transaction log is known as the Write-Ahead Log (WAL). The primary purpose of transaction logs is backup and recovery, but CDC tools have been developed to read from these logs in order to replicate changes and send them to other systems. These tools monitor the database transaction log and when a change occurs, create a record of that change event, and propagate it to downstream consumers."}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.img,{alt:"Log Based CDC",src:a(2045).A+"",width:"1103",height:"481"}),"\n",(0,s.jsx)("figcaption",{children:"Figure 8: Log-Based CDC"})]}),"\n",(0,s.jsxs)(t.p,{children:["Some of the advantages of log-based CDC include",(0,s.jsx)(t.sup,{children:(0,s.jsx)(t.a,{href:"#user-content-fn-13",id:"user-content-fnref-13","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"13"})}),":"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Guaranteed in-order delivery"}),": Because log-based CDC relies solely on the log for tracking changes, these changes are received in the same order that they occurred, ensuring data consistency."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Minimal database performance impact"}),": Changes are read from transaction logs instead of the direct database querying methods employed by other methods."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Real-time message propagation"}),": Unlike with polling and querying approaches, capturing changes directly from the log allows for near real-time data transfer with minimal delays."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Low Data Model Impact"}),": As the transaction log automatically records all insert, delete, update operations in a table, database tables do not require modification for use with log-based CDC."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"One of the disadvantages of Log-based CDC is that it is highly dependent on the type of source database being used. No universal log format or mechanisms between different types of\tdatabases result in less flexibility in CDC solutions."}),"\n",(0,s.jsx)(t.h3,{id:"252-implementing-the-outbox-pattern-via-log-based-cdc",children:"2.5.2 Implementing the Outbox Pattern via Log-based CDC"}),"\n",(0,s.jsx)(t.p,{children:"Given the benefits and drawbacks of the various approaches discussed above, it is clear why log-based Change Data Capture is a prominent method for implementing the outbox pattern for near real-time data exchange. Insertions to the outbox table are recorded by the database transaction log which is being monitored by an external CDC connection agent watching for changes made to the outbox table. When such changes occur, the agent creates a record of the change event and copies the row change from the outbox table into its payload. This is then sent to an event stream processing platform for further propagation to downstream services."}),"\n","\n",(0,s.jsxs)(t.section,{"data-footnotes":!0,className:"footnotes",children:[(0,s.jsx)(t.h2,{className:"sr-only",id:"footnote-label",children:"Footnotes"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{id:"user-content-fn-1",children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://blog.christianposta.com/microservices/why-microservices-should-be-event-driven-autonomy-vs-authority/",children:"C. Posta, \u201cWhy Microservices Should Be Event Driven: Autonomy vs Authority,\u201d Software Blog, May 27, 2016"}),". ",(0,s.jsx)(t.a,{href:"#user-content-fnref-1","data-footnote-backref":"","aria-label":"Back to reference 1",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{id:"user-content-fn-2",children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://blog.christianposta.com/microservices/the-hardest-part-about-microservices-data/",children:"C. Posta, \u201cThe hardest part about microservices: your data,\u201d Software Blog, Jul. 14, 2016."})," ",(0,s.jsx)(t.a,{href:"#user-content-fnref-2","data-footnote-backref":"","aria-label":"Back to reference 2",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{id:"user-content-fn-3",children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://ably.com/blog/8-fallacies-of-distributed-computing",children:"A. Diaconu, \u201cNavigating the 8 fallacies of distributed computing,\u201d Ably Realtime, Oct. 07, 2022."})," ",(0,s.jsx)(t.a,{href:"#user-content-fnref-3","data-footnote-backref":"","aria-label":"Back to reference 3",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{id:"user-content-fn-4",children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://debezium.io/blog/2019/02/19/reliable-microservices-data-exchange-with-the-outbox-pattern/",children:"G. Morling, \u201cReliable microservices data exchange with the outbox pattern,\u201d Debezium, Feb. 19, 2019."})," ",(0,s.jsx)(t.a,{href:"#user-content-fnref-4","data-footnote-backref":"","aria-label":"Back to reference 4",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{id:"user-content-fn-5",children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://dzone.com/articles/best-practices-for-event-driven-microservice-archi",children:"J. Skowronski, \u201cBest Practices for Event-Driven Microservice Architecture,\u201d dzone.com, Sep. 11, 2019."})," ",(0,s.jsx)(t.a,{href:"#user-content-fnref-5","data-footnote-backref":"","aria-label":"Back to reference 5",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{id:"user-content-fn-6",children:["\n",(0,s.jsxs)(t.p,{children:["M. Kleppmann, Designing data-intensive applications: The Big Ideas Behind Reliable, Scalable, and Maintainable Systems. Oreilly & Associates Incorporated, 2017. ",(0,s.jsx)(t.a,{href:"#user-content-fnref-6","data-footnote-backref":"","aria-label":"Back to reference 6",className:"data-footnote-backref",children:"\u21a9"})," ",(0,s.jsxs)(t.a,{href:"#user-content-fnref-6-2","data-footnote-backref":"","aria-label":"Back to reference 6-2",className:"data-footnote-backref",children:["\u21a9",(0,s.jsx)(t.sup,{children:"2"})]})," ",(0,s.jsxs)(t.a,{href:"#user-content-fnref-6-3","data-footnote-backref":"","aria-label":"Back to reference 6-3",className:"data-footnote-backref",children:["\u21a9",(0,s.jsx)(t.sup,{children:"3"})]})]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{id:"user-content-fn-7",children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://www.redhat.com/en/topics/integration/what-is-event-driven-architecture",children:"\u201cWhat is event-driven architecture?,\u201d redhat.com, Sep. 27, 2019."})," ",(0,s.jsx)(t.a,{href:"#user-content-fnref-7","data-footnote-backref":"","aria-label":"Back to reference 7",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{id:"user-content-fn-8",children:["\n",(0,s.jsxs)(t.p,{children:["K. Grzybek, \u201cThe outbox pattern \u2014 Kamil Grzybek.\u201d ",(0,s.jsx)(t.a,{href:"https://www.kamilgrzybek.com/blog/posts/the-outbox-pattern",children:"https://www.kamilgrzybek.com/blog/posts/the-outbox-pattern"})," ",(0,s.jsx)(t.a,{href:"#user-content-fnref-8","data-footnote-backref":"","aria-label":"Back to reference 8",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{id:"user-content-fn-9",children:["\n",(0,s.jsxs)(t.p,{children:["\u201cPush-based Outbox Pattern with Postgres Logical Replication - Event-Driven.io,\u201d Lazywill, Oct. 23, 2022. ",(0,s.jsx)(t.a,{href:"https://event-driven.io/en/push_based_outbox_pattern_with_postgres_logical_replication/",children:"https://event-driven.io/en/push_based_outbox_pattern_with_postgres_logical_replication/"})," ",(0,s.jsx)(t.a,{href:"#user-content-fnref-9","data-footnote-backref":"","aria-label":"Back to reference 9",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{id:"user-content-fn-10",children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://www.decodable.co/blog/revisiting-the-outbox-pattern",children:"\u201cRevisiting the outbox pattern.\u201d"})," ",(0,s.jsx)(t.a,{href:"#user-content-fnref-10","data-footnote-backref":"","aria-label":"Back to reference 10",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{id:"user-content-fn-11",children:["\n",(0,s.jsxs)(t.p,{children:["J. Richman, \u201cWhat is Change Data Capture (CDC)? How It Works, Benefits, Best Practices,\u201d Estuary, Nov. 15, 2024. ",(0,s.jsx)(t.a,{href:"https://estuary.dev/the-complete-introduction-to-change-data-capture-cdc/",children:"https://estuary.dev/the-complete-introduction-to-change-data-capture-cdc/"})," ",(0,s.jsx)(t.a,{href:"#user-content-fnref-11","data-footnote-backref":"","aria-label":"Back to reference 11",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{id:"user-content-fn-12",children:["\n",(0,s.jsxs)(t.p,{children:["M. Van De Wiel, \u201cChange data capture: Definition, benefits, and how to use it,\u201d Fivetran Blog, Oct. 08, 2024. ",(0,s.jsx)(t.a,{href:"https://www.fivetran.com/blog/change-data-capture-what-it-is-and-how-to-use-it",children:"https://www.fivetran.com/blog/change-data-capture-what-it-is-and-how-to-use-it"})," ",(0,s.jsx)(t.a,{href:"#user-content-fnref-12","data-footnote-backref":"","aria-label":"Back to reference 12",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{id:"user-content-fn-13",children:["\n",(0,s.jsxs)(t.p,{children:["\u201cFive Advantages of Log-Based Change Data Capture,\u201d Debezium, Jul. 19, 2018. ",(0,s.jsx)(t.a,{href:"https://debezium.io/blog/2018/07/19/advantages-of-log-based-change-data-capture/",children:"https://debezium.io/blog/2018/07/19/advantages-of-log-based-change-data-capture/"})," ",(0,s.jsx)(t.a,{href:"#user-content-fnref-13","data-footnote-backref":"","aria-label":"Back to reference 13",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},8601:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/Trigger-based_CDC-c24b2d4d9285e7c0b9335b2ee8da54d6.png"},6299:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/dual-write_1-d26c82253f357eb731c0a3e15bf64a34.svg"},1912:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/dual-write_2-b2cdef87941337a3f5364ef3f0a2380e.svg"},2568:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/event_streaming-0416233c574db584b036c9219cc59bbf.svg"},2045:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/log-based-cdc-76e18054de9f8fb2474eba75f498cdcd.png"},4759:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/microservices_monolith_v2-28faea6fa687b2e08f84adbac227f869.svg"},5643:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/outbox_pattern-c554b303ac13aead90fb991c60da5f22.svg"},8142:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/timestamp-based_CDC-ceb49d01b144dd931f925bb8f725e250.svg"},8453:(e,t,a)=>{a.d(t,{R:()=>r,x:()=>i});var n=a(6540);const s={},o=n.createContext(s);function r(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);