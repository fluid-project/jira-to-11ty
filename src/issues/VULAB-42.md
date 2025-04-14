---json
{
  "title": "VULAB-42",
  "summary": "Standardize on data transmission from client to server",
  "tags": "VULAB",
  "project": {
    "key": "VULAB",
    "title": "VULab"
  },
  "type": "New Feature",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "David Makalsky",
  "reporter": "David Makalsky",
  "date": "2008-10-03T13:32:49.000-0400",
  "updated": "2014-03-04T09:04:33.585-0500",
  "versions": [
    "0.5B"
  ],
  "fixVersions": [
    "0.5B"
  ],
  "components": [
    "RASCAL"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "David Makalsky",
      "date": "2008-10-03T13:33:04.000-0400",
      "body": "pushed to VULAB4\n"
    },
    {
      "author": "David Makalsky",
      "date": "2008-10-27T13:26:03.000-0400",
      "body": "decided on ftp as a prototype transport, will refactor to http subsequently\n"
    }
  ]
}
---
Decide on data transmission low-level protocol:

* FTP
* Message Queue
* JDBC
* SFTP / SCP
* HTTP

        