---json
{
  "title": "DECA-59",
  "summary": "The Decapod UI contains links to functionality that does not exist",
  "tags": "DECA",
  "project": {
    "key": "DECA",
    "title": "Decapod"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jonathan Hung",
  "reporter": "Jonathan Hung",
  "date": "2010-03-30T13:21:27.000-0400",
  "updated": "2012-01-10T09:38:37.755-0500",
  "versions": [],
  "fixVersions": [
    "0.3"
  ],
  "components": [
    "Export"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2010-03-30T13:36:22.000-0400",
      "body": "Removed references to functionality that didn't exist. Should be added back in when ready.\n\n* import from disc\n* import from memory card\n* help\n"
    }
  ]
}
---
The Decapod UI contains "Help" and "Import from Disk" links in the header area which references functionality that does not exist.

This should be removed prior to 0.3 release to avoid any confusion about functionality and uncertainty about a successful installation.

        