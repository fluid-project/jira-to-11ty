---json
{
  "title": "FLUID-3010",
  "summary": "Render all modules if no group specified",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2009-07-10T13:08:58.000-0400",
  "updated": "2009-08-25T15:14:45.000-0400",
  "versions": [],
  "fixVersions": [
    "1.2"
  ],
  "components": [
    "Infusion Builder"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-07-13T17:40:50.000-0400",
      "body": "Now if no group information is passed in, all modules will render out under a single unnamed group\n"
    }
  ]
}
---
Render all modules if no group specified.

Currently rendering is based on groups. If no groups are specified it should render all of the modules as though they were part of a single group

        