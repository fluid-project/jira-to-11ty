---json
{
  "title": "FLUID-328",
  "summary": "Cleanup API for Lightbox and move the order callback creation code into the public namespace",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Michelle D'Souza",
  "reporter": "Colin Clark",
  "date": "2008-03-12T16:02:13.000-0400",
  "updated": "2008-08-09T14:27:26.000-0400",
  "versions": [
    "0.1"
  ],
  "fixVersions": [
    "0.3"
  ],
  "components": [
    "Image Reorderer"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2008-04-07T13:13:22.000-0400",
      "body": "Moved the default callback into the fluid.Lightbox namespace. Renamed initLightbox() to createLightboxFromIds() to disambiguate. All code was moved into Lightbox.js\n"
    }
  ]
}
---
In order to use the Lightbox within a jQuery plugin, I need to have access to the default order changed callback. Also, the Lightbox API naming could be cleaned up, disambiguating setupLightbox from initLightbox.

        