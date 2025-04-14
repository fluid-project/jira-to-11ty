---json
{
  "title": "FLUID-2410",
  "summary": "OSDPL: Editing old patterns, blank Publish Option and Review Status causes an unspecified error on Submit",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "Jonathan Hung",
  "reporter": "Jonathan Hung",
  "date": "2009-03-25T13:27:42.000-0400",
  "updated": "2014-04-02T16:35:54.238-0400",
  "versions": [
    "0.8"
  ],
  "fixVersions": [],
  "components": [
    "OSDPL"
  ],
  "environment": "OSDPL\n",
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
After editing an existing design pattern that was created prior to the inclusion of "Has this pattern been reviewed?" and "Publish options" fields, submitting the pattern without these options selected causes an unspecified (blank) error. Upon submit, the user would be bounced back to Tab1.

        