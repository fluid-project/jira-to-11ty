---json
{
  "title": "FLUID-4948",
  "summary": "Labels for new contrast theme radio buttons appear despite fl-hidden-accessible class",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "assignee": "Jonathan Hung",
  "reporter": "Jonathan Hung",
  "date": "2013-03-26T13:17:56.441-0400",
  "updated": "2013-04-29T09:07:49.833-0400",
  "versions": [],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-4948/Untitled copy.png",
      "filename": "Untitled copy.png"
    }
  ],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2013-03-27T07:42:08.000-0400",
      "body": "The problem was the result of a bad merge. The issue is gone.\n"
    }
  ]
}
---
In the new UIO "C1" style, the labels for the contrast theme radio buttons are appearing despite fl-hidden-accessible class applied in the template.

The template shows:\
\<span class="fl-hidden-accessible">Black on White\</span>

But in the rendered markup does now show this class being applied (check with Firebug).

        