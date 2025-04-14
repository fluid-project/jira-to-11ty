---json
{
  "title": "DECA-119",
  "summary": "The user should be able to recalibrate the cameras",
  "tags": "DECA",
  "project": {
    "key": "DECA",
    "title": "Decapod"
  },
  "type": "Task",
  "priority": "Blocker",
  "status": "Open",
  "reporter": "Jonathan Hung",
  "date": "2010-06-10T16:08:02.952-0400",
  "updated": "2012-09-06T16:08:20.756-0400",
  "versions": [
    "0.3",
    "0.4"
  ],
  "fixVersions": [
    "Future"
  ],
  "components": [
    "Calibration",
    "Capture"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/DECA-101/",
      "key": "DECA-101",
      "summary": "Implement camera calibration for independent left-right cameras"
    },
    {
      "type": "Dependence",
      "url": "/browse/DECA-117/",
      "key": "DECA-117",
      "summary": "Make the Decapod Toolbar Dynamically Generated"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2010-06-21T16:16:31.319-0400",
      "body": "Recalibration will be enabled by placing a \"Recalibrate\" button in the toolbar on the Capture page.\n"
    }
  ]
}
---
At any given point, a user should be able to recalibrate and reconfigure the attached cameras.

        