---json
{
  "title": "DECA-35",
  "summary": "Selecting continue on the camera detection dialog after connecting the cameras does not take a picture",
  "tags": "DECA",
  "project": {
    "key": "DECA",
    "title": "Decapod"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Michelle D'Souza",
  "date": "2010-03-23T10:26:03.000-0400",
  "updated": "2010-06-16T13:45:52.995-0400",
  "versions": [
    "0.3"
  ],
  "fixVersions": [
    "0.4",
    "0.5"
  ],
  "components": [
    "Capture"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2010-06-10T16:36:28.224-0400",
      "body": "This may not be an issue any more with the new implementation of calibration for Left-Right capture. Confirm fixed and close for 0.4/0.5\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2010-06-16T13:45:52.993-0400",
      "body": "Replaced by new designs.\n"
    }
  ]
}
---
Steps to recreate:

1\. Start up the decapod server without the cameras attached\
2\. Click 'take picture' - the camera detection dialog should appear\
3\. Connect the cameras and select continue

Pictures should be taken but they are not. Clicking take picture a second time will take pictures.&#x20;

        