---json
{
  "title": "FLUID-824",
  "summary": "Port the Tabs example code to the \"that-ism\" style of component structure.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Colin Clark",
  "date": "2008-06-25T23:13:22.000-0400",
  "updated": "2011-01-21T09:47:16.517-0500",
  "versions": [],
  "fixVersions": [
    "0.4"
  ],
  "components": [
    "Workshops, Presentations, Reports"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2008-06-27T17:29:39.000-0400",
      "body": "Replaced Tabs constructor with a \"that-ist\" creator function. Removed the use of prototypes, favouring simple property assignment and the new fluid.defaults() api.\n"
    }
  ]
}
---
The Tabs example, part of our Fearless JavaScript workshop, is designed to show the essential techniques of building Fluid components. It should be updated to illustrate the current approach to handling object state in components using entirely functional idioms. Here are the steps:

* The constructor function should be replaced with a creator function which refers to "that" as a stable instance reference&#x20;
* The use of prototypes should be replaces with plain old object properties
* Defaults should be stored in the new fluid.defaults store\
  &#x20;

        