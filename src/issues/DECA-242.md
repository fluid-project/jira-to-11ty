---json
{
  "title": "DECA-242",
  "summary": "The pdfExpoter's onExportStart event triggers the call to startImport in the exporter, twice",
  "tags": "DECA",
  "project": {
    "key": "DECA",
    "title": "Decapod"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2012-04-16T14:48:39.672-0400",
  "updated": "2012-05-18T14:46:20.191-0400",
  "versions": [],
  "fixVersions": [
    "0.5"
  ],
  "components": [
    "Export"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2012-05-14T13:40:47.151-0400",
      "body": "Resolved with changes to DECE-218. It had been caused by using a demands block to bind the listener to the decapod.eventBinder. There were two instances of the eventBinder; one for pdfExporter and one for exportPoller. The fix was to use distinct names for each instance of the eventBinder and use a demands block to redirect the function call to point at eventBinder (e.g. decapod.pdfExporter.eventBinder -> decapod.eventBinder).&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2012-05-18T14:46:15.826-0400",
      "body": "Merged into the project repo\n"
    }
  ]
}
---
the exporter's startImport function gets triggered twice after the start export button is triggered. This is causing unit tests to fail (Decapod Export: imagePDF trigger onExportStart, Decapod Export: ocrPDF trigger onExportStart, Decapod Export: tracedPDF trigger onExportStart). Also on the live version, it attempts to upload twice, causing a "file is undefined" error to be thrown.

        