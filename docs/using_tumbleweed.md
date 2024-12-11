---
id: using_tumbleweed
title: 5. Using Tumbleweed
sidebar_position: 5
---
# 5. Using Tumbleweed

1. Once Tumbleweed is deployed and stable on AWS, the CLI provides the user with a URL to access the Tumbleweed UI. They are first greeted by the landing page.

<figure>
  <img src="/img/using_tumbleweed_1.png" className="using-tumbleweed-image" alt="TumbleweedLandingPage" width="80%"/>
</figure>

2. A user can navigate to the sources page and create a new source database connection. This creates a new Debezium PostgreSQL connector on a target producer service database along with the topic(s) which that database will produce messages to. Creating a new source connector also builds an outbox table on the producer database.

<figure>
  <img src="/img/using_tumbleweed_2.png" className="using-tumbleweed-image" alt="TumbleweedSourcePage" width="80%"/>
</figure>
<figure>
  <img src="/img/new_source.png" className="using-tumbleweed-image" alt="TumbleweedSourceInfo" width="80%"/>
</figure>
<figure>
  <img src="/img/using_tumbleweed_4.png" className="using-tumbleweed-image" alt="TumbleweedSourceCreated" width="80%"/>
</figure>

3. Once a source is created, the user can click on the source to see a source’s details. 

<figure>
  <img src="/img/using_tumbleweed_5.png" className="using-tumbleweed-image" alt="TumbleweedSourceDetails" width="80%"/>
</figure>

4. A user can then navigate to the consumers page and create a new consumer, which would be a microservice that “subscribes” to the Kafka topics for the event records produced at source microservices.

<figure>
  <img src="/img/using_tumbleweed_6.png" className="using-tumbleweed-image" alt="TumbleweedConsumersPage" width="80%"/>
</figure>
<figure>
  <img src="/img/using_tumbleweed_7.png" className="using-tumbleweed-image" alt="TumbleweedConsumersInfo" width="80%"/>
</figure>
<figure>
  <img src="/img/using_tumbleweed_8.png" className="using-tumbleweed-image" alt="TumbleweedConsumerCreated" width="80%"/>
</figure>

5. Once a consumer is created, the user can click on the consumer to see the consumer’s details including a Tumbleweed endpoint URL. This URL can be used to create a connection for a consumer service to receive a stream of data from the topics they are subscribed to.

<figure>
  <img src="/img/using_tumbleweed_9.png" className="using-tumbleweed-image" alt="TumbleweedConsumerDetails" width="80%"/>
</figure>

6. Additionally, the user can click on the topics page to see the list of current topics and some details about each topic.

<figure>
  <img src="/img/using_tumbleweed_10.png" className="using-tumbleweed-image" alt="TumbleweedTopicsPage" width="80%"/>
</figure>
<figure>
  <img src="/img/using_tumbleweed_11.png" className="using-tumbleweed-image" alt="TumbleweedTopicsDetails" width="80%"/>
</figure>