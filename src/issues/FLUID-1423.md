---json
{
  "title": "FLUID-1423",
  "summary": "jqUnit: Provide a means for easily testing the sequence and contents of function invocations.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "New Feature",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Colin Clark",
  "date": "2008-09-03T17:17:06.000-0400",
  "updated": "2014-03-04T09:05:34.377-0500",
  "versions": [
    "1.4"
  ],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Testing Infrastructure"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-4850/",
      "key": "FLUID-4850",
      "summary": "Implement \"test case grade\" to assist IoC-directed testing and event sequence testing"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2013-01-13T18:19:14.201-0500",
      "body": "The \"invocationTracker\" was delivered as part of 1.4. Also, <https://fluidproject.atlassian.net/browse/FLUID-4850#icft=FLUID-4850> delivers similar but more advanced functionality covering the case of asynchronous event sequences as well\n"
    }
  ]
}
---
At the moment, there's nothing built into jqUnit that helps us test the order and contents of function invocations. For example, in the DemoUploadManager, the core logic is orchestrational: it's important to test that each callback function is called in the correct order, and that the arguments are appropriate.

An "invocation tracker" in jqUnit would be immensely helpful.

        