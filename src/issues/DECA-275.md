---json
{
  "title": "DECA-275",
  "summary": "Implement the UI for the new genpdf features",
  "tags": "DECA",
  "project": {
    "key": "DECA",
    "title": "Decapod"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Jonathan Hung",
  "date": "2012-06-08T15:40:34.270-0400",
  "updated": "2012-09-04T13:17:14.565-0400",
  "versions": [],
  "fixVersions": [
    "0.6"
  ],
  "components": [
    "Export"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/DECA-276/",
      "key": "DECA-276",
      "summary": "Create a design for the new genpdf features"
    },
    {
      "type": "Related to",
      "url": "/browse/DECA-279/",
      "key": "DECA-279",
      "summary": "Adapt the Exporter UI design to accommodate export to TIFF and PNG"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2012-07-09T11:02:39.265-0400",
      "body": "We will need to do the following:\n\n1\\. Add new container for Image types group.\\\n2\\. Update UI code to handle this new Image types group.\\\n3\\. Update UI code to be more granular (current export options are applied globally to the export type, but each type may have its own options).\n"
    }
  ]
}
---
Implement the design for the new genpdf features:

* Dimensions
* DPI
* Colour
* Bit depth

        