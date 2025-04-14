---json
{
  "title": "DECA-146",
  "summary": "Image capture should take the calibration model into account, rotating images and sequencing them appropriately",
  "tags": "DECA",
  "project": {
    "key": "DECA",
    "title": "Decapod"
  },
  "type": "Sub-issue",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Colin Clark",
  "date": "2010-07-15T19:31:56.314-0400",
  "updated": "2012-01-10T09:40:00.770-0500",
  "versions": [
    "0.3"
  ],
  "fixVersions": [
    "0.4"
  ],
  "components": [
    "Calibration",
    "Capture"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-07-16T08:53:19.106-0400",
      "body": "Bug Parade Decapod 0.4&#x20;\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-07-20T13:05:15.540-0400",
      "body": "This issue was resolved at revision a8f0190073\n"
    }
  ]
}
---
At the moment, Decapod indeterminately captures from each camera and performs no rotation on the resulting images. The /images PUT service should be updated to read the calibration model in order to determine the left and right image, as well as performing the specified image rotation on the captured image.

        