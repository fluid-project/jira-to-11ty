---json
{
  "title": "DECA-122",
  "summary": "Decapod Server profiles USB ports only once. Turning on/off or reconnecting cameras mid session breaks capture script",
  "tags": "DECA",
  "project": {
    "key": "DECA",
    "title": "Decapod"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Jonathan Hung",
  "date": "2010-06-17T13:09:08.231-0400",
  "updated": "2012-05-25T15:45:08.390-0400",
  "versions": [
    "0.3"
  ],
  "fixVersions": [],
  "components": [
    "Capture"
  ],
  "environment": "Ubuntu 9.10, FF3.6\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2012-05-25T15:45:08.389-0400",
      "body": "The capture workflow was removed from the Decapod 0.5 release\n"
    }
  ]
}
---
Currently, the Decapod server only records the camera's USB port address once.

If the cameras are powered-off and on again, or if the camera is disconnected and reconnected, they will get new USB port addresses.

This will break the Capture server since it is using an old USB port address that is no longer valid for that camera.

Example:

Canon G10 USB port at server start: 001,015\
Canon G10 USB port after power off/on: 00,017

        