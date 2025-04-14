---json
{
  "title": "FLUID-2611",
  "summary": "comments for fluid.event.getEventFirer still reference the old functionality",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2009-04-21T12:07:06.000-0400",
  "updated": "2011-02-28T16:45:19.428-0500",
  "versions": [
    "1.0"
  ],
  "fixVersions": [
    "1.1"
  ],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-04-21T12:26:10.000-0400",
      "body": "Updated the comment to match the implementation. Basically just changed the word \"true\" to \"false\"\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-02-28T16:45:19.426-0500",
      "body": "Closing issues that were fixed in 1.1\n"
    }
  ]
}
---
comments for fluid.event.getEventFirer still reference the old functionality

In the comments it says that preventable checks for true, when it should say preventable checks for false

        