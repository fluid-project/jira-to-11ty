---json
{
  "title": "FLUID-3296",
  "summary": "Keyboard navigation stuck in Uploader (Safari 4 - Flash 10)",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Armin Krauss",
  "date": "2009-10-14T15:51:53.000-0400",
  "updated": "2011-01-05T15:54:47.078-0500",
  "versions": [
    "1.1.2",
    "1.2"
  ],
  "fixVersions": [],
  "components": [
    "Uploader"
  ],
  "environment": "Mac OS X 10.5 - Safari 4 - Flash 10 | \\\nMozilla/5.0 (Macintosh; U; Intel Mac OS X 10\\_5\\_8; en-us) AppleWebKit/531.9 (KHTML, like Gecko) Version/4.0.3 Safari/531.9\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3296/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3296/screenshot-2.jpg",
      "filename": "screenshot-2.jpg"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3296/screenshot-3.jpg",
      "filename": "screenshot-3.jpg"
    }
  ],
  "comments": [
    {
      "author": "Armin Krauss",
      "date": "2009-10-14T15:53:22.000-0400",
      "body": "Screenshot 1 shows\\\nStep 2) to change to singe-file uploader\n"
    },
    {
      "author": "Armin Krauss",
      "date": "2009-10-14T15:54:43.000-0400",
      "body": "Screenshot 2 shows\\\nStep 3) tabing to the \"back button\" of the browser\n"
    },
    {
      "author": "Armin Krauss",
      "date": "2009-10-14T15:57:25.000-0400",
      "body": "screenshot-3 shows\\\nStep 4) stuck keyboard navigation\n"
    },
    {
      "author": "Mike Lam",
      "date": "2011-01-05T15:54:47.076-0500",
      "body": "Supported Safari browser now uses the HTML5 uploader instead of SWF Uploader.   No longer an issue.\n"
    }
  ]
}
---
Keyboard navigation via tabs gets stuck on <http://build.fluidproject.org/infusion/components/uploader/html/Uploader.html>

Steps to reproduce:

1\) open (<http://build.fluidproject.org/infusion/components/uploader/html/Uploader.html>)\
2\) tab to "Switch to the standard single-file Uploader" and activate via return key\
3\) keep tabbing until focus is on back button of the browser\
4\) now tab backwards (shift + tab) until stuck on hidden add file element (yellow frame)\
5\) hitting return opens the file selector dialog of the OS\
6\) Choosing a file frees the keyboard navigation

        