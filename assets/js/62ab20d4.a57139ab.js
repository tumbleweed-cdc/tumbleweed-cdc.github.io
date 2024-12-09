"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[796],{8764:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>n,toc:()=>u});const n=JSON.parse('{"id":"future_work","title":"Future Work","description":"Tumbleweed is a useful and efficient framework, but there is always room for improvement. Given the time, these are some areas in which we would like to expand upon in the future.","source":"@site/docs/future_work.md","sourceDirName":".","slug":"/future_work","permalink":"/docs/future_work","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"id":"future_work","title":"Future Work","sidebar_position":7},"sidebar":"tutorialSidebar","previous":{"title":"Challenges","permalink":"/docs/challenges"}}');var o=i(4848),a=i(8453);const r={id:"future_work",title:"Future Work",sidebar_position:7},s="7. Future Work",l={},u=[{value:"7.1 Login Functionality and Token Authorization",id:"71-login-functionality-and-token-authorization",level:2},{value:"7.2 Support for Different Databases",id:"72-support-for-different-databases",level:2},{value:"7.3 Topic Filtering/Transformation",id:"73-topic-filteringtransformation",level:2},{value:"7.4 Optional Topic Autofill from Source Database",id:"74-optional-topic-autofill-from-source-database",level:2},{value:"References",id:"references",level:2}];function c(e){const t={a:"a",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",section:"section",sup:"sup",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"7-future-work",children:"7. Future Work"})}),"\n",(0,o.jsx)(t.p,{children:"Tumbleweed is a useful and efficient framework, but there is always room for improvement. Given the time, these are some areas in which we would like to expand upon in the future."}),"\n",(0,o.jsx)(t.h2,{id:"71-login-functionality-and-token-authorization",children:"7.1 Login Functionality and Token Authorization"}),"\n",(0,o.jsx)(t.p,{children:"In our current design, only whitelisted IP addresses can access the UI of a Tumbleweed instance. This prevents unauthorized access to the configuration of the pipeline. However, it might be more secure to further introduce a login feature as implemented in many enterprise solutions, making it impossible to interact with the pipeline configuration without valid login credentials."}),"\n",(0,o.jsx)(t.p,{children:"More importantly, although access to the UI is limited, we were unable to fully secure access to the backend API endpoint that streams data to microservice consumers. Thus anyone with access to the public IP and port could potentially spoof a Tumbleweed endpoint and consume data from a pipeline instance. Although this would require discovering the public IP, the correct port, and a functioning Kafka group ID, it still remains a security risk."}),"\n",(0,o.jsxs)(t.p,{children:["We considered adding an additional whitelist feature for this, but realized that consumer IP addresses are more likely to change frequently.\nAs a potential solution to this security flaw, we would implement JWT (JSON Web Token) authentication. A JWT is a compact, URL-safe, self-contained way for securely transmitting information between parties as a JSON object",(0,o.jsx)(t.sup,{children:(0,o.jsx)(t.a,{href:"#user-content-fn-1",id:"user-content-fnref-1","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"1"})}),". When a user logs in, Tumbleweed would generate a JWT containing claims, such as the user's identity. This token is sent to the client, and included in subsequent requests, allowing the server to verify the user\u2019s identity without maintaining session state. JWT would allow secure and stateless user authentication, ensuring that only authorized users can log in and interact with a Tumbleweed pipeline instance.\nTogether, these features would provide additional layers of protection for Tumbleweed users and their data, aligning the application with modern security standards."]}),"\n",(0,o.jsx)(t.h2,{id:"72-support-for-different-databases",children:"7.2 Support for Different Databases"}),"\n",(0,o.jsx)(t.p,{children:"In its current implementation, Tumbleweed supports creating connectors exclusively for PostgreSQL databases. While this is a strong starting point due to PostgeSQL\u2019s popularity and  robust features for CDC, we recognize the importance of supporting a broader range of databases to meet more diverse user needs.\nFuture versions of Tumbleweed could aim to include support for additional databases such as MongoDB or MySQL. By expanding database compatibility, we can cater to organizations with varied tech stacks, making Tumbleweed a more versatile solution for microservice data sync pipelines. Supporting multiple database technologies would also position Tumbleweed as a more comprehensive solution in a competitive landscape.\nAdding support for other databases would also present new technical challenges, such as integrating with different replication mechanisms (e.g., MySQL\u2019a binlog or MongoDB\u2019s oplog) or handling schema-less databases like MongoDB."}),"\n",(0,o.jsx)(t.h2,{id:"73-topic-filteringtransformation",children:"7.3 Topic Filtering/Transformation"}),"\n",(0,o.jsx)(t.p,{children:"Currently, consumers receive all data passing through the pipeline based on the topics they are subscribed to. In future implementations, we could aim to introduce the ability for users to filter data dynamically based on a set of criteria, such as by types/sub-topics or various attributes of the payload. This feature would give users the power to tailor the data streams they consume, ensuring that only the most relevant data is captured by their consumers.\nTo achieve this, we would implement a filtering layer that operates on the pipeline\u2019s outgoing data stream. Users could define filtering rules through the provided Tumbleweed UI, which would then be applied before the data is sent to the subscribed consumers. By doing this, not only would the volume of data being processed by downstream services be decreased, but the overall performance and system efficiency would be improved by minimizing network and compute overhead.\nAdditionally, implementing a data transformation capability would allow users to reshape the data before consumption. By reshaping the data, we\u2019d allow users to extract and reformat fields to match a schema expected by the consumer service.\nBy adding filtering and transformation capabilities, Tumbleweed would offer users more granular control over the data flowing through their pipelines, making it a more flexible and powerful tool for data integration."}),"\n",(0,o.jsx)(t.h2,{id:"74-optional-topic-autofill-from-source-database",children:"7.4 Optional Topic Autofill from Source Database"}),"\n",(0,o.jsx)(t.p,{children:"Topics are currently created through inputting a comma-separated list of topic names when creating a source connector. However, it might be more user-friendly to generate a list of potential topics based on the source databases existing tables. Users could then select topics with ease, while still being able to manually input if necessary. By eliminating the requirement to manually input topics, the setup process would become more intuitive."}),"\n",(0,o.jsx)(t.h2,{id:"references",children:"References"}),"\n","\n",(0,o.jsxs)(t.section,{"data-footnotes":!0,className:"footnotes",children:[(0,o.jsx)(t.h2,{className:"sr-only",id:"footnote-label",children:"Footnotes"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{id:"user-content-fn-1",children:["\n",(0,o.jsxs)(t.p,{children:["\u201cJWT Documentation\u201d: ",(0,o.jsx)(t.a,{href:"https://jwt.io/introduction",children:"https://jwt.io/introduction"})," ",(0,o.jsx)(t.a,{href:"#user-content-fnref-1","data-footnote-backref":"","aria-label":"Back to reference 1",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n"]}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},8453:(e,t,i)=>{i.d(t,{R:()=>r,x:()=>s});var n=i(6540);const o={},a=n.createContext(o);function r(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);