---json
{
  "title": "DECA-62",
  "summary": "Add export functionality to Decapod",
  "tags": "DECA",
  "project": {
    "key": "DECA",
    "title": "Decapod"
  },
  "type": "New Feature",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Boyan Sheytanov",
  "reporter": "Boyan Sheytanov",
  "date": "2010-02-26T11:03:40.000-0500",
  "updated": "2012-01-10T09:43:16.703-0500",
  "versions": [
    "0.3"
  ],
  "fixVersions": [],
  "components": [
    "Export"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2010-04-20T10:17:07.000-0400",
      "body": "Captured by other issues.\n"
    }
  ]
}
---
Decapod should support book exporting as described in <http://wiki.fluidproject.org/display/fluid/Decapod+0.3+Design>

* user can select one of three formats: Image PDF with OCR text, Token compressed PDF (demonstrator, slow and poor quality), Multipage TIFF
* Display a progress bar during export process.
* With progress bar, display elapsed time, and the number of pages processed or percentage information.
* Display a status message after successful capture and export.
* Interaction: Dialog > Make Selection > Generate Output > Display Browser's Save dialog

        