---json
{
  "title": "VULAB-177",
  "summary": "Security Issue with uploader.php",
  "tags": "VULAB",
  "project": {
    "key": "VULAB",
    "title": "VULab"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "David Makalsky",
  "reporter": "David Makalsky",
  "date": "2009-02-19T15:26:25.000-0500",
  "updated": "2009-02-19T22:39:04.000-0500",
  "versions": [
    "0.5B",
    "0.5"
  ],
  "fixVersions": [
    "0.5B",
    "0.5"
  ],
  "components": [
    "RASCAL"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/VULAB/VULAB-177/vulab177-patch.txt",
      "filename": "vulab177-patch.txt"
    }
  ],
  "comments": [
    {
      "author": "David Makalsky",
      "date": "2009-02-19T22:39:04.000-0500",
      "body": "code fixed and committed.\n"
    }
  ]
}
---
Missing file extension check and adding more unix level security restrictions to uploaded file.

        