---json
{
  "title": "FLUID-685",
  "summary": "File Uploader: OS file open dialog is differnt when opened by FireFox 2 and Internet Explorer 7",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2008-06-02T12:58:35.000-0400",
  "updated": "2008-07-08T14:42:24.000-0400",
  "versions": [
    "0.3"
  ],
  "fixVersions": [
    "0.4"
  ],
  "components": [
    "Uploader"
  ],
  "environment": "IE7 (WinXP)&#x20;\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-685/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-06-02T13:00:13.000-0400",
      "body": "screenshot-1 shows a side-by-side comparison of the file open dialogs called by FF2 (on the left) and IE7 (on the right) in WinXP.\n\nNotice the icons on the left.\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2008-06-03T15:12:12.000-0400",
      "body": "not sure why this is happening. sounds as if FF and IE actually have their own customized File Open dialogs.&#x20;\n\nBut there really isn't a way for me to control that aspect of the functionality, and I'm not sure that it's really a problem.&#x20;\n"
    }
  ]
}
---
The OS file open dialog appears different when opened by FireFox 2 and Internet Explorer 7. The dialog opened by FF2 is consistent with the file open dialog in WinXP. In IE7 the icons on the left are not contained within a shaded area, and displays part of a fifth icon.

        