---
id: using_tumbleweed
title: Using Tumbleweed
sidebar_position: 5
---
# 5. Using Tumbleweed

1. Once Tumbleweed is deployed and stable on AWS, the CLI provides the user with a URL to access the Tumbleweed UI. They are first greeted by the landing page.

<figure>
  <img src="/img/using_tumbleweed_1.png" className="Tumbleweed Landing Page" alt="Tumbleweed Landing Page" width="80%"/>
</figure>

2. A user can navigate to the sources page and create a new source database connection. This creates a new Debezium PostgreSQL connector on a target producer service database along with the topic(s) which that database will produce messages to. Creating a new source connector also builds an outbox table on the producer database.

<figure>
  <img src="/img/using_tumbleweed_2.png" className="Tumbleweed Source Page" alt="Tumbleweed Source Page" width="80%"/>
</figure>
<figure>
  <img src="/img/using_tumbleweed_3.png" className="Tumbleweed Source Info" alt="Tumbleweed Source Info" width="80%"/>
</figure>
<figure>
  <img src="/img/using_tumbleweed_4.png" className="Tumbleweed Source Created" alt="Tumbleweed Source Created" width="80%"/>
</figure>

3. Once a source is created, the user can click on the source to see a source’s details. 

![Tumbleweed Source Details](/img/using_tumbleweed_5.png "Tumbleweed Source Details")
<figure>
  <img src="/img/using_tumbleweed_4.png" className="Tumbleweed Source Created" alt="Tumbleweed Source Created" width="80%"/>
</figure>

4. A user can then navigate to the consumers page and create a new consumer, which would be a microservice that “subscribes” to the Kafka topics for the event records produced at source microservices.

<figure>
  <img src="/img/using_tumbleweed_6.png" className="Tumbleweed Consumers Page" alt="Tumbleweed Consumers Page" width="80%"/>
</figure>
<figure>
  <img src="/img/using_tumbleweed_7.png" className="Tumbleweed Consumers Info" alt="Tumbleweed Consumers Info" width="80%"/>
</figure>
<figure>
  <img src="/img/using_tumbleweed_8.png" className="Tumbleweed Consumer Created" alt="Tumbleweed Consumer Created" width="80%"/>
</figure>

5. Once a consumer is created, the user can click on the consumer to see the consumer’s details including a Tumbleweed endpoint URL. This URL can be used to create a connection for a consumer service to receive a stream of data from the topics they are subscribed to.

<figure>
  <img src="/img/using_tumbleweed_9.png" className="Tumbleweed Consumer Details" alt="Tumbleweed Consumer Details" width="80%"/>
</figure>

6. Additionally, the user can click on the topics page to see the list of current topics and some details about each topic.

<figure>
  <img src="/img/using_tumbleweed_10.png" className="Tumbleweed Topics Page" alt="Tumbleweed Topics Page" width="80%"/>
</figure>
<figure>
  <img src="/img/using_tumbleweed_11.png" className="Tumbleweed Topics Details" alt="Tumbleweed Topics Details" width="80%"/>
</figure>