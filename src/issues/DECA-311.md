---json
{
  "title": "DECA-311",
  "summary": "Camera server should archive captures and calibration data into a ZIP file",
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
  "date": "2012-09-07T14:13:14.076-0400",
  "updated": "2012-10-04T14:49:26.718-0400",
  "versions": [],
  "fixVersions": [
    "0.7"
  ],
  "components": [
    "Server"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2012-10-04T14:49:26.717-0400",
      "body": "A zip export has been implemented. The work was done as part of <https://fluidproject.atlassian.net/browse/DECA-308#icft=DECA-308>, <https://fluidproject.atlassian.net/browse/DECA-309#icft=DECA-309>, and <https://fluidproject.atlassian.net/browse/DECA-310#icft=DECA-310>\n"
    }
  ]
}
---
Decapod should take all the captures taken by the user and zip them into an archive to deliver to the end user.

Investigate whether the file extension of the file matters or not. i.e. see if it's possible to rename the extension safely to something like: Stereo-Captures.deca.

        