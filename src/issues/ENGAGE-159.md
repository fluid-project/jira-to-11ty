---json
{
  "title": "ENGAGE-159",
  "summary": "Description does not expand to its fullest",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Laurel Williams",
  "date": "2009-10-21T14:23:51.000-0400",
  "updated": "2010-02-12T15:05:17.000-0500",
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
      "date": "2009-10-21T16:12:47.000-0400",
      "body": "Found the same bug; it seems to happen for portrait images. For landscape images, description expands to its fullest.&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-11-10T14:13:10.000-0500",
      "body": "This may be solved when we update to the new wireframes that have all the info below the image\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-02-05T14:24:36.000-0500",
      "body": "Bug Parade Engage 0.3\n"
    },
    {
      "author": "y z",
      "date": "2010-02-11T15:49:23.000-0500",
      "body": "This bug is fixed with commit r9364 by Colin.\n"
    },
    {
      "author": "y z",
      "date": "2010-02-11T15:49:40.000-0500",
      "body": "This bug is fixed with commit r9364 by Colin.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-02-12T15:05:17.000-0500",
      "body": "I reviewed and committed Yura's fix for this issue. +1 for Engage 0.3b\n"
    }
  ]
}
---
In the view testing it states: Description should expand to its fullest when you press expand.&#x20;

Description expands to display fully, but it limited to a width of about half the screen. Filling the width of the screen would be preferable.

<http://build.fluidproject.org:8095/engage/artifacts/view.html?mmi&1984.077.0021>

        