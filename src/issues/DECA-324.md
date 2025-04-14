---json
{
  "title": "DECA-324",
  "summary": "Capture should handle the following error cases",
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
  "date": "2012-09-10T15:12:06.192-0400",
  "updated": "2012-10-04T14:47:40.762-0400",
  "versions": [],
  "fixVersions": [
    "0.7"
  ],
  "components": [
    "Capture"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2012-10-04T14:47:40.760-0400",
      "body": "The server handles errors as wells as providing status information for the current camera setup to be used by the client side to report if there is a problem with the camera setup for the give capture type.\n"
    }
  ]
}
---
Capture should handle the following error cases:

* Camera resolution less than 10MP
* All attached cameras is not supported
* If in Stereo: 2 or more pairs of matching supported cameras attached
* If in conventional or structured capture: 2 or more supported cameras attached

        