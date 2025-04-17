---json
{
  "title": "FLUID-4958",
  "summary": "Additional markup for Show/Hide and Reset icon fonts can not be easily added to the slider tabs",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Jonathan Hung",
  "date": "2013-04-01T09:16:14.129-0400",
  "updated": "2013-04-29T09:13:08.592-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2013-04-01T09:16:42.049-0400",
      "body": "Justin Obara Can you elaborate on this Jira description for me?\n"
    }
  ]
}
---
Currently the slider panel does not allow additional markup on the Show/Hide and Reset button elements. Any attempt at adding a class or new element within these containers will be removed by the javascript.

The javascript should be modified so that Reset and Show/Hide icons elements / styles will not be stripped out before rendering.

        