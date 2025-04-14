---json
{
  "title": "DECA-325",
  "summary": "Re-construct decapod server to accommodate multiple servers",
  "tags": "DECA",
  "project": {
    "key": "DECA",
    "title": "Decapod"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Cindy Li",
  "date": "2012-09-11T13:04:32.999-0400",
  "updated": "2012-10-04T14:44:07.037-0400",
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
      "date": "2012-10-04T14:44:07.021-0400",
      "body": "Refactored the decapod-server to split off common code that would be shared between the export and capture servers into a separate utils directory.&#x20;\n"
    }
  ]
}
---
The current server structure only supports export server. The re-construction is needed to accommodate more module servers such as capture/calibration, dewarping etc.

        