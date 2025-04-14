---json
{
  "title": "FLUID-5412",
  "summary": "ID-based Rendering example has a broken link to FluidDOMUtilities.js",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2014-06-06T10:41:22.177-0400",
  "updated": "2014-06-10T13:15:50.458-0400",
  "versions": [],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Demos",
    "Renderer"
  ],
  "environment": "Chrome 35, FF 29, Safari 7 (Mac OS 10.9)\\\nIE 8, IE 9, IE 10, IE 11 (Windows 7)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2014-06-06T11:06:42.329-0400",
      "body": "Note that the page actually works in Safari. The typo has to do with capitalization, perhaps it ignores this.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-06-09T14:28:47.920-0400",
      "body": "Submitted a pull request \\\n<https://github.com/fluid-project/infusion/pull/524>\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2014-06-10T13:15:45.577-0400",
      "body": "Merged at d77e43057077660c34f741e9b31bbdf169f25697\n"
    }
  ]
}
---
There is a typo in the reference to FluidDOMUtilities.js which causes the demo to break.

        