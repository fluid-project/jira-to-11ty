---json
{
  "title": "FLUID-3688",
  "summary": "Undo not working, likely due to changes in initView",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2010-08-24T15:31:59.558-0400",
  "updated": "2010-08-26T11:08:51.979-0400",
  "versions": [],
  "fixVersions": [
    "1.3"
  ],
  "components": [
    "Undo"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-08-26T11:08:51.978-0400",
      "body": "This appears to have been fixed by Antranig's changes at r9995.\n"
    }
  ]
}
---
The fluid.initView call used by the Undo component is not returning "that". It may be do to the "null" container that is passed in as an argument.

        