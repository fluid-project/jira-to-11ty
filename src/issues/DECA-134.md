---json
{
  "title": "DECA-134",
  "summary": "Users should be able to see the results of exporting a PDF",
  "tags": "DECA",
  "project": {
    "key": "DECA",
    "title": "Decapod"
  },
  "type": "New Feature",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Colin Clark",
  "date": "2010-07-13T23:21:35.738-0400",
  "updated": "2012-01-10T09:49:20.569-0500",
  "versions": [
    "0.3"
  ],
  "fixVersions": [
    "0.4"
  ],
  "components": [
    "Export"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2010-07-14T00:01:19.735-0400",
      "body": "I implemented this feature at revision 1536be1d9a by redirecting to the PDF after export successfully completes.\n"
    }
  ]
}
---
At the moment, exported PDFs are simply saved to a directory on the server and the user is given no indication of where their PDF is or how they can look at it. While we've got bigger changes for export coming in the next release, we should put in a stopgap solution for 0.4 where users will be prompted to save their PDF once it has been exported.

        