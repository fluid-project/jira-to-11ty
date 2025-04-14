---json
{
  "title": "DECA-273",
  "summary": "Adapt the Exporter UI design to handle PDF export status messages",
  "tags": "DECA",
  "project": {
    "key": "DECA",
    "title": "Decapod"
  },
  "type": "Task",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jonathan Hung",
  "reporter": "Jonathan Hung",
  "date": "2012-06-08T15:32:39.409-0400",
  "updated": "2012-09-06T10:30:09.814-0400",
  "versions": [],
  "fixVersions": [
    "0.6"
  ],
  "components": [
    "Export"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/DECA/DECA-273/Decapod 0.6 Export-08.png",
      "filename": "Decapod 0.6 Export-08.png"
    }
  ],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2012-06-26T10:35:03.292-0400",
      "body": "An early design has been created, but lacks the exact details of the stages for Types 1 to 3.\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2012-06-26T11:00:28.540-0400",
      "body": "Type 1 stages: \"books2pages\", \"ocro2pdf.py\", \"**END**\"\n\nType 2 stages: \"books2pages\", \"pages2lines\", \"lines2fsts\", \"fsts2text\", \"ocro2pdf.py\", \"**END**\"\n\nType 3 stages: \"books2pages\", \"pages2lines\", \"lines2fsts\", \"fsts2text\", \"binned-inter\", \"ocro2pdf.py\", \"**END**\"\n"
    }
  ]
}
---
Genpdf now supports progress reporting. This allows Exporter to report some sort of progress. Adapt the UI to give the user feedback on the progress of generating a PDF.

Status reporting should also include errors.

        