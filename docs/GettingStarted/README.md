---
sidebar_position: 3
slug: /GettingStarted
---

# Getting Started

It is very easy to get started with Hyper Cloud Automation. When you log in for the first time (Google login or Signing up with email and password) a new [Organization](../Concepts/Organization.md) will be created for you. Every user will get one [Organization](../Concepts/Organization.md). You can invite other team members to use your organization.

## Maximum Number of Users

Based on your subscription there is a limit to maximum number of Users you can have in the organization.

## Cloud Authentication

In order to deploy infrastructure you will need define ways in which `Hyper Cloud Automation` tool can authenticate to your Cloud accounts. The easiest way is to set the [Cloud Keys](../Concepts/Organization.md#cloud-keys) in the [Organization](../Concepts/Organization.md). More detailes about cloud authentication can be found in [TODO].

:::tip
The Hyper Cloud Automation tool can manage all kind of infrastructure components but in order to do that you need to give the tool enough permissions. Easiest way to get started is to create cloud keys with Administration level roles.
In case of AWS you can create access tokens with Administrator role. In case of GCP your can create a service account and assign it the Owner role on the project.
:::

## Build Environments

[Environments](../Concepts/Environment.md), [Modules](../Concepts/Module.md), and [Data Sources](../Concepts/DataSource.md) are core building concepts for creating your infrastructre. The best way to get familiar with the tool is by doing examples
