---
id: using_tumbleweed
title: Using Tumbleweed
sidebar_position: 5
---
# 5. Using Tumbleweed

1. Once Tumbleweed is deployed and stable on AWS, the CLI provides the user with a URL to access the Tumbleweed UI. They are first greeted by the landing page.

![Tumbleweed Landing Page](/img/using_tumbleweed_1.png "Tumbleweed Landing Page")

2. A user can navigate to the sources page and create a new source database connection. This creates a new Debezium PostgreSQL connector on a target producer service database along with the topic(s) which that database will produce messages to. Creating a new source connector also builds an outbox table on the producer database.

![Tumbleweed Sources Page](/img/using_tumbleweed_2.png "Tumbleweed Source Page")
![Tumbleweed Source Info](/img/using_tumbleweed_3.png "Tumbleweed Source Info")
![Tumbleweed Source Created](/img/using_tumbleweed_4.png "Tumbleweed Source Created")

3. Once a source is created, the user can click on the source to see a source’s details. 

![Tumbleweed Source Details](/img/using_tumbleweed_5.png "Tumbleweed Source Details")

4. A user can then navigate to the consumers page and create a new consumer, which would be a microservice that “subscribes” to the Kafka topics for the event records produced at source microservices.

![Tumbleweed Consumers Page](/img/using_tumbleweed_6.png "Tumbleweed Consumers Page")
![Tumbleweed Consumers Info](/img/using_tumbleweed_7.png "Tumbleweed Consumers Info")
![Tumbleweed Consumer Created](/img/using_tumbleweed_8.png "Tumbleweed Consumer Created")

5. Once a consumer is created, the user can click on the consumer to see the consumer’s details including a Tumbleweed endpoint URL. This URL can be used to create a connection for a consumer service to receive a stream of data from the topics they are subscribed to.

![Tumbleweed Consumer Details](/img/using_tumbleweed_9.png "Tumbleweed Consumer Details")

6. Additionally, the user can click on the topics page to see the list of current topics and some details about each topic.

![Tumbleweed Topics Page](/img/using_tumbleweed_10.png "Tumbleweed Topics Page")
![Tumbleweed Topics Details](/img/using_tumbleweed_11.png "Tumbleweed Topics Details")