---json
{
  "title": "FLUID-463",
  "summary": "Drop target only appears in one location.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "Anastasia Cheetham",
  "reporter": "Justin Obara",
  "date": "2008-04-07T15:41:24.000-0400",
  "updated": "2008-04-28T14:10:36.000-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Reorderer"
  ],
  "environment": "FF2 (Mac OS 10.5, Win XP)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-463/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-04-07T15:44:44.000-0400",
      "body": "screenshot-1 shows the drop target below the first tab, and the other tabs on a lower line.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2008-04-28T14:10:36.000-0400",
      "body": "The issue was styling related and this sample has been retired.&#x20;\n"
    }
  ]
}
---
While attempting to drag a tab, the drop target appears below the first tab. This also causes the tabs which are supposed to be on the right of where the drop target should be, to move to a line below the other tabs.

may be related to: FLUID-452 (<http://issues.fluidproject.org/browse/FLUID-452>)\
: <https://fluidproject.atlassian.net/browse/FLUID-407#icft=FLUID-407> (<http://issues.fluidproject.org/browse/FLUID-407>)

        