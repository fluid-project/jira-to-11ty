---json
{
  "title": "DECA-136",
  "summary": "The /calibration service should provide a means for taking left and right calibration snapshots from the cameras",
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
  "date": "2010-07-14T00:17:41.893-0400",
  "updated": "2012-01-10T09:39:50.302-0500",
  "versions": [
    "0.3"
  ],
  "fixVersions": [
    "0.4"
  ],
  "components": [
    "Calibration",
    "Server"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2010-07-14T00:19:00.995-0400",
      "body": "This will require the server to keep the calibration model up to date with what it thinks are the left and right cameras. We'll also need a temporary storage place for these images.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-07-14T11:16:03.768-0400",
      "body": "Bug Parade Decapod 0.4\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-07-15T19:29:11.666-0400",
      "body": "This issue was fixed at server revision 07b67045b3, with working services for capturing left and right calibration images. Left and right cameras are identified by serial number, so this may limit our supported cameras.\n"
    }
  ]
}
---
The calibration service needs to expose two additional sub-resources:

/calibration/left\
/calibration/right

Both of which, when POSTed to, will take a snapshot from the camera and return the URL to the image.

        