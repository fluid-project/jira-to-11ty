---json
{
  "title": "DECA-139",
  "summary": "Work with IUPR team to determine the status of OCR-based PDF generation",
  "tags": "DECA",
  "project": {
    "key": "DECA",
    "title": "Decapod"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jonathan Hung",
  "reporter": "Colin Clark",
  "date": "2010-07-14T09:54:55.209-0400",
  "updated": "2011-10-06T14:02:04.627-0400",
  "versions": [],
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
      "author": "Jonathan Hung",
      "date": "2010-07-15T12:02:03.539-0400",
      "body": "I get the following error when trying to do -t 2 option for genpdf.\n\n\"\\[warn] file could not be opened:  ./temp//0004/010001.cseg.txt\\\n\\[Error] PDF generation did not work as expected! (\\['ocro2pdf.py', '-d', './temp/', '-p', './DecapodExport-ocr.pdf', '-t', '2', '-v', '1'\"\n\ngenpdf version: 34:e46d1748a910\n\nUsing these images: <http://wiki.fluidproject.org/download/attachments/15401211/decapod-dday-binary.zip>\\\nComplete console output: <http://wiki.fluidproject.org/download/attachments/15401211/DecapodExport-ocr-console.txt?version=1&modificationDate=1279044116000>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-10-06T14:02:04.593-0400",
      "body": "I believe Decapod 0.4 shipped with only image PDF output.\n"
    }
  ]
}
---
At the moment, we think we're getting errors when using genpdf to export OCR-based PDFs.

We should do some additional testing and move the conversation to the mailing list to determine if we should support OCR output for Decapod 0.4

        