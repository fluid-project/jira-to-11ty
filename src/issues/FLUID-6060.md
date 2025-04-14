---json
{
  "title": "FLUID-6060",
  "summary": "Cannot drag and drop items in the Multiple Versions of Infusion",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "Antranig Basman",
  "reporter": "Justin Obara",
  "date": "2016-11-11T10:12:56.451-0500",
  "updated": "2024-07-23T13:22:24.502-0400",
  "versions": [
    "2.0"
  ],
  "fixVersions": [],
  "components": [
    "Renderer"
  ],
  "environment": "Safari (iOS 10.1.1)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2024-07-23T13:22:24.502-0400",
      "body": "This manual test has been removed.\n"
    }
  ]
}
---
Steps to reproduce:

1\. Open the [Multiple Versions of Infusion manual test](http://build.fluidproject.org/infusion/tests/manual-tests/framework/core/multipleVersions/)\
2\. Try to drag items from either Infusion instance.

Notice that they items aren't draggable. This is likely because the touch events are not being translated properly. It's probably that the jQuery Touch Punch plugin is missing from this manual test.

        