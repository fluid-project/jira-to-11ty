---json
{
  "title": "FLUID-3390",
  "summary": "Menu component - rendering simple menu - error occurs",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "Laurel Williams",
  "reporter": "Laurel Williams",
  "date": "2009-11-26T11:06:32.000-0500",
  "updated": "2010-03-30T19:22:41.000-0400",
  "versions": [],
  "fixVersions": [
    "1.2"
  ],
  "components": [
    "Website"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Laurel Williams",
      "date": "2009-11-26T11:59:49.000-0500",
      "body": "the error is targetlump is undefined...line 1018 of fluidRenderer.js\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-03-30T19:22:41.000-0400",
      "body": "The Menu component was a learning exercise and isn't intended for release or use. As a result, this issue can be resolved.\n"
    }
  ]
}
---
I entered some basic code into the svn <https://source.fluidproject.org/svn/scratchpad/menu/>\
The code is intended to render a simple ul/li list.

I'm getting an error while rendering.

        