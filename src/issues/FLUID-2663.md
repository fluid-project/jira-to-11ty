---json
{
  "title": "FLUID-2663",
  "summary": "Allow initial page number for Pager to be specified in constructor",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Antranig Basman",
  "date": "2009-05-12T09:24:33.000-0400",
  "updated": "2009-05-13T10:54:28.000-0400",
  "versions": [
    "1.0"
  ],
  "fixVersions": [
    "1.1"
  ],
  "components": [
    "Pager"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2009-05-12T12:30:11.000-0400",
      "body": "Fixed at revision 7161 - new \"forceUpdate\" option to initModelChange removes awkward flow for forcing initial page to 0.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-05-13T10:54:27.000-0400",
      "body": "the sakai site settings web page now opens on the fourth content page.\n"
    }
  ]
}
---
Currently, even if a special value is supplied to the constructor, the pager will always initialise to show page 0.

        