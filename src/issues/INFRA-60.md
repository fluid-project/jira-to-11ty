---json
{
  "title": "INFRA-60",
  "summary": "First Discovery Tool server - demo deployment",
  "tags": "INFRA",
  "project": {
    "key": "INFRA",
    "title": "Infrastructure"
  },
  "type": "Epic",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Alan Harnum",
  "reporter": "Alan Harnum",
  "date": "2015-11-24T11:22:04.617-0500",
  "updated": "2016-07-19T09:52:22.971-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/INFRA-59/",
      "key": "INFRA-59",
      "summary": "Create a Docker image for our version of CouchDB"
    },
    {
      "type": "Dependence",
      "url": "/browse/INFRA-63/",
      "key": "INFRA-63",
      "summary": "Add gpii-preferences-server Ansible role to master"
    },
    {
      "type": "Dependence",
      "url": "/browse/INFRA-61/",
      "key": "INFRA-61",
      "summary": "Merge fixes for Docker containers to ansible-nodejs role"
    },
    {
      "type": "Dependence",
      "url": "/browse/INFRA-62/",
      "key": "INFRA-62",
      "summary": "Build Preferences Server container using ansible-nodejs role"
    },
    {
      "type": "Dependence",
      "url": "/browse/INFRA-64/",
      "key": "INFRA-64",
      "summary": "Add Ansible-related features to Docker inclusivedesign/centos"
    },
    {
      "type": "Dependence",
      "url": "/browse/INFRA-65/",
      "key": "INFRA-65",
      "summary": "Rebuild our nodejs Docker image using the Ansible approach"
    },
    {
      "type": "Dependence",
      "url": "/browse/INFRA-66/",
      "key": "INFRA-66",
      "summary": "Build a new container for Flow Manager"
    },
    {
      "type": "Dependence",
      "url": "/browse/INFRA-67/",
      "key": "INFRA-67",
      "summary": "Build a container for First Discovery server"
    },
    {
      "type": "Dependence",
      "url": "/browse/INFRA-68/",
      "key": "INFRA-68",
      "summary": "Create Ansible role to deploy Docker host"
    },
    {
      "type": "Dependence",
      "url": "/browse/INFRA-71/",
      "key": "INFRA-71",
      "summary": "Rebuild gpii-universal Docker image using Ansible nodejs role"
    },
    {
      "type": "Related to",
      "url": "/browse/INFRA-73/",
      "key": "INFRA-73",
      "summary": "Assess removing supervisor from Docker container images in favour of Docker run restart policies"
    }
  ],
  "attachments": [],
  "comments": []
}
---
For tracking dependent and linked issues towards the end of getting the First Discovery server (<https://github.com/GPII/first-discovery-server>) live and demoable. We've surfaced that this will require:

* a number of new and rebuilt Docker containers that use Ansible to build and run GPII apps and a CouchDB container
* a new VM to serve as a Docker host + private Docker repository (for datacentre machines only)
* some other tasks and coordination

Basically, we can use this to exercise the new approach to building and running containers.

Notes from 11-24 meeting: <https://docs.google.com/document/d/12YJNBXg2BT30m9dZ01r8FJ6mSglsD0A87zsDNkxHhKQ/edit>

        