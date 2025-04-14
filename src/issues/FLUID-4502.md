---json
{
  "title": "FLUID-4502",
  "summary": "Fat Panel has vertical scrollbars in IE8",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Anastasia Cheetham",
  "date": "2011-10-04T10:27:12.361-0400",
  "updated": "2014-06-25T16:01:17.755-0400",
  "versions": [
    "1.4"
  ],
  "fixVersions": [],
  "components": [
    "Demos",
    "UI Options"
  ],
  "environment": "IE 8 on Win XP and Win 7\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-4502/uio-vertical-scrollbar.png",
      "filename": "uio-vertical-scrollbar.png"
    }
  ],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2011-10-04T10:28:02.180-0400",
      "body": "This screen capture (uio-vertical-scrollbar.png) shows the fat panel with the scrollbar on the right in IE8 on Win7. You can see all the content of the panel, but the scrollbar is there.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2014-06-25T16:01:17.754-0400",
      "body": "We no longer actively support IE6, IE7 and IE8. We will consider patches for certain issues.\n"
    }
  ]
}
---
In IE8 on Windows XP and Windows 7, the Fat Panel shows a vertical scrollbar for the Layout and Navigation and Links and Buttons tabs. The panel tries to resize to fit, and you can see everything just fine, but the scrollbar is there: a small sliver of white is "offscreen" at the bottom.

        