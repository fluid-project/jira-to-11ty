---json
{
  "title": "DECA-73",
  "summary": "Split page spreads into left and right pages",
  "tags": "DECA",
  "project": {
    "key": "DECA",
    "title": "Decapod"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Jonathan Hung",
  "date": "2010-03-23T13:33:30.000-0400",
  "updated": "2012-06-08T14:39:41.469-0400",
  "versions": [
    "0.3"
  ],
  "fixVersions": [],
  "components": [
    "Capture",
    "Export"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2012-06-08T14:39:41.449-0400",
      "body": "Capture removed from Decapod 0.5 release\n"
    }
  ]
}
---
Taking a page spread, split the image into two halves for left and right pages.

This process is required for exporting of a stereo pair and for a stitched independent left-right pair of pages.

This process may be replaced by the content area detection part of the QA cycle.

* may not need if removing stitching.
* will definitely need for stereo (possibly 0.6 release

        