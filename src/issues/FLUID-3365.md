---json
{
  "title": "FLUID-3365",
  "summary": "jqUnit's fetchTemplate() function should load templates synchronously, rather than asynchronously, to be more flexible",
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
  "date": "2009-11-05T21:35:01.000-0500",
  "updated": "2010-03-30T19:16:01.000-0400",
  "versions": [
    "1.1.1",
    "1.1.2"
  ],
  "fixVersions": [
    "1.2"
  ],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-3349/",
      "key": "FLUID-3349"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2009-11-05T21:36:13.000-0500",
      "body": "Due to the awkward state of the Builder tests, we appear to require the template to be loaded immediately within setup code. Making fetchTemplate() synchronous should address this issue.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-03-30T19:15:57.000-0400",
      "body": "This issue was fixed for Infusion 1.2\n"
    }
  ]
}
---
At the moment, jqUnit's fetchTemplate() method loads templates asynchronously using jQuery.load().We should replace the call to load with a synchronous Ajax calls so that tests can be assured that the template will be in place immediately after the call to fetchTemplate() returns.

        