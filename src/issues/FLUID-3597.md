---json
{
  "title": "FLUID-3597",
  "summary": "Pager demo has a span inside ul on the same level as li elements. Should be wrapped into li as well.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jonathan Hung",
  "reporter": "y z",
  "date": "2010-04-05T15:24:47.000-0400",
  "updated": "2010-11-10T10:17:32.568-0500",
  "versions": [],
  "fixVersions": [
    "1.3"
  ],
  "components": [
    "Pager"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2010-11-09T16:02:03.110-0500",
      "body": "Fixed as part of markup cleanup in preparation of new Pager demo.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-11-10T10:17:32.565-0500",
      "body": "Fixed with commits to <https://fluidproject.atlassian.net/browse/FLUID-3822#icft=FLUID-3822>\n"
    }
  ]
}
---
Pager demo has a span inside ul on the same level as li elements. Should be wrapped into li as well.

        