---json
{
  "title": "FLUID-684",
  "summary": "File Uploader: scrollbar covers check marks and x's",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "assignee": "Eli Cochran",
  "reporter": "Justin Obara",
  "date": "2008-06-02T12:37:13.000-0400",
  "updated": "2008-07-08T13:29:38.000-0400",
  "versions": [
    "0.3"
  ],
  "fixVersions": [],
  "components": [
    "Uploader"
  ],
  "environment": "IE7 (WinXP)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-684/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-684/screenshot-2.jpg",
      "filename": "screenshot-2.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-06-02T12:39:07.000-0400",
      "body": "Screenshot-1 shows the scrollbar in the correct position, when using FireFox 2 on WinXP.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-06-02T12:40:43.000-0400",
      "body": "screenshot-2 shows the scrollbar in an incorrect position, when using IE7 on WinXP\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2008-06-16T22:54:52.000-0400",
      "body": "Could not reproduce this bug. It could be that the changes that I made to the way that the scrolling area is structured fixed the bug.&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-07-08T13:29:38.000-0400",
      "body": "Verified fix using IE7 on winxp\n"
    }
  ]
}
---
When a scroll bar appears in the Uploader, it partly obscures the column containing the check marks and x's. This issue does not occur in FF2 on either WinXP and Mac OS 10.5.&#x20;

        