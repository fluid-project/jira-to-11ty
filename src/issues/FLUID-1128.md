---json
{
  "title": "FLUID-1128",
  "summary": "Layout Reorderer does not completely obey permissions rules",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Jacob Farber",
  "date": "2008-08-11T14:48:25.000-0400",
  "updated": "2008-10-31T08:45:29.000-0400",
  "versions": [
    "0.4"
  ],
  "fixVersions": [
    "0.8"
  ],
  "components": [
    "Layout Reorderer",
    "Reorderer"
  ],
  "environment": "Win XP: FF3,  Safari 3.1, IE6+, Opera 9.5\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2008-09-07T22:25:38.000-0400",
      "body": "The permissions model has disappeared from the current version of the Reorderer, and is unlikely to reappear for some time (will be re-implemented \"on demand\")\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-10-31T08:45:29.000-0400",
      "body": "We are currently not supporting a complex permission structure in the layout reorderer\n"
    }
  ]
}
---
Setup: 3 columns of 4 portlets.\
Portlet #1 of column #1 permission set to : \[1,1,1,0,0,0,0,0,0,0,0,0]\
the rest set to : \[0,0,0,0,0,0,0,0,0,0,0,0]\
\-----------------------
Problem:\
Portlet #1 can also move to the end of the other 2 columns

        