---json
{
  "title": "FLUID-4136",
  "summary": "namespace global constants used for reorderer unit tests",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2011-03-10T12:43:16.162-0500",
  "updated": "2015-06-09T13:04:56.089-0400",
  "versions": [
    "1.4"
  ],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Reorderer"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2015-06-09T13:04:56.087-0400",
      "body": "Appears to have been addressed by changes to <https://fluidproject.atlassian.net/browse/FLUID-5284#icft=FLUID-5284>\n"
    }
  ]
}
---
The ImageReordererTestConstants.js and UnorderedListConstants.js files are full of global variables. These should be properly namespaced.

        