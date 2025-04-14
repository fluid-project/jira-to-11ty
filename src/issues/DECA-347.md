---json
{
  "title": "DECA-347",
  "summary": "Stereo cameras should be identified to ensure proper image order",
  "tags": "DECA",
  "project": {
    "key": "DECA",
    "title": "Decapod"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Open",
  "reporter": "Jonathan Hung",
  "date": "2012-12-03T11:06:03.163-0500",
  "updated": "2012-12-03T11:06:03.163-0500",
  "versions": [
    "0.7"
  ],
  "fixVersions": [
    "Future"
  ],
  "components": [
    "Capture"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
Dewarp and calibration require the left image first then the right. However, depending on how the cameras are connected to the system, the right camera may trigger first creating an improper order.

The solution is to be able to identify each left and right camera uniquely so that the images can be named in the proper order.

Also solves the problem where a camera gets disconnected and reconnected would reverse the established order of images.

        