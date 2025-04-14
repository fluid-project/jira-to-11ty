---json
{
  "title": "VULAB-191",
  "summary": "Curvey Corners + admin.js",
  "tags": "VULAB",
  "project": {
    "key": "VULAB",
    "title": "VULab"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Blake E",
  "reporter": "Blake E",
  "date": "2009-03-26T15:00:21.000-0400",
  "updated": "2014-03-03T14:43:41.819-0500",
  "versions": [
    "0.5"
  ],
  "fixVersions": [
    "0.5"
  ],
  "components": [
    "RASCAL",
    "Web"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/VULAB/VULAB-191/VULAB-191.patch",
      "filename": "VULAB-191.patch"
    }
  ],
  "comments": [
    {
      "author": "Blake E",
      "date": "2009-03-26T15:03:02.000-0400",
      "body": "🙂 this adds curvy corners to the design, and some general clean up.\n"
    },
    {
      "author": "Blake E",
      "date": "2009-03-26T15:35:41.000-0400",
      "body": "* Revised to take out legacy ajax js that is not going to be implemented anytime soon.\n* Commented out logging (just to be safe)\n* Put curvy corners js into the jquery document.ready\n\n(thanks jacob 🙂)\n"
    }
  ]
}
---
JohnC has added curvy corners and we ironed out some bugs that arose with the vulab.admin.js file. This patch reflects those changes.

        