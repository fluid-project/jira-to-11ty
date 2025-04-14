---json
{
  "title": "DECA-224",
  "summary": "Replace old pdf code with pdfExport",
  "tags": "DECA",
  "project": {
    "key": "DECA",
    "title": "Decapod"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2012-01-18T13:51:29.064-0500",
  "updated": "2012-05-18T14:19:14.346-0400",
  "versions": [],
  "fixVersions": [
    "0.5"
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
      "date": "2012-01-18T14:13:25.799-0500",
      "body": "I've made these changes and pushed it up to my bitbucket repo.\n\n<https://bitbucket.org/jobara/decapod-server-rest>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2012-05-18T14:19:11.363-0400",
      "body": "Merged into the project repo\n"
    }
  ]
}
---
Decapod 0.5a created a new pdf generation script based off of the old pdf.py file. The old pdf.py file should be removed and the pdfExport.py should be renamed to pdf.py

        