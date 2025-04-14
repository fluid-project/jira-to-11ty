---json
{
  "title": "DECA-206",
  "summary": "Exported files should be named according to its metadata by default",
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
  "date": "2012-01-11T14:40:19.774-0500",
  "updated": "2012-08-30T16:38:36.040-0400",
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
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2012-08-30T16:38:36.038-0400",
      "body": "Example: if a Type 4 PDF is created with A5 dimensions, the export PDF will be descriptive. i.e. Sometitle (FontMatched, A5).pdf\n"
    }
  ]
}
---
When exporting to a file, the filename by default should be named according to its metadata. Also it may be useful to have the export options appear in the filename as well do it can be identified.

        