---json
{
  "title": "DECA-252",
  "summary": "Accordion content container resizes vertically when Export button is selected",
  "tags": "DECA",
  "project": {
    "key": "DECA",
    "title": "Decapod"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Jonathan Hung",
  "date": "2012-05-14T15:43:46.732-0400",
  "updated": "2012-05-23T12:21:38.504-0400",
  "versions": [
    "0.5"
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
      "author": "Justin Obara",
      "date": "2012-05-14T15:47:09.562-0400",
      "body": "We could try switching from the clearStyle option to autoHeight\\\n<http://jqueryui.com/demos/accordion/#option-autoHeight>\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2012-05-16T10:34:34.989-0400",
      "body": "I have put in a fixed height for the ds-pdfExporter-exportDetails class. This makes all those accordion drawers the same height, but the problem is that it affects all accordion drawers at the moment.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2012-05-23T12:21:34.089-0400",
      "body": "merged into the project repo\n"
    }
  ]
}
---
When accordion contents are expanded, selecting the "Export" button causes the container to resize (i.e. shrink) because the resulting spinner isn't the same size.

There should be no resizing of accordion containers before, during, and after export.

        