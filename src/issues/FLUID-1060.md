---json
{
  "title": "FLUID-1060",
  "summary": "Reorderer-Vertical List and IE6: styling issue: no margin between draggable items",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Trivial",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jacob Farber",
  "reporter": "Eli Cochran",
  "date": "2008-07-29T13:18:38.000-0400",
  "updated": "2008-08-18T09:38:13.000-0400",
  "versions": [
    "0.1",
    "0.3",
    "0.4beta1",
    "0.4"
  ],
  "fixVersions": [],
  "components": [
    "Reorderer"
  ],
  "environment": "IE6, XPsp2\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Jacob Farber",
      "date": "2008-08-15T14:25:42.000-0400",
      "body": "I made a patch for ticket <https://fluidproject.atlassian.net/browse/FLUID-1061#icft=FLUID-1061> that takes care of this as well\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-08-18T09:38:13.000-0400",
      "body": "Verified fix using:\n\nIE6 (Win XP)\n"
    }
  ]
}
---
The list items on IE6 lack any white space between items

        