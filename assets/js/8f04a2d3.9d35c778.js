"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[183],{7592:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"problem_domain","title":"Problem Domain","description":"2.1 Microservices and Event Driven Architecture","source":"@site/docs/problem_domain.md","sourceDirName":".","slug":"/problem_domain","permalink":"/docs/problem_domain","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"id":"problem_domain","title":"Problem Domain","sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"Introduction","permalink":"/docs/introduction"},"next":{"title":"Existing Solutions","permalink":"/docs/existing_solutions"}}');var n=a(4848),r=a(8453);const o={id:"problem_domain",title:"Problem Domain",sidebar_position:2},i="2. Problem Domain",c={},d=[{value:"2.1 Microservices and Event Driven Architecture",id:"21-microservices-and-event-driven-architecture",level:2},{value:"2.2 Event Stream Processing and Message Brokers",id:"22-event-stream-processing-and-message-brokers",level:2},{value:"2.3 The Dual-Write Problem",id:"23-the-dual-write-problem",level:2},{value:"2.4 The Outbox Pattern",id:"24-the-outbox-pattern",level:2},{value:"2.5 Change Data Capture",id:"25-change-data-capture",level:2},{value:"2.5.1 Log-based CDC",id:"251-log-based-cdc",level:3}];function l(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",section:"section",sup:"sup",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"2-problem-domain",children:"2. Problem Domain"})}),"\n",(0,n.jsx)(t.h2,{id:"21-microservices-and-event-driven-architecture",children:"2.1 Microservices and Event Driven Architecture"}),"\n",(0,n.jsx)(t.p,{children:"Microservice architectures have become a prominent solution to the difficulties involved in maintaining and scaling large-scale applications. Whereas monolithic architecture functionality is built into a single unit of tightly-coupled components, a microservice architecture separates core functionality into smaller, independent services. These services are typically distributed across a network. This allows for each service to be maintained and scaled independently as needed, which in turn allows for faster development cycles."}),"\n",(0,n.jsxs)(t.p,{children:["The flexibility and scalability of a distributed architecture introduces additional challenges, particularly in the realm of inter-service communication and data exchange. A good microservice architecture involves the decoupling of services from each other. In other words, services should be as autonomous as possible, with few external dependencies.",(0,n.jsx)(t.sup,{children:(0,n.jsx)(t.a,{href:"#user-content-fn-1",id:"user-content-fnref-1","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"1"})})," It is precisely this autonomy and loose coupling between services that provides much of the benefit of microservice architectures: allowing for services to fail and/or change in isolation, scale as needed, and more."]}),"\n",(0,n.jsxs)(t.p,{children:["Perhaps the greatest challenge",(0,n.jsx)(t.sup,{children:(0,n.jsx)(t.a,{href:"#user-content-fn-2",id:"user-content-fnref-2","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"2"})})," then becomes how to exchange data between services under famously unreliable and complex circumstances",(0,n.jsx)(t.sup,{children:(0,n.jsx)(t.a,{href:"#user-content-fn-3",id:"user-content-fnref-3","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"3"})}),", while maintaining this autonomy and decoupling. Services that need to interact are required to update both their own data and propagate this data and/or send notification of the data changes to other services. While this can be done via some manner of synchronous point-to-point API (ex. REST, RPC) between services, such an approach would require the services to be aware of each other to a degree that creates more coupling than is ideal in microservice architectures. Such tight coupling can lead to issues in a variety of ways, such as when a service becomes unavailable, when implementing new services, or when refactoring existing services.",(0,n.jsx)(t.sup,{children:(0,n.jsx)(t.a,{href:"#user-content-fn-4",id:"user-content-fnref-4","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"4"})})," Additionally, if data is propagated in a synchronous manner, this can become a blocking bottleneck with cascading effects throughout the system."]}),"\n",(0,n.jsxs)(t.p,{children:["One solution for this problem is the use of Event Driven Architecture (EDA). In EDA, any \u201cstate changes\u201d in a service can also be viewed as events, and records of such events can be sent as messages to be consumed by other services.",(0,n.jsx)(t.sup,{children:(0,n.jsx)(t.a,{href:"#user-content-fn-5",id:"user-content-fnref-5","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"5"})})," Services that need to communicate assume the role of event producers and/or event consumers. We can further enhance the strong decoupling of this approach by introducing an event stream processing platform to receive data from producers and propagate them to downstream consumers."]}),"\n",(0,n.jsx)(t.h2,{id:"22-event-stream-processing-and-message-brokers",children:"2.2 Event Stream Processing and Message Brokers"}),"\n",(0,n.jsxs)(t.p,{children:['In event stream processing, an event is a record or "...a small, self-contained, immutable object containing the details of something that happened at some point in time..."',(0,n.jsx)(t.sup,{children:(0,n.jsx)(t.a,{href:"#user-content-fn-6",id:"user-content-fnref-6","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"6"})}),' and an event stream is therefore an "unbounded, incrementally processed',(0,n.jsx)(t.sup,{children:(0,n.jsx)(t.a,{href:"#user-content-fn-6",id:"user-content-fnref-6-2","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"6"})}),' " stream of such data. Many event stream processing frameworks can also be described as asynchronous message-passing systems or message brokers.',(0,n.jsx)(t.sup,{children:(0,n.jsx)(t.a,{href:"#user-content-fn-6",id:"user-content-fnref-6-3","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"6"})})," Generally speaking, message brokers allow producing processes to send messages or records to a topic or queue, then the broker facilitates the delivery of that data to subscribed consumers."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.img,{alt:"Event Streaming",src:a(2568).A+"",title:"Event streaming",width:"1800",height:"501"}),"\n",(0,n.jsx)("figcaption",{children:"Figure 2: Event Stream Processing."})]}),"\n",(0,n.jsxs)(t.p,{children:["The use of a message broker has a number of advantages over direct messaging between services. It can act as a buffer for when consumers are unavailable and more easily allows for a single message to be sent to multiple consumers. This approach also promotes greater decoupling between producer and consumer services, allowing microservices to be designed agnostic as to whom the event data is being sent or how it is being consumed. ",(0,n.jsx)(t.sup,{children:(0,n.jsx)(t.a,{href:"#user-content-fn-7",id:"user-content-fnref-7","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"7"})})," Consumers,  likewise, subscribe to only the types of events that concern their business logic and receive these events for processing from the streaming platform."]}),"\n",(0,n.jsx)(t.h2,{id:"23-the-dual-write-problem",children:"2.3 The Dual-Write Problem"}),"\n",(0,n.jsx)(t.p,{children:"As we\u2019ve seen, a microservice architecture introduces many challenges related to data management across services and one of the most notable is the dual-write problem.\nA dual-write may occur when data needs to be written to different systems. For example, if one service has its own database and needs to propagate information to other services, the data is typically written to the source database as well as another system, such as a message broker, before reaching its destination."}),"\n",(0,n.jsx)(t.p,{children:"This process of writing changes to separate systems is where problems can arise and create data inconsistencies between services. If the data successfully writes to the source database but fails to be sent to a message broker due to some kind of application or network issue, the source database will have a record of the change even if the destination never receives it."}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.img,{alt:"Dual Write 1",src:a(6299).A+"",title:"Dual Write Problem 1",width:"1600",height:"801"}),"\n",(0,n.jsx)("figcaption",{children:"Figure 1: Fails to write to the message broker."})]}),"\n",(0,n.jsx)(t.p,{children:"On the other hand, if the data was successfully written to a message broker, but failed to write to the source database, the destination service received the message but the source database has no record of it. Either scenario can result in errors or data inconsistencies, complicating operations between services."}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.img,{alt:"Dual Write 2",src:a(1912).A+"",title:"Dual Write Problem 2",width:"1600",height:"801"}),"\n",(0,n.jsx)("figcaption",{children:"Figure 2: Fails to write to the source database."})]}),"\n",(0,n.jsx)(t.p,{children:"One solution is to only write changes once. If we chose to write changes to a broker, the source service would be listening for new messages, as well as the destination service. When a change occurs in the source service, the message is first sent to the broker before being consumed by both the source and destination services."}),"\n",(0,n.jsx)(t.p,{children:"This scenario comes with its own drawbacks. While data may eventually be consistent, a source service writing to the broker before updating its own database can introduce latency and create delays, especially if that data needs to be immediately queried from the source database. This has the potential to negatively impact user experience. The handling of delivery failures would also need to be considered. For example, if a message was successfully sent to the message broker but failed to write to the source database for some reason, additional retry logic may be required to address this failure."}),"\n",(0,n.jsx)(t.p,{children:"Instead, we could write changes to the source database before pushing messages to a broker. For such an approach, a microservice architecture design pattern known as the \u201ctransactional outbox pattern\u201d can be used."}),"\n",(0,n.jsx)(t.h2,{id:"24-the-outbox-pattern",children:"2.4 The Outbox Pattern"}),"\n",(0,n.jsx)(t.p,{children:"When using the transactional outbox pattern, database changes are recorded locally to a specially created \u201coutbox\u201d table within the same transaction as the original operation. Transactions in a database allow multiple actions to be carried out as a single logical operation. The outbox table stores metadata about the changes, such as the operation type, and a data payload. Separate processes should then monitor the outbox table for new entries and update the necessary microservices accordingly."}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.img,{alt:"Outbox Pattern",src:a(5643).A+"",title:"Outbox Pattern",width:"1800",height:"1006"}),"\n",(0,n.jsx)("figcaption",{children:"Figure 3: The outbox pattern."})]}),"\n",(0,n.jsx)(t.p,{children:"Outbox table schemas can vary but typically include the following columns:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"id"}),": A unique identifier for each outbox event"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"aggregatetype"}),": An event descriptor, often called a topic, which can be used for categorized routing of event records via a messaging system. For example, In an order propagating service, a change to an orders database might have the aggregate type of \u201corders\u201d."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"type"}),": An event category sub-type, e.g. \u201corder_created\u201d which can be used by an event stream processing framework and/or consumer microservices for filtering purposes or triggering various actions."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"payload"}),": A JSONB object that contains the actual data of the event, e.g. the row-level data change to the orders database."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"aggregateid"}),": An event key which is the ID of the payload and is used for correct ordering of event records in a messaging system."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Though the outbox pattern is an effective solution to the dual-write problem, it also comes with its own potential drawbacks. Source services now have to write additional statements to insert data to an outbox table, which could have an impact on latency and throughput. In most situations, this likely wouldn\u2019t be noticeable, but may be something to consider if your application is processing large volumes of data. There is also a risk of losing messages or accumulating excess data if the outbox table is not properly managed."}),"\n",(0,n.jsx)(t.p,{children:"While the outbox pattern can be configured in multiple ways, implementing it via Change Data Capture can ensure that all changes to the source database are efficiently propagated to other microservices in near real-time."}),"\n",(0,n.jsx)(t.h2,{id:"25-change-data-capture",children:"2.5 Change Data Capture"}),"\n",(0,n.jsx)(t.p,{children:"Data has become a fundamental component of our world and when it comes to choosing the best way to manage and move that data, there are two common methods, Extract, Transform, Load (ETL) and Change Data Capture (CDC). ETL is a more traditional approach and most effective when data can be moved in larger batches (batch processing) at regular intervals. CDC is best used in streaming data contexts, where batching makes less sense, and information is needed in near real-time. Near real-time refers to systems that can tolerate slightly longer than the 250 milliseconds required for hard real-time. As many modern data systems involve a non-stop flow of data, CDC is taking prominence as a valuable approach."}),"\n",(0,n.jsx)(t.p,{children:"Change Data Capture (CDC) is the process of monitoring a source, capturing data changes in near real-time, and propagating those changes to a variety of downstream consumers, which may include other databases, caches, applications, and more. There are three primary CDC methods in common usage: time-based, trigger-based, and log-based.\nTime-based CDC requires semi-invasive database schema changes by adding timestamp columns to each table that tracks when the row was last modified. While somewhat straightforward to implement, time-based CDC is unable to track delete operations and every row in a table must be scanned to find the latest updated value, making it suitable only when a small percentage of data changes."}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.img,{alt:"Time Based CDC",src:a(8142).A+"",title:"Timestamp Based CDC",width:"1301",height:"401"}),"\n",(0,n.jsx)("figcaption",{children:"Figure 4: Time-Based CDC"})]}),"\n",(0,n.jsx)(t.p,{children:"Trigger-based CDC involves using a built-in database function that is automatically triggered whenever an insert, update, or delete operation occurs on a table. These changes are then stored in what is often called a \u201cshadow table\u201d, which can then be used for propagation of data changes to downstream systems. While triggers are supported by most databases, this method requires multiple writes for every change which impacts the source database performance. It can also become cumbersome to manage a large number of triggers."}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.img,{alt:"Trigger Based CDC",src:a(8601).A+"",title:"Trigger Based CDC",width:"1301",height:"401"}),"\n",(0,n.jsx)("figcaption",{children:"Figure 4: Trigger-Based CDC"})]}),"\n",(0,n.jsx)(t.p,{children:"Although both time-based and trigger-based CDC still remain in use, log-based CDC has emerged as a generally more efficient and less invasive technique by capturing changes directly from database transaction logs."}),"\n",(0,n.jsx)(t.h3,{id:"251-log-based-cdc",children:"2.5.1 Log-based CDC"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.img,{alt:"Log Based CDC",src:a(2045).A+"",width:"1103",height:"481"}),"\n",(0,n.jsx)("figcaption",{children:"Figure 5: Log-Based CDC"})]}),"\n",(0,n.jsx)(t.p,{children:"For applications that need to access data in near-real time, Log-based CDC is the most widely-used among the various CDC solutions.  When changes happen to a database via create, update, or delete operations, the database writes these changes into the transaction log before they are written to the database. In PostgreSQL the transaction log is known as the Write-Ahead Log (WAL). The primary use for transaction logs is backup and recovery, but various CDC tools can read from these logs in order to replicate changes and send them to other systems."}),"\n",(0,n.jsx)(t.p,{children:"Some of the advantages of log-based CDC include:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Near real-time tracking of changes, ensuring quick delivery to target systems."}),"\n",(0,n.jsx)(t.li,{children:"Minimal performance impact on source database since changes are read from transaction logs instead of the direct database querying method that other techniques may use."}),"\n",(0,n.jsx)(t.li,{children:"Changes are received in the same order that they occurred, ensuring data consistency."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"One of the disadvantages of Log-based CDC is that it is highly dependent on the type of source database being used. No universal log format or mechanisms between different types of databases results in less flexibility in CDC solutions. For example, Tumbleweed only works with PostgreSQL and would require significant modification in order to accommodate other database types."}),"\n","\n",(0,n.jsxs)(t.section,{"data-footnotes":!0,className:"footnotes",children:[(0,n.jsx)(t.h2,{className:"sr-only",id:"footnote-label",children:"Footnotes"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{id:"user-content-fn-1",children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://blog.christianposta.com/microservices/why-microservices-should-be-event-driven-autonomy-vs-authority/",children:"C. Posta, \u201cWhy Microservices Should Be Event Driven: Autonomy vs Authority,\u201d Software Blog, May 27, 2016"}),". ",(0,n.jsx)(t.a,{href:"#user-content-fnref-1","data-footnote-backref":"","aria-label":"Back to reference 1",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{id:"user-content-fn-2",children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://blog.christianposta.com/microservices/the-hardest-part-about-microservices-data/",children:"C. Posta, \u201cThe hardest part about microservices: your data,\u201d Software Blog, Jul. 14, 2016."})," ",(0,n.jsx)(t.a,{href:"#user-content-fnref-2","data-footnote-backref":"","aria-label":"Back to reference 2",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{id:"user-content-fn-3",children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://ably.com/blog/8-fallacies-of-distributed-computing",children:"A. Diaconu, \u201cNavigating the 8 fallacies of distributed computing,\u201d Ably Realtime, Oct. 07, 2022."})," ",(0,n.jsx)(t.a,{href:"#user-content-fnref-3","data-footnote-backref":"","aria-label":"Back to reference 3",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{id:"user-content-fn-4",children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://debezium.io/blog/2019/02/19/reliable-microservices-data-exchange-with-the-outbox-pattern/",children:"G. Morling, \u201cReliable microservices data exchange with the outbox pattern,\u201d Debezium, Feb. 19, 2019."})," ",(0,n.jsx)(t.a,{href:"#user-content-fnref-4","data-footnote-backref":"","aria-label":"Back to reference 4",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{id:"user-content-fn-5",children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://dzone.com/articles/best-practices-for-event-driven-microservice-archi",children:"J. Skowronski, \u201cBest Practices for Event-Driven Microservice Architecture,\u201d dzone.com, Sep. 11, 2019."})," ",(0,n.jsx)(t.a,{href:"#user-content-fnref-5","data-footnote-backref":"","aria-label":"Back to reference 5",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{id:"user-content-fn-6",children:["\n",(0,n.jsxs)(t.p,{children:["M. Kleppmann, Designing data-intensive applications: The Big Ideas Behind Reliable, Scalable, and Maintainable Systems. Oreilly & Associates Incorporated, 2017. ",(0,n.jsx)(t.a,{href:"#user-content-fnref-6","data-footnote-backref":"","aria-label":"Back to reference 6",className:"data-footnote-backref",children:"\u21a9"})," ",(0,n.jsxs)(t.a,{href:"#user-content-fnref-6-2","data-footnote-backref":"","aria-label":"Back to reference 6-2",className:"data-footnote-backref",children:["\u21a9",(0,n.jsx)(t.sup,{children:"2"})]})," ",(0,n.jsxs)(t.a,{href:"#user-content-fnref-6-3","data-footnote-backref":"","aria-label":"Back to reference 6-3",className:"data-footnote-backref",children:["\u21a9",(0,n.jsx)(t.sup,{children:"3"})]})]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{id:"user-content-fn-7",children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://www.redhat.com/en/topics/integration/what-is-event-driven-architecture",children:"\u201cWhat is event-driven architecture?,\u201d redhat.com, Sep. 27, 2019."})," ",(0,n.jsx)(t.a,{href:"#user-content-fnref-7","data-footnote-backref":"","aria-label":"Back to reference 7",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},8601:(e,t,a)=>{a.d(t,{A:()=>s});const s=a.p+"assets/images/Trigger-based_CDC-c24b2d4d9285e7c0b9335b2ee8da54d6.png"},6299:(e,t,a)=>{a.d(t,{A:()=>s});const s=a.p+"assets/images/dual-write_1-d26c82253f357eb731c0a3e15bf64a34.svg"},1912:(e,t,a)=>{a.d(t,{A:()=>s});const s=a.p+"assets/images/dual-write_2-b2cdef87941337a3f5364ef3f0a2380e.svg"},2568:(e,t,a)=>{a.d(t,{A:()=>s});const s=a.p+"assets/images/event_streaming-0416233c574db584b036c9219cc59bbf.svg"},2045:(e,t,a)=>{a.d(t,{A:()=>s});const s=a.p+"assets/images/log-based-cdc-76e18054de9f8fb2474eba75f498cdcd.png"},5643:(e,t,a)=>{a.d(t,{A:()=>s});const s=a.p+"assets/images/outbox_pattern-c554b303ac13aead90fb991c60da5f22.svg"},8142:(e,t,a)=>{a.d(t,{A:()=>s});const s=a.p+"assets/images/timestamp-based_CDC-ceb49d01b144dd931f925bb8f725e250.svg"},8453:(e,t,a)=>{a.d(t,{R:()=>o,x:()=>i});var s=a(6540);const n={},r=s.createContext(n);function o(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);