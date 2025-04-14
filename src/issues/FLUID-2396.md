---json
{
  "title": "FLUID-2396",
  "summary": "Verify how absolute positioned elements should/can be linearized",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Not A Bug",
  "assignee": "heidi valles",
  "reporter": "Jacob Farber",
  "date": "2009-03-24T09:44:41.000-0400",
  "updated": "2013-09-06T12:23:03.476-0400",
  "versions": [
    "1.4"
  ],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "FSS"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-2258/",
      "key": "FLUID-2258",
      "summary": "The UI Options Dialog is virtually blank in simplified layout : using IE"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Jacob Farber",
      "date": "2009-05-01T14:55:02.000-0400",
      "body": "set up meeting for a solution strategy\n"
    },
    {
      "author": "Justin Obara",
      "date": "2013-09-06T12:23:03.454-0400",
      "body": "Not forcing linearization any more\n"
    }
  ]
}
---
forcing absolute positioned elements to become relative again may have uninteded consequenses - fl-linear-layout-enabled may fix this for edge cases though?

        