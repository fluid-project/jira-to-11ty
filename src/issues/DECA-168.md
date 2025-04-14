---json
{
  "title": "DECA-168",
  "summary": "Implement client side filter of imported images",
  "tags": "DECA",
  "project": {
    "key": "DECA",
    "title": "Decapod"
  },
  "type": "Task",
  "priority": "Critical",
  "status": "Open",
  "reporter": "Justin Obara",
  "date": "2011-10-06T14:32:07.241-0400",
  "updated": "2012-12-03T11:07:15.363-0500",
  "versions": [],
  "fixVersions": [
    "Future"
  ],
  "components": [
    "Export"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
Implement client side filtering of imported images. Only files of type tiff, jpg, png should be allowed for import. Currently the mime type filtering doesn't work in FF (although we should check if it has been fixed in the latest version).

        