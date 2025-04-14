---json
{
  "title": "FLUID-31",
  "summary": "Abstract out any toolkit-specific dependencies from the re-ordering logic.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "Colin Clark",
  "reporter": "Joseph Scheuhammer",
  "date": "2007-07-17T12:14:47.000-0400",
  "updated": "2014-03-04T09:08:05.510-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Reorderer"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2008-01-07T17:06:14.000-0500",
      "body": "We've excluded the idea of support for multiple toolkits, so we won't do this.\n"
    }
  ]
}
---
Currently the Lightbox depends directly on the dojo APIs. It would be much easier to port or adapt the Re-orderer if it doesn't directly depend on dojo, but rather has a set of "providers" for commonly-used toolkit functionality such as DOM manipulation, event handling, drag and drop, etc.

        