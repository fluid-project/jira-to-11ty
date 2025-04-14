---json
{
  "title": "FLUID-459",
  "summary": "Ctrl-arrow keys do not move portlets on uPortal test page",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Duplicate",
  "reporter": "Herb Wideman",
  "date": "2008-04-04T17:31:30.000-0400",
  "updated": "2008-04-08T16:37:03.000-0400",
  "versions": [
    "0.3"
  ],
  "fixVersions": [
    "0.3"
  ],
  "components": [
    "Reorderer"
  ],
  "environment": "Win XP, IE7\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2008-04-07T10:39:05.000-0400",
      "body": "Herb, did you encounter this problem with all of the portlets?\n\nThe Google Portlet in the top left is actually locked, and cannot be moved. If this is the only portlet you had the problem with, then I think it's a styling issue - the little padlock icon at the left of the title bar might be insufficient to inform the user that the portlet can't be moved.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2008-04-08T16:37:03.000-0400",
      "body": "This turns out to be an instance of <https://fluidproject.atlassian.net/browse/FLUID-401#icft=FLUID-401>.\n"
    }
  ]
}
---
After a portlet has been selected on the uPortal test page via tabbing (as indicated by a dotted box apppearing around the portlet's name) it cannot be moved using crlt-arrow key combinations.

        