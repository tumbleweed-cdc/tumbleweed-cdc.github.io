---
id: introduction
sidebar_label: Introduction
sidebar_position: 1
---

# 1. Introduction

![Tumbleweed Logo](/img/tumbleweed_logo.png)

Tumbleweed is an open-source, user-friendly framework designed for fast and consistent data propagation between microservices via Change Data Capture and the transactional outbox pattern.

Tumbleweed auto-deploys a self-hosted log-based Change Data Capture pipeline which abstracts away the complexity of setting up and using CDC tools. It is designed to observe changes in one or many PostgreSQL databases and sync that data to one or many consumer microservices in near real-time.

Tumbleweed’s implementation of the outbox pattern allows for the necessary decoupling of microservices in a distributed architecture. A web user interface provides further ease of use in configuration, allowing Tumbleweed users to deploy it quickly to their microservice architecture with minimal knowledge of the underlying technologies.

In this case study, we will discuss the technologies that make a framework like Tumbleweed possible. We will also explore some development challenges and potential future implementations for the framework.