"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[915],{7764:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>l});const o=JSON.parse('{"id":"existing_solutions","title":"3. Existing Solutions","description":"There are several enterprise solutions which implement CDC systems for microservices. There are also a number of open-source tools that can be used in concert to create a comprehensive solution. Scalability, cost, and development effort need consideration when deciding which solution fits best for their purpose.","source":"@site/docs/existing_solutions.md","sourceDirName":".","slug":"/existing_solutions","permalink":"/docs/existing_solutions","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"id":"existing_solutions","title":"3. Existing Solutions","sidebar_position":3},"sidebar":"tutorialSidebar","previous":{"title":"2. Problem Domain","permalink":"/docs/problem_domain"},"next":{"title":"4. Tumbleweed","permalink":"/docs/tumbleweed"}}');var i=t(4848),s=t(8453);const r={id:"existing_solutions",title:"3. Existing Solutions",sidebar_position:3},a="3. Existing Solutions",c={},l=[{value:"3.1 Enterprise Solutions",id:"31-enterprise-solutions",level:2},{value:"3.2 DIY Solutions",id:"32-diy-solutions",level:2}];function d(e){const n={a:"a",h1:"h1",h2:"h2",header:"header",hr:"hr",li:"li",ol:"ol",p:"p",section:"section",sup:"sup",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"3-existing-solutions",children:"3. Existing Solutions"})}),"\n",(0,i.jsx)(n.p,{children:"There are several enterprise solutions which implement CDC systems for microservices. There are also a number of open-source tools that can be used in concert to create a comprehensive solution. Scalability, cost, and development effort need consideration when deciding which solution fits best for their purpose."}),"\n",(0,i.jsx)(n.h2,{id:"31-enterprise-solutions",children:"3.1 Enterprise Solutions"}),"\n",(0,i.jsxs)(n.p,{children:["Although CDC can be used for implementation of the outbox pattern, most enterprise CDC solutions focus on traditional source-to-sink (a sink being the destination for the data being sent) replication between data stores and have not often been designed for the specific use case of data syncing between microservices. However, there are several solutions, such as  Confluent",(0,i.jsx)(n.sup,{children:(0,i.jsx)(n.a,{href:"#user-content-fn-1",id:"user-content-fnref-1","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"1"})})," and Striim",(0,i.jsx)(n.sup,{children:(0,i.jsx)(n.a,{href:"#user-content-fn-2",id:"user-content-fnref-2","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"2"})}),", which do provide managed CDC for this case. Such solutions typically function well, however, they come with tradeoffs. These services are expensive and require recurring costs. Additionally, allowing the pipeline to be hosted by a managed service leads to decreased data privacy and less control over infrastructure."]}),"\n",(0,i.jsxs)("figure",{children:[(0,i.jsx)("img",{src:"/img/striim_confluent.png",className:"Striim and Confluent Logos",alt:"Striim and Confluent Logos",width:"80%"}),(0,i.jsx)("figcaption",{children:"Figure 1: Striim and Confluent."})]}),"\n",(0,i.jsx)(n.h2,{id:"32-diy-solutions",children:"3.2 DIY Solutions"}),"\n",(0,i.jsxs)(n.p,{children:["An alternative to enterprise solutions is to build a DIY framework. DIY solutions can be built by utilizing open-source tools such as Debezium",(0,i.jsx)(n.sup,{children:(0,i.jsx)(n.a,{href:"#user-content-fn-3",id:"user-content-fnref-3","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"3"})})," and Apache Kafka",(0,i.jsx)(n.sup,{children:(0,i.jsx)(n.a,{href:"#user-content-fn-4",id:"user-content-fnref-4","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"4"})}),", which offer extensive flexibility for data customization. Custom options include, but are not limited to schema evolution, data transformation, and topic customization. Building a DIY solution utilizing some of the aforementioned open-source tools may be a good fit for those teams that prefer to have more control over their infrastructure, with the option for extensive customizations in their CDC pipeline, while avoiding recurring costs from using an enterprise solution. These benefits come at the cost of managing the complex configurations of these tools, which may hinder a team's ability to deploy a CDC pipeline quickly. Without extensive research or experience in the problem domain and these technologies, even experienced developers will require considerable time to build a production ready DIY system."]}),"\n",(0,i.jsxs)("figure",{children:[(0,i.jsx)("img",{src:"/img/debezium_kafka.png",className:"Kafka and Debezium Logos",alt:"Kafka and Debezium Logos",width:"80%"}),(0,i.jsx)("figcaption",{children:"Figure 2: Apache Kafka and Debezium."})]}),"\n",(0,i.jsx)(n.hr,{}),"\n","\n",(0,i.jsxs)(n.section,{"data-footnotes":!0,className:"footnotes",children:[(0,i.jsx)(n.h2,{className:"sr-only",id:"footnote-label",children:"Footnotes"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{id:"user-content-fn-1",children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://developer.confluent.io/",children:"Confluent Developer: Your Apache Kafka\xae Journey begins here. (n.d.). Confluent."})," ",(0,i.jsx)(n.a,{href:"#user-content-fnref-1","data-footnote-backref":"","aria-label":"Back to reference 1",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{id:"user-content-fn-2",children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://www.striim.com/1",children:'"Striim (2024, October 28). Real-time data integration and streaming platform."'})," ",(0,i.jsx)(n.a,{href:"#user-content-fnref-2","data-footnote-backref":"","aria-label":"Back to reference 2",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{id:"user-content-fn-3",children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://debezium.io/",children:'"Debezium (n.d.) Debezium."'})," ",(0,i.jsx)(n.a,{href:"#user-content-fnref-3","data-footnote-backref":"","aria-label":"Back to reference 3",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{id:"user-content-fn-4",children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://kafka.apache.org/",children:"\u201cApache Kafka. (n.d.). Apache Kafka.\u201d"})," ",(0,i.jsx)(n.a,{href:"#user-content-fnref-4","data-footnote-backref":"","aria-label":"Back to reference 4",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var o=t(6540);const i={},s=o.createContext(i);function r(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);