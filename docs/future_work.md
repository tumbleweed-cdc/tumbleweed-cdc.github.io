---
id: future_work
title: 7. Future Work
sidebar_position: 7
---

# 7. Future Work
Tumbleweed is a useful and efficient framework, but there is always room for improvement. Given the time, these are some areas in which we would like to expand upon in the future.

## 7.1 Login Functionality and Token Authorization
In our current design, only whitelisted IP addresses can access the UI of a Tumbleweed instance. This prevents unauthorized access to the configuration of the pipeline. However, it might be more secure to further introduce a login feature as implemented in many enterprise solutions, making it impossible to interact with the pipeline configuration without valid login credentials.

More importantly, although access to the UI is limited, we were unable to fully secure access to the backend API endpoint that streams data to microservice consumers. Thus anyone with access to the public IP and port could potentially spoof a Tumbleweed endpoint and consume data from a pipeline instance. Although this would require discovering the public IP, the correct port, and a functioning Kafka group ID, it still remains a security risk.

We considered adding an additional whitelist feature for this, but realized that consumer IP addresses are more likely to change frequently. 

As a potential solution to this security flaw, we would implement JWT (JSON Web Token) authentication. A JWT is a compact, URL-safe, self-contained way for securely transmitting information between parties as a JSON object [^1]. When a user logs in, Tumbleweed would generate a JWT containing claims, such as the user's identity. This token is sent to the client, and included in subsequent requests, allowing the server to verify the user’s identity without maintaining session state. JWT would allow secure and stateless user authentication, ensuring that only authorized users can log in and interact with a Tumbleweed pipeline instance.

<figure>
  <img src="/img/jwt.svg" className="JWT Token" alt="JWT Token" width="80%"/>
  <figcaption>Figure 1: JWT authorization cycle.</figcaption>
</figure>

Together, these features would provide additional layers of protection for Tumbleweed users and their data, aligning the application with modern security standards.

## 7.2 Support for Different Databases
In its current implementation, Tumbleweed supports creating connectors exclusively for PostgreSQL databases. While this is a strong starting point due to PostgeSQL’s popularity and  robust features for CDC, we recognize the importance of supporting a broader range of databases to meet more diverse user needs.

Future versions of Tumbleweed could aim to include support for additional databases such as MongoDB or MySQL. By expanding database compatibility, we can cater to organizations with varied tech stacks, making Tumbleweed a more versatile solution for microservice data sync pipelines. Supporting multiple database technologies would also position Tumbleweed as a more comprehensive solution in a competitive landscape.

Adding support for other databases would also present new technical challenges, such as integrating with different replication mechanisms (e.g., MySQL’a binlog or MongoDB’s oplog) or handling schema-less databases like MongoDB.

## 7.3 Topic Filtering/Transformation
Currently, consumers receive all data passing through the pipeline based on the topics they are subscribed to. In future implementations, we could aim to introduce the ability for users to filter data dynamically based on a set of criteria, such as by types/sub-topics or various attributes of the payload. This feature would give users the power to tailor the data streams they consume, ensuring that only the most relevant data is captured by their consumers.

<figure>
  <img src="/img/topic_filtering.svg" className="Topic Filtering" alt="Topic Filtering" width="80%"/>
  <figcaption>Figure 2: Topic filtering.</figcaption>
</figure>

To achieve this, we would implement a filtering layer that operates on the pipeline’s outgoing data stream. Users could define filtering rules through the provided Tumbleweed UI, which would then be applied before the data is sent to the subscribed consumers. By doing this, not only would the volume of data being processed by downstream services be decreased, but the overall performance and system efficiency would be improved by minimizing network and compute overhead.

Additionally, implementing a data transformation capability would allow users to reshape the data before consumption. By reshaping the data, we’d allow users to extract and reformat fields to match a schema expected by the consumer service.

By adding filtering and transformation capabilities, Tumbleweed would offer users more granular control over the data flowing through their pipelines, making it a more flexible and powerful tool for data integration.

## 7.4 Optional Topic Autofill from Source Database 
Topics are currently created through inputting a comma-separated list of topic names when creating a source connector. However, it might be more user-friendly to generate a list of potential topics based on the source databases existing tables. Users could then select topics with ease, while still being able to manually input if necessary. By eliminating the requirement to manually input topics, the setup process would become more intuitive.

<figure>
  <img src="/img/tumbleweed_logo.png" className="Tumbleweed Logo" alt="Tumbleweed Logo" width="80%"/>
</figure>

---

[^1]: [“JSON Web Tokens Introduction,” jwt.io.](https://jwt.io/introduction)