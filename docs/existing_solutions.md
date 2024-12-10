---
id: existing_solutions
title: Existing Solutions
sidebar_position: 3
---

# 3. Existing Solutions

There are several enterprise solutions which implement CDC systems for microservices. There are also a number of open-source tools that can be used in concert to create a comprehensive solution. Scalability, cost, and development effort need consideration when deciding which solution fits best for their purpose.

## 3.1 Enterprise Solutions

Although CDC can be used for implementation of the outbox pattern, most enterprise CDC solutions focus on traditional source-to-sink (a sink being the destination for the data being sent) replication between data stores and have not often been designed for the specific use case of data syncing between microservices. However, there are several solutions, such as  Confluent[^1] and Striim[^2], which do provide managed CDC for this case. Such solutions typically function well, however, they come with tradeoffs. These services are expensive and require recurring costs. Additionally, allowing the pipeline to be hosted by a managed service leads to decreased data privacy and less control over infrastructure.

<figure>
  <img src="/img/striim_confluent.png" className="Striim and Confluent Logos" alt="Striim and Confluent Logos" width="80%"/>
  <figcaption>Figure 1: Striim and Confluent.</figcaption>
</figure>

## 3.2 DIY Solutions

An alternative to enterprise solutions is to build a DIY framework. DIY solutions can be built by utilizing open-source tools such as Debezium[^3] and Apache Kafka[^4], which offer extensive flexibility for data customization. Custom options include, but are not limited to schema evolution, data transformation, and topic customization. Building a DIY solution utilizing some of the aforementioned open-source tools may be a good fit for those teams that prefer to have more control over their infrastructure, with the option for extensive customizations in their CDC pipeline, while avoiding recurring costs from using an enterprise solution. These benefits come at the cost of managing the complex configurations of these tools, which may hinder a team's ability to deploy a CDC pipeline quickly. Without extensive research or experience in the problem domain and these technologies, even experienced developers will require considerable time to build a production ready DIY system.

<figure>
  <img src="/img/debezium_kafka.png" className="Kafka and Debezium Logos" alt="Kafka and Debezium Logos" width="80%"/>
  <figcaption>Figure 2: Apache Kafka and Debezium.</figcaption>
</figure>

[^1]: [Confluent Developer: Your Apache Kafka® Journey begins here. (n.d.). Confluent.](https://developer.confluent.io/)
[^2]: ["Striim (2024, October 28). Real-time data integration and streaming platform."](https://www.striim.com/1) 
[^3]: ["Debezium (n.d.) Debezium."](https://debezium.io/)
[^4]: [“Apache Kafka. (n.d.). Apache Kafka.”](https://kafka.apache.org/)