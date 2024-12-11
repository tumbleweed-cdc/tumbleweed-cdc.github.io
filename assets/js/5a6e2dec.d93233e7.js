"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[572],{3384:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"tumbleweed","title":"4. Tumbleweed","description":"Considering the trade-offs associated with enterprise CDC solutions and the complexity of building a DIY alternative, Tumbleweed recognized a gap in the available options for an end-to-end log-based CDC implementation of the outbox pattern.","source":"@site/docs/tumbleweed.md","sourceDirName":".","slug":"/tumbleweed","permalink":"/docs/tumbleweed","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"id":"tumbleweed","title":"4. Tumbleweed","sidebar_position":4},"sidebar":"tutorialSidebar","previous":{"title":"3. Existing Solutions","permalink":"/docs/existing_solutions"},"next":{"title":"5. Using Tumbleweed","permalink":"/docs/using_tumbleweed"}}');var s=a(4848),r=a(8453);const o={id:"tumbleweed",title:"4. Tumbleweed",sidebar_position:4},i="4. Tumbleweed",c={},d=[{value:"4.1 What is Tumbleweed?",id:"41-what-is-tumbleweed",level:2},{value:"4.2 Tumbleweed Implementation",id:"42-tumbleweed-implementation",level:2},{value:"4.2.1 Tumbleweed Architecture",id:"421-tumbleweed-architecture",level:3},{value:"4.2.2 Apache Kafka",id:"422-apache-kafka",level:3},{value:"4.2.3 Kafka Connect and Debezium",id:"423-kafka-connect-and-debezium",level:3},{value:"4.2.4 Apicurio Schema Registry",id:"424-apicurio-schema-registry",level:3},{value:"4.2.5 Tumbleweed Backend API (TBA)",id:"425-tumbleweed-backend-api-tba",level:3},{value:"4.3 Automating Cloud Deployment",id:"43-automating-cloud-deployment",level:2}];function l(e){const n={a:"a",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",li:"li",ol:"ol",p:"p",section:"section",strong:"strong",sup:"sup",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"4-tumbleweed",children:"4. Tumbleweed"})}),"\n",(0,s.jsx)(n.p,{children:"Considering the trade-offs associated with enterprise CDC solutions and the complexity of building a DIY alternative, Tumbleweed recognized a gap in the available options for an end-to-end log-based CDC implementation of the outbox pattern."}),"\n",(0,s.jsxs)("figure",{children:[(0,s.jsx)("img",{src:"/img/comparison_chart.svg",className:"Comparison Chart",alt:"Comparison Chart",width:"80%"}),(0,s.jsx)("figcaption",{children:"Figure 1: Comparison Chart."})]}),"\n",(0,s.jsx)(n.h2,{id:"41-what-is-tumbleweed",children:"4.1 What is Tumbleweed?"}),"\n",(0,s.jsx)(n.p,{children:"Tumbleweed is an open-source, user-friendly framework designed specifically for teams that use microservices and want to sync data between those services using log-based CDC and the outbox pattern. It works as a drop-in solution to an existing or newly created microservice architecture. A simple CLI application is used to automatically deploy a self-hosted Tumbleweed pipeline to Amazon Web Services (AWS). Tumbleweed provides an intuitive UI that abstracts away the complexities of outbox table creation, configuring message broker and CDC tools, setting up source and sink connectors, defining consumers and subscribing them to event categories. Tumbleweed allows for an intuitive and straightforward approach, integrable within distributed architectures in minutes."}),"\n",(0,s.jsx)(n.h2,{id:"42-tumbleweed-implementation",children:"4.2 Tumbleweed Implementation"}),"\n",(0,s.jsx)(n.h3,{id:"421-tumbleweed-architecture",children:"4.2.1 Tumbleweed Architecture"}),"\n",(0,s.jsx)(n.p,{children:"Tumbleweed integrates and containerizes a variety of open-source frameworks and tools, along with a custom TypeScript backend API into an AWS deployable cluster."}),"\n",(0,s.jsxs)("figure",{children:[(0,s.jsx)("img",{src:"/img/tumbleweed_simplified_architecture.png",className:"Tumbleweed Architecture",alt:"Tumbleweed Architecture",width:"80%"}),(0,s.jsx)("figcaption",{children:"Figure 2: Tumbleweed Architecture."})]}),"\n",(0,s.jsx)(n.p,{children:"In order to understand how Tumbleweed functions, it's necessary to examine some of these technologies more in depth."}),"\n",(0,s.jsx)(n.h3,{id:"422-apache-kafka",children:"4.2.2 Apache Kafka"}),"\n",(0,s.jsx)(n.p,{children:"A key element of an event driven architecture for decoupled microservices is a message broker or event stream processing platform. Such a platform must reliably ingest large volumes of data from source services and stream it to consumer services. Such a platform is not a trivial technology, especially when built for scalability. Thus we needed to find something battle-tested and heavy-duty. We looked at several open source options, such as Apache Flink and Apache Pulsar, but found that Apache Kafka was the one that most fit our needs. Most importantly, a number of robust open-source CDC technologies such as Debezium and Kafka Connect have strong support for Kafka use cases. Additionally, Kafka has a wide user base, including both large enterprises and smaller scale DIY project users. Because of this, there are many online resources for understanding and using Kafka in a variety of stream processing contexts."}),"\n",(0,s.jsxs)(n.p,{children:["Kafka is a distributed, log-based message broker designed for massive real-time data streaming. Kafka centralizes data transmission with a cluster of brokers and their controllers, allowing greater fault tolerance and data durability",(0,s.jsx)(n.sup,{children:(0,s.jsx)(n.a,{href:"#user-content-fn-1",id:"user-content-fnref-1","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"1"})}),'. Producer services send records to the brokers and Kafka appends these records to various write-ahead log "topics". Consumer services then subscribe to specific "topics" in order to get the data that they need. ',(0,s.jsx)(n.sup,{children:(0,s.jsx)(n.a,{href:"#user-content-fn-2",id:"user-content-fnref-2","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"2"})})," A producer can produce one or many topics regardless of available consumers, and a consumer can subscribe to one or many topics from one or more producers. This approach allows for decoupling of producer and consumer services."]}),"\n",(0,s.jsxs)("figure",{children:[(0,s.jsx)("img",{src:"/img/kafka.svg",className:"Kafka Cluster",alt:"Kafka Cluster",width:"80%"}),(0,s.jsx)("figcaption",{children:"Figure 3: Kafka cluster."})]}),"\n",(0,s.jsxs)(n.p,{children:["Kafka is the backbone of Tumbleweed. We use a multi-node Kafka cluster for fault tolerance and high throughput. Although Kafka configuration and set-up can be complicated, once configured, Kafka abstracts away much of the complexities of stream processing and message brokering. Many enterprise solutions and large companies also rely on Kafka for their services; LinkedIn leverages Kafka to process upwards of 7 trillion messages per day. ",(0,s.jsx)(n.sup,{children:(0,s.jsx)(n.a,{href:"#user-content-fn-3",id:"user-content-fnref-3","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"3"})})]}),"\n",(0,s.jsx)(n.h3,{id:"423-kafka-connect-and-debezium",children:"4.2.3 Kafka Connect and Debezium"}),"\n",(0,s.jsx)(n.p,{children:"While Kafka solved much of our data streaming needs, we needed a way to get the data from producer services to Kafka itself. This is where Kafka Connect and Debezium came into play."}),"\n",(0,s.jsxs)(n.p,{children:["Kafka Connect allows for transmission between Kafka and external systems via self-built or predefined connectors: Source connectors can ingest data from external producer systems into Kafka topics and sink connectors can output the data from Kafka topics to the external consumer systems subscribed to those topics",(0,s.jsx)(n.sup,{children:(0,s.jsx)(n.a,{href:"#user-content-fn-4",id:"user-content-fnref-4","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"4"})}),"."]}),"\n",(0,s.jsxs)("figure",{children:[(0,s.jsx)("img",{src:"/img/kafka_connect_debezium.png",className:"Connect and Debezium",alt:"Connect and Debezium",width:"80%"}),(0,s.jsx)("figcaption",{children:"Figure 4: Kafka Connect with Debezium."})]}),"\n",(0,s.jsx)(n.p,{children:"Connect provides the connection to Kafka, but we still needed a source connector. In our research we came across Debezium, an open-source distributed platform that implements log-based Change Data Capture. Debezium offers a number of well-maintained and documented source connectors for use with Kafka Connect. These connectors can be used to capture and create event records with a consistent structure, regardless of the source database."}),"\n",(0,s.jsx)(n.p,{children:"To our knowledge, Debezium is currently the only production-ready, open-source tool of its kind. Fortunately, Debezium has a strong and active developer community. Although Debezium maintains a number of source connectors, its PostgreSQL connector is one of its core development features and as such was well-suited for our purposes. The Debezium PostgreSQL connector provides built-in support for capturing outbox table changes from the WAL. By default the connector will send all change event records from a single table to only one topic, but Debezium has a ready-for-use outbox event router SMTs (Single Message Transformations) which allow for event records from a single table to be sent to different topics based on the aggregateType. These features and more, greatly simplified our pipeline processes."}),"\n",(0,s.jsx)(n.p,{children:"Thus, Tumbleweed uses a Kafka Connect instance with Debezium PostgreSQL source connectors to listen to producer service\u2019s WAL to capture every create, update, and delete transaction and pass them to Kafka. They are then passed to our custom-built TypeScript Backend sink which streams the data to the appropriately subscribed consumer services."}),"\n",(0,s.jsx)(n.h3,{id:"424-apicurio-schema-registry",children:"4.2.4 Apicurio Schema Registry"}),"\n",(0,s.jsxs)(n.p,{children:["One reason Kafka transfers data so efficiently is that it does not perform any data verification on its own, but rather follows the \u201cZero Copy Principle\u201d, merely transferring data in byte format",(0,s.jsx)(n.sup,{children:(0,s.jsx)(n.a,{href:"#user-content-fn-5",id:"user-content-fnref-5","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"5"})}),". Thus data must be serialized by producers for transmission and de-serialized either by the sink connector or the consumer. Because Kafka does not perform data validation, a producer could send data in a format which the data de-serializing agent would be unable to handle, which would cause downstream applications and sink connectors to break."]}),"\n",(0,s.jsxs)("figure",{children:[(0,s.jsx)("img",{src:"/img/apicurio.png",className:"Apicurio",alt:"Apicurio",width:"80%"}),(0,s.jsx)("figcaption",{children:"Figure 5: Apicurio Schema Registry."})]}),"\n",(0,s.jsxs)(n.p,{children:["This issue can be alleviated by enforcing the use of specific data formats (e.g. JSON, AVRO, Protobuf) and a data schema (message structure in a given format). However, doing so requires including lengthy schema data in each message passed. A better approach is to add a schema registry. A schema registry is a process external to Kafka which stores and manages the schemas used in a Kafka cluster, requiring messages to only reference a schema ID. Schema registries also allow for schemas to evolve in a centralized manner.",(0,s.jsx)(n.sup,{children:(0,s.jsx)(n.a,{href:"#user-content-fn-6",id:"user-content-fnref-6","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"6"})})," Tumbleweed uses the open-source Apicurio Schema Registry with JSON Schema for messages passed between Debezium and the Tumbleweed Backend API."]}),"\n",(0,s.jsx)(n.h3,{id:"425-tumbleweed-backend-api-tba",children:"4.2.5 Tumbleweed Backend API (TBA)"}),"\n",(0,s.jsx)(n.p,{children:"Tumbleweed was created with the goal of being user-friendly. In order to achieve this, we needed to create a backend API to perform a plethora of actions on behalf of the user."}),"\n",(0,s.jsxs)("figure",{children:[(0,s.jsx)("img",{src:"/img/tumbleweed_backend.svg",className:"Tumbleweed Backend",alt:"Tumbleweed Backend",width:"80%"}),(0,s.jsx)("figcaption",{children:"Figure 6: Tumbleweed's backend architecture."})]}),"\n",(0,s.jsx)(n.p,{children:"The major actions the backend API performs include:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Outbox and heartbeat table creation"}),": When a source connector is added for a source database, the TBA creates an outbox and a heartbeat table in that database. The heartbeat table emits a message every few minutes to prevent a replication slot from becoming inactive, which can cause undesired WAL-segment accumulation."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Source connector configuration"}),": Allows for creation and deletion of Debezium PostgreSQL connector instances, with auto-configuration for proper function in the Tumbleweed pipeline."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Communication with Kafka"}),": The TBA utilizes the Node.JS Kafka client KafkaJS to Communicate with the Kafka cluster containers to create, retrieve, and delete Kafka topics and fetch additional useful topic and message metadata."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Consumer creation and management"}),": Allows for the creation and deletion of consumers which can subscribe to topics. Created consumers are provided a custom Tumbleweed Endpoint URL to implement message stream access."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Consumer Data sink connectors"}),": Creates custom-built sink connectors which receive data from Kafka and streams it to the appropriate consumers via SSE (Server Sent Events)."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"User Interface"}),": TBA serves a front end UI for easy pipeline configuration and management."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"PostgreSQL pipeline data management"}),": TBA stores and retrieves source, consumer, and topic configurations in a user configuration PostgreSQL database."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"43-automating-cloud-deployment",children:"4.3 Automating Cloud Deployment"}),"\n",(0,s.jsx)(n.p,{children:"A Tumbleweed pipeline is a complex cluster of containerized services. Deployment of such a pipeline can be very complicated with many configuration options. To further simplify pipeline setup, Tumbleweed allows users to deploy pipelines to their own AWS infrastructure via a custom CLI tool and Terraform, an orchestration tool for the automation of virtual infrastructure, which provisions and spins up the system with its necessary settings and software, while also handling versioning, dependencies, and easy teardown."}),"\n",(0,s.jsx)(n.p,{children:"This process provisions and deploys a cluster of AWS ECS (Elastic Cloud Services) managed containers running on Fargate via the user\u2019s AWS account. Each Tumbleweed user spins up their own private instance of this app which they access from a whitelisted IP address via a provided public URL."}),"\n",(0,s.jsx)(n.hr,{}),"\n","\n",(0,s.jsxs)(n.section,{"data-footnotes":!0,className:"footnotes",children:[(0,s.jsx)(n.h2,{className:"sr-only",id:"footnote-label",children:"Footnotes"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{id:"user-content-fn-1",children:["\n",(0,s.jsxs)(n.p,{children:["M. Kleppmann, Designing data-intensive applications: The Big Ideas Behind Reliable, Scalable, and Maintainable Systems. Oreilly & Associates Incorporated, 2017. ",(0,s.jsx)(n.a,{href:"#user-content-fnref-1","data-footnote-backref":"","aria-label":"Back to reference 1",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{id:"user-content-fn-2",children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://engineering.linkedin.com/kafka/benchmarking-apache-kafka-2-million-writes-second-three-cheap-machines",children:"J. Kreps, \u201cBenchmarking Apache Kafka: 2 million writes per second (On three cheap machines),\u201d LinkedIn, Apr. 27, 2014."})," ",(0,s.jsx)(n.a,{href:"#user-content-fnref-2","data-footnote-backref":"","aria-label":"Back to reference 2",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{id:"user-content-fn-3",children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://www.linkedin.com/blog/engineering/open-source/apache-kafka-trillion-messages",children:"\u201cHow LinkedIn customizes Apache Kafka for 7 trillion messages per day\u201d"})," ",(0,s.jsx)(n.a,{href:"#user-content-fnref-3","data-footnote-backref":"","aria-label":"Back to reference 3",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{id:"user-content-fn-4",children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://docs.confluent.io/platform/current/connect/index.html",children:"\u201cKafka Connect | Confluent Documentation.\u201d"})," ",(0,s.jsx)(n.a,{href:"#user-content-fnref-4","data-footnote-backref":"","aria-label":"Back to reference 4",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{id:"user-content-fn-5",children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://conduktor.io/blog/what-is-the-schema-registry-and-why-do-you-need-to-use-it",children:"\u201cWhat is the Schema Registry and why do you need to use it?\u201d"})," ",(0,s.jsx)(n.a,{href:"#user-content-fnref-5","data-footnote-backref":"","aria-label":"Back to reference 5",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{id:"user-content-fn-6",children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://debezium.io/blog/2020/04/09/using-debezium-with-apicurio-api-schema-registry/",children:"\u201cUsing Debezium with the Apicurio API and Schema registry,\u201d Debezium, Apr. 09, 2020."})," ",(0,s.jsx)(n.a,{href:"#user-content-fnref-6","data-footnote-backref":"","aria-label":"Back to reference 6",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},8453:(e,n,a)=>{a.d(n,{R:()=>o,x:()=>i});var t=a(6540);const s={},r=t.createContext(s);function o(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);