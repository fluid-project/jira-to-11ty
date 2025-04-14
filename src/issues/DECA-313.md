---json
{
  "title": "DECA-313",
  "summary": "Design a UI to handle camera capture",
  "tags": "DECA",
  "project": {
    "key": "DECA",
    "title": "Decapod"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Jonathan Hung",
  "date": "2012-09-07T14:20:51.823-0400",
  "updated": "2012-10-31T10:55:23.148-0400",
  "versions": [],
  "fixVersions": [
    "0.7"
  ],
  "components": [
    "Capture"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/DECA-314/",
      "key": "DECA-314"
    }
  ],
  "attachments": [],
  "comments": []
}
---
Design a UI to handle camera capture. It should accomodate the following:

* single camera capture
* dual camera capture (simultaneous)
* error handling
  * can't detect supported cameras
  * mismatched supported cameras
  * etc.
* Image Storage
  * naming scheme (capture001\_1.jpeg)
  * caputure001 can be configurable as long as it's unique to a pair.
  * \_1 is required for stereo capture to indicate image pairs.
  * the image format may vary
* Image + calibration info export
  * zip file (possibly with a custom extension like .deca)\
    Design Capture UI
* a UI that handles the above.

        