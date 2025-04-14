---json
{
  "title": "FLUID-6195",
  "summary": "Model relay rule which triggers bare exception during construction will permanently corrupt framework",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2017-09-18T21:12:11.358-0400",
  "updated": "2017-09-26T12:49:20.249-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Data Binder",
    "IoC System"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Cindy Li",
      "date": "2017-09-26T12:49:16.835-0400",
      "body": "[The pull request](https://github.com/fluid-project/infusion/pull/852) has been merged into the project repo master branch at 283391f4815b8e146b94e7b59c7ec6f9e2e18473\n"
    }
  ]
}
---
Whilst writing a fix for <https://fluidproject.atlassian.net/browse/FLUID-6191#icft=FLUID-6191>, it was observed that until the exception triggered during the relay parsing was improved to be a framework exception, the framework's model transaction state would become permanently corrupted, leading to widespread failures in all the following tests in the file. We should ensure that such records are cleaned up in all possible failure cases, at the very least once our FLUID-6148 potentia II rewrite is implemented.

        