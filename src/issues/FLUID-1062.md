---json
{
  "title": "FLUID-1062",
  "summary": "Reorderer-Vertical List and IE6: drops sometimes fail",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Eli Cochran",
  "date": "2008-07-29T13:21:36.000-0400",
  "updated": "2008-09-30T11:21:25.000-0400",
  "versions": [
    "0.1",
    "0.3",
    "0.4beta1",
    "0.4"
  ],
  "fixVersions": [
    "0.5"
  ],
  "components": [
    "Reorderer"
  ],
  "environment": "IE6s2\n",
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-1148/",
      "key": "FLUID-1148",
      "summary": "Implement new \"Drop Manager\" for the Reorderer"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2008-08-14T21:26:07.000-0400",
      "body": "The \"overt\" form of this error (visible drop marker but no drop occurs) has probably already been fixed, but until <https://fluidproject.atlassian.net/browse/FLUID-1148#icft=FLUID-1148> is resolved, there will still be numerous areas in the DOM (many of them inappropriate) where no drop will appear to be possible.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2008-09-07T18:10:02.000-0400",
      "body": "Drop Manager, Dom Permutation work merged back into trunk at revision 5476\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-09-30T11:21:25.000-0400",
      "body": "Verified fix using:\n\nIE6 (Win XP)\n"
    }
  ]
}
---
When dragging and dropping elements in IE6, sometimes the drop is lost and the item snaps back to the starting position.

        