---json
{
  "title": "ENGAGE-143",
  "summary": "Title displays beside the image, not below",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Sub-issue",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Laurel Williams",
  "date": "2009-10-21T12:41:15.000-0400",
  "updated": "2010-02-12T14:24:02.000-0500",
  "versions": [
    "0.1"
  ],
  "fixVersions": [
    "0.3b"
  ],
  "components": [
    "Artifact View"
  ],
  "environment": "IPhone\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Tona Monjo",
      "date": "2009-10-21T16:13:35.000-0400",
      "body": "Same bug found.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-02-05T15:50:21.000-0500",
      "body": "Bug Parade Engage 0.3&#x20;\n"
    },
    {
      "author": "y z",
      "date": "2010-02-11T15:37:49.000-0500",
      "body": "This bug is fixed with commit r9364 by Colin.\n"
    },
    {
      "author": "y z",
      "date": "2010-02-11T15:38:03.000-0500",
      "body": "This bug is fixed with commit r9364 by Colin.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-02-12T14:24:02.000-0500",
      "body": "I reviewed and committed Yura's patch with a completely reworked Artifact View. It fixes this issue.\n"
    }
  ]
}
---
In the view testing tasks the artifact title is described as follows:\
If title exists, full title should appear below the image. This title should not be truncated.

The title appears beside the image.

<http://build.fluidproject.org:8095/engage/artifacts/view.html?mmi&1984.077.0021>

        