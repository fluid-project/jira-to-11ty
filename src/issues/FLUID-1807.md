---json
{
  "title": "FLUID-1807",
  "summary": "OSDPL: Site name being cropped in IE7",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jonathan Hung",
  "reporter": "Jonathan Hung",
  "date": "2008-11-13T19:45:52.000-0500",
  "updated": "2008-11-18T12:31:13.000-0500",
  "versions": [
    "0.6beta1"
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
      "author": "Jonathan Hung",
      "date": "2008-11-18T09:10:26.000-0500",
      "body": "iteration22\n\ntrying to fix in time for Summit. It looks pretty bad.\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2008-11-18T12:17:23.000-0500",
      "body": "Fixed by adjusting site header height and padding.\n"
    }
  ]
}
---
For some reason, the logo text in IE7 is being cropped. We need to fix this... looks very ugly.

        