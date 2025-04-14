---json
{
  "title": "FLUID-2825",
  "summary": "UI Options dialog is unreachable in Opera 9.6 using keyboard",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "reporter": "y z",
  "date": "2009-05-28T13:37:51.000-0400",
  "updated": "2009-06-02T10:03:39.000-0400",
  "versions": [
    "1.1"
  ],
  "fixVersions": [],
  "components": [
    "UI Options"
  ],
  "environment": "Opera 9.6 - WinXP\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-06-02T10:03:39.000-0400",
      "body": "Probably the problem is that Opera doesn't use tabs to navigate to links, but uses CMD-Arrow or Ctrl-Arrow\n"
    }
  ]
}
---
When using Sakai UI Options example the UI Options dialog is unavailable when using just a keyboard. The anchor keeps on looping within the Edit tab in the centre of the page.&#x20;

        