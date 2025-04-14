---json
{
  "title": "FLUID-3934",
  "summary": "Opacity on dragging items not working in IE7",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "heidi valles",
  "date": "2010-12-17T11:03:58.022-0500",
  "updated": "2014-06-25T15:58:45.487-0400",
  "versions": [
    "1.3"
  ],
  "fixVersions": [],
  "components": [
    "Layout Reorderer"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2014-06-25T15:58:45.485-0400",
      "body": "We no longer actively support IE6, IE7 and IE8. We will consider patches for certain issues.\n"
    }
  ]
}
---
The opacity on dragging items doesn't work in IE7 - the filter: alpha style is there, but the width or height must also be set.

        