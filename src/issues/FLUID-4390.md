---json
{
  "title": "FLUID-4390",
  "summary": "UI Options' dependency file doesn't include the new URLUtilities.js file, causing concatenated builds of UIO to break.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Colin Clark",
  "date": "2011-08-07T19:31:33.344-0400",
  "updated": "2013-10-04T09:56:04.258-0400",
  "versions": [
    "1.4"
  ],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2011-08-07T19:32:05.275-0400",
      "body": "Bug Parade Infusion\n"
    },
    {
      "author": "Colin Clark",
      "date": "2011-08-07T19:33:26.872-0400",
      "body": "Here's a fix: <https://github.com/colinbdclark/infusion/tree/FLUID-4390>\n"
    }
  ]
}
---
The dependency declaration JSON file for UIO doesn't include URLUtilities.js, causing UIO to throw errors when using a concatenated build.

        