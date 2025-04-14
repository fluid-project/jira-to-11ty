---json
{
  "title": "FLUID-3262",
  "summary": "Clicking the Render button a second time in the renderer demo, will throw an error: using IE",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "James Yoon",
  "reporter": "Justin Obara",
  "date": "2009-10-08T14:03:28.000-0400",
  "updated": "2014-07-14T09:31:39.978-0400",
  "versions": [
    "1.1.2",
    "1.2",
    "1.3",
    "1.3.1"
  ],
  "fixVersions": [],
  "components": [
    "Demos"
  ],
  "environment": "IE 8 (Win Vista)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2014-07-14T09:31:39.976-0400",
      "body": "IE 8 is no longer a supported browser. The error doesn't appear to be present in IE 11.\n"
    }
  ]
}
---
Clicking the Render button a second time in the renderer demo, will throw an error

Steps to reproduce:

1\) Open the renderer demo page\
<http://build.fluidproject.org/infusion/demos/renderer/demo.html>

2\) Click the "Render" button to render the demo

3\) Click the "Render" button a second time\
Notice that an error is thrown.

Error: Error parsing template: Attribute: duplicate attributes not allowed

        