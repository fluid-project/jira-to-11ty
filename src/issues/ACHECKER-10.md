---json
{
  "title": "ACHECKER-10",
  "summary": "Changing the use of TFPDF Library (PDF generator) to MPDF ",
  "tags": "ACHECKER",
  "project": {
    "key": "ACHECKER",
    "title": "AChecker"
  },
  "type": "Sub-task",
  "priority": "Minor",
  "status": "In Progress",
  "assignee": "Victor Alagwu",
  "reporter": "Victor Alagwu",
  "date": "2018-05-30T12:31:05.050-0400",
  "updated": "2018-08-07T17:10:08.875-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
The older version of tFPDF seem to be making use of deprecated PHP4 style constructors, an upgrade would have been the best option, but the last version of the project was abandoned by the project maintainer, although a new unofficial version still exists, I would recommend the use of another library that happens to have a large community. The library chosen is the MPDF library.

        