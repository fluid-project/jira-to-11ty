---json
{
  "title": "FLUID-534",
  "summary": "Double-clicking in IE highlights text and does not activate checkbox.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "assignee": "Jonathan Hung",
  "reporter": "Jonathan Hung",
  "date": "2008-04-25T11:32:27.000-0400",
  "updated": "2008-11-13T13:31:14.000-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Keyboard Accessibility"
  ],
  "environment": "WinXP IE7\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-860/",
      "key": "FLUID-860"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-07-07T14:20:33.000-0400",
      "body": "Appears to be fixed in the current build.&#x20;\n\nDouble clicking checks the checkbox and highlights the text in IE6 and IE7\n"
    }
  ]
}
---
Double clicking an unchecked checkbox highlights the checkbox text and does not check the box.\
In FF2, doiuble clicking highlights the text, but properly checks the box.

        