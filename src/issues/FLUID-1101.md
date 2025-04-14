---json
{
  "title": "FLUID-1101",
  "summary": "Layout Customizer requires modules have IDs",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Jacob Farber",
  "date": "2008-08-05T16:45:37.000-0400",
  "updated": "2014-03-04T09:06:09.248-0500",
  "versions": [
    "0.4"
  ],
  "fixVersions": [],
  "components": [
    "Layout Reorderer"
  ],
  "environment": "All\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2008-08-05T16:48:13.000-0400",
      "body": "The offending code is in Reorderer.js, in the findPortletsInColumn() function. It explicitly uses portlet.id to identify the portlet.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2008-09-07T22:17:50.000-0400",
      "body": "No use of ids is now made, except during initialisation with an old-style \"id layout\" structure, fixed with \"Geometric Manager\" @ rev 5476\n"
    }
  ]
}
---
The Layout Custmizer breaks when using only class names as module selectors.

        