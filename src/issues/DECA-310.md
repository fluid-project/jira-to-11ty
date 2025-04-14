---json
{
  "title": "DECA-310",
  "summary": "Camera server should handle dual cameras differently depending on user context",
  "tags": "DECA",
  "project": {
    "key": "DECA",
    "title": "Decapod"
  },
  "type": "New Feature",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Jonathan Hung",
  "date": "2012-09-07T14:07:55.045-0400",
  "updated": "2012-10-04T14:48:53.656-0400",
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
      "date": "2012-10-04T14:48:53.654-0400",
      "body": "This has become more of a documentation issue. Although the server will produce different directories for storing captures of the different types. This will be useful for when calibration is introduced.\n"
    }
  ]
}
---
If in Stereo Capture mode, Decapod should not allow the use of mis-matched cameras.\
If not in Stereo Capture mode, Decapod should allow the use of mis-matched cameras.

        