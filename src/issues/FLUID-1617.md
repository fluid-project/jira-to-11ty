---json
{
  "title": "FLUID-1617",
  "summary": "Reorderer grab handle space changes during the experience",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Jacob Farber",
  "date": "2008-09-25T15:21:30.000-0400",
  "updated": "2008-10-30T16:43:33.000-0400",
  "versions": [
    "0.5beta1",
    "0.5"
  ],
  "fixVersions": [
    "0.6beta1"
  ],
  "components": [
    "Reorderer"
  ],
  "environment": "IE6 (Win XP, Win 2000)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-10-30T16:43:33.000-0400",
      "body": "Appears to have been fixed with one of the many updates to the Springboard\n"
    }
  ]
}
---
Before a portlet has ever been dragged around, IE6 requires you to use the content or that portlet as the grab handle. However, once you've dragged a portlet around, now any part of the portlet is "hot". The expected behaviour would be the latter one.

(see layout reorderer springboard and follow your cursor)

        