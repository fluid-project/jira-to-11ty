---json
{
  "title": "FLUID-872",
  "summary": "keyboard navigation not working for uploader, using FF on Mac",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Justin Obara",
  "date": "2008-07-08T18:37:11.000-0400",
  "updated": "2008-07-25T13:09:08.000-0400",
  "versions": [
    "0.4beta1"
  ],
  "fixVersions": [],
  "components": [
    "Uploader"
  ],
  "environment": "FF2, FF3 (Mac OS X)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-07-25T09:03:07.000-0400",
      "body": "You are able to tab to the file queue when the scroll bar is visible.\n\nThis issue happens on some machines while Fluid-1016 happens in others. \\\nStill trying to determine what causes the difference\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-07-25T13:09:08.000-0400",
      "body": "This is actually caused by a setting in Mac OS 10.5&#x20;\n\nGo to System Preferences > Keyboard & Mouse >&#x20;\n\nAt the bottom pick the \"All Controls\" radio button\n\nThis will resolve this issue\n"
    }
  ]
}
---
You are not able to tab to any of the uploader elements, in neither the inline nor the pop-up versions.

Tabbing will give the entire browser view port focus, styled with a dotted outline.

dev-iteration39

        