---json
{
  "title": "VULAB-102",
  "summary": "Position iFrame in Testing Page",
  "tags": "VULAB",
  "project": {
    "key": "VULAB",
    "title": "VULab"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Blake E",
  "reporter": "Blake E",
  "date": "2008-12-01T12:07:08.000-0500",
  "updated": "2014-03-04T08:27:17.664-0500",
  "versions": [
    "0.5B"
  ],
  "fixVersions": [
    "0.5B"
  ],
  "components": [
    "Web"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Blake E",
      "date": "2008-12-01T12:07:14.000-0500",
      "body": "vulab9\n"
    },
    {
      "author": "Blake E",
      "date": "2008-12-08T14:32:58.000-0500",
      "body": "I redid the iFrame system so it repositioned it as well. It goes 80% of the screen width, 15px below the bar, and 500px long (this height is static and we should consider making it dynamic)\n\nI solve this issue with this one: <https://fluidproject.atlassian.net/browse/VULAB-101#icft=VULAB-101>\n"
    }
  ]
}
---
When you are doing the test the iFrame moves around alot in the window. It should be placed as high as possible and in the center and expand to fill the persons screen 🙂

Possibly even the width??

I'll tryout some possibilities and give screenshots for discussion.

        