---json
{
  "title": "ENGAGE-117",
  "summary": "Kettle should provide a means to parameterize all file paths so that applications can seamlessly run either in Eclipse or on a standalone server",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Colin Clark",
  "date": "2009-10-08T14:40:59.000-0400",
  "updated": "2009-11-03T11:52:18.000-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Kettle"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2009-10-08T14:44:42.000-0400",
      "body": "Bug Parade Engage 0.1&#x20;\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2009-10-13T16:17:16.000-0400",
      "body": "Kettle now works both from the created WAR and from eclipse.&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-11-03T11:52:18.000-0500",
      "body": "For the 0.1 release, the option for running from eclipse our from a war file were provided\n"
    }
  ]
}
---
At the moment, there are a few remaining places where paths are hardcoded in JavaScript. These include calls to mountDirectory() and any path rewriting rules specified as part of the options to kettle.renderHandler().

We should ensure that all file paths are located in configuration so that it's easy to deploy Kettle apps on a standalone server without breaking everything.

        