---json
{
  "title": "DECA-316",
  "summary": "Dewarp server should consume an archive of stereo pairs and calibration data",
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
  "date": "2012-09-07T14:32:44.383-0400",
  "updated": "2012-10-11T15:58:11.686-0400",
  "versions": [],
  "fixVersions": [
    "0.7"
  ],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2012-10-11T15:58:11.679-0400",
      "body": "Added the dewarp server and pushed changes up to the googlecode repo\n"
    }
  ]
}
---
The dewarp server should take an uploaded archive of stereo pairs and its calibration data, and output a single archive of dewarped left and right images.

* consume capture archive
* single file upload (only 1 capture archive)
* export zip containing all the dewarped images
* image naming scheme (capture001\_left.jpeg, capture001\_right.jpeg)
  * capture001 can be configurable as long as it's unique to a pair
  * \_left, \_right are required to distinguish the left and right pages of a spread
  * the image format may vary

        