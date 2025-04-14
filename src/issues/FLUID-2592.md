---json
{
  "title": "FLUID-2592",
  "summary": "sort graphics missing from the pager",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jacob Farber",
  "reporter": "Justin Obara",
  "date": "2009-04-13T14:16:21.000-0400",
  "updated": "2011-02-28T16:45:18.441-0500",
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
      "author": "Justin Obara",
      "date": "2009-04-13T14:20:11.000-0400",
      "body": "update the paths to the images.&#x20;\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-02-28T16:45:18.440-0500",
      "body": "Closing issues that were fixed in 1.1\n"
    }
  ]
}
---
The sort graphics to indicate ascending/descending sort are missing

Steps to reproduce:

1\) Open the sakai site setting example from the daily build site

2\) Click on one of the column headers to change the sort  method

Notice that there is no graphic to indicate the type of sorting.

Probably a bad path name or missing file

        