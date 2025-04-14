---json
{
  "title": "DECA-238",
  "summary": "Poor OCR results from \"reasonably well captured\" images",
  "tags": "DECA",
  "project": {
    "key": "DECA",
    "title": "Decapod"
  },
  "type": "Improvement",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Duplicate",
  "reporter": "Jonathan Hung",
  "date": "2012-02-10T14:23:16.742-0500",
  "updated": "2012-05-25T15:55:25.498-0400",
  "versions": [
    "0.5"
  ],
  "fixVersions": [],
  "components": [
    "genpdf"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/DECA-188/",
      "key": "DECA-188",
      "summary": "Type 2 output quality is poor for well photographed and scanned documents"
    }
  ],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/DECA/DECA-238/Decapod-1-1-1.pdf",
      "filename": "Decapod-1-1-1.pdf"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/DECA/DECA-238/Decapod-2-1-1.pdf",
      "filename": "Decapod-2-1-1.pdf"
    }
  ],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2012-02-10T14:35:24.594-0500",
      "body": "TYPE2 PDF from ORIGINAL DIGITAL DOCUMENT:\\\nDecapod-1-1-1.pdf generated using <http://source.fluidproject.org/svn/design/decapod/testing-images/1-1-1.png> (< 1MB)\n\nTYPE2 PDF from PHOTO of SAME (but printed) DOCUMENT\\\nDecapod-2-1-1.pdf generated using <http://source.fluidproject.org/svn/design/decapod/testing-images/2-1-1.png> (\\~17MB)\n"
    }
  ]
}
---
Using reasonably well camera captured images of text, a PDFs produced using Type 2 has poor OCR results. In comparison, the original digital copy of the same image produces much better results.

        