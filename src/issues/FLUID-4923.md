---json
{
  "title": "FLUID-4923",
  "summary": "Remove the uPortal integration demo",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "y z",
  "reporter": "Michelle D'Souza",
  "date": "2013-02-21T17:52:47.836-0500",
  "updated": "2013-06-27T14:29:35.733-0400",
  "versions": [],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Demos"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Supersedes",
      "url": "/browse/FLUID-5062/",
      "key": "FLUID-5062",
      "summary": "UIO uportal integration test throws javascript error"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2013-06-27T13:57:13.363-0400",
      "body": "Merged pull request ( <https://github.com/fluid-project/infusion/pull/348> ) into the project repo at 8852f45e833adb8c8c0b2853e6011a12b9d1f96c\n"
    }
  ]
}
---
The uPortal integration demo was originally created to show several components on a single page. That need has evaporated as Infusion has been used more widely and the Fluid community has moved to creating larger applications.&#x20;

We also used the demo to test some features that we wanted to ensure would continue to work such as nested Reorderers. When we remove the demo, we should create tests to cover these features.&#x20;

        