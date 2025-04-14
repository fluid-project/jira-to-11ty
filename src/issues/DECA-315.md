---json
{
  "title": "DECA-315",
  "summary": "Design Stereo Dewarp UI",
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
  "date": "2012-09-07T14:25:22.119-0400",
  "updated": "2012-10-31T10:54:47.988-0400",
  "versions": [],
  "fixVersions": [
    "0.7"
  ],
  "components": [],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/DECA-320/",
      "key": "DECA-320"
    }
  ],
  "attachments": [],
  "comments": []
}
---
Design a UI that accommodates stereo dewarping:

* consume capture archive
* single file upload (only 1 capture archive)
* export zip containing all the dewarped images
* image naming scheme (capture001\_left.jpeg, capture001\_right.jpeg)
  * capture001 can be configurable as long as it's unique to a pair
  * \_left, \_right are required to distinguish the left and right pages of a spread
  * the image format may vary
* error handling
  * missing images (i.e. the images aren't paired)
  * invalid calibration data
  * etc.&#x20;

        