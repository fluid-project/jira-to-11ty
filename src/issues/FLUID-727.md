---json
{
  "title": "FLUID-727",
  "summary": "Remove redundant Image Attribution fields in DP submission form",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-task",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Allison Bloodworth",
  "reporter": "Jonathan Hung",
  "date": "2008-06-09T15:15:53.000-0400",
  "updated": "2013-04-11T17:33:04.316-0400",
  "versions": [
    "0.3"
  ],
  "fixVersions": [],
  "components": [
    "OSDPL"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Allison Bloodworth",
      "date": "2008-06-09T18:32:14.000-0400",
      "body": "The three Solution Image Attribution fields are due to the fact that that field is marked as allowing \"multiple\" entries. Solution Image is also marked as allowing multiple entries, but because you can upload one image at a time, you only see one at a time. To make things cleaner (temporarily), I made both Solution Image Attribution and Solution Image allow only a single entry. We will fix this more permanently when we can group related fields in the Bug 589:  Modify pattern data entry form to allow entry of multiple examples (<http://issues.fluidproject.org/browse/FLUID-589>).\n"
    }
  ]
}
---
ITERATION11\
There are duplicate "Image Attribution" fields in the design pattern submission form. These should be removed.

        