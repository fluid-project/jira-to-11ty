---json
{
  "title": "FLUID-2872",
  "summary": "clickable part of \"switch to\" buttons is much larger than link implies",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Laurel Williams",
  "date": "2009-06-01T12:50:49.000-0400",
  "updated": "2011-01-04T15:55:13.326-0500",
  "versions": [
    "1.1",
    "1.1.1",
    "1.1.2",
    "1.2"
  ],
  "fixVersions": [],
  "components": [
    "Uploader"
  ],
  "environment": "Windows XP, FF3 - probably all\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Mike Lam",
      "date": "2011-01-04T15:55:13.324-0500",
      "body": "The link to switch between single and multi-file uploader is no longer available.   Progressive enhancement has been introduced to the uploader and the appropriate upload strategy will be selected and rendered based on the the user's browser.\n"
    }
  ]
}
---
The clickable portion of the :

Switch to the Flash-based multi-file Uploader

and&#x20;

Switch to the standard single-file Uploader

buttons is much larger than the text implies.

Normally - I would expect the text to be clickable, but the clickable space extends to the left and right quite a long way. I often click on that white space and switch to the other uploader by accident.

        