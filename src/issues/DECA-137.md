---json
{
  "title": "DECA-137",
  "summary": "Better results may occur if we deskew images before exporting a PDF",
  "tags": "DECA",
  "project": {
    "key": "DECA",
    "title": "Decapod"
  },
  "type": "New Feature",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "reporter": "Colin Clark",
  "date": "2010-07-14T00:37:05.203-0400",
  "updated": "2012-01-10T09:50:34.824-0500",
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
      "author": "Jonathan Hung",
      "date": "2010-07-15T16:55:56.291-0400",
      "body": "I can no longer reproduce this problem.\n"
    }
  ]
}
---
It appears that the PDF generation scripts don't cope well with images that have been skewed more than a degree or so. We may want to deskew all images before exporting them to PDF. James and Justin have done some research on how this might be done:

<http://wiki.fluidproject.org/display/fluid/Image+Rotation+Research+and+Testing>

        