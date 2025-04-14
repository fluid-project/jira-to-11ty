---json
{
  "title": "FLUID-3995",
  "summary": "Image gallery Uploader demo won't load in IE6",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Anastasia Cheetham",
  "date": "2010-12-21T13:40:41.280-0500",
  "updated": "2011-01-17T11:11:00.056-0500",
  "versions": [
    "1.3"
  ],
  "fixVersions": [
    "1.3.1"
  ],
  "components": [
    "Uploader"
  ],
  "environment": "IE6 in WinXP\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2011-01-17T11:10:46.646-0500",
      "body": "Stray comma removed at r10460.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2011-01-17T11:11:00.054-0500",
      "body": "Fixed for Infusion 1.3.1\n"
    }
  ]
}
---
The Image Gallery demo Uploader app won't load in IE6 because of a wayward comma at the end of line 40 of image-gallery.js

        