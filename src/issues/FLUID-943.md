---json
{
  "title": "FLUID-943",
  "summary": "Add multiple files to Upload Queue, hides portions of the pop-up version of Uploader, using Safari",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Eli Cochran",
  "reporter": "Justin Obara",
  "date": "2008-07-18T14:05:56.000-0400",
  "updated": "2008-08-01T09:28:43.000-0400",
  "versions": [
    "0.1",
    "0.3",
    "0.4beta1",
    "0.4"
  ],
  "fixVersions": [],
  "components": [
    "Uploader"
  ],
  "environment": "Safari (Mac OS 10.5, Win XP)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-943/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-943/screenshot-2.jpg",
      "filename": "screenshot-2.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-07-18T14:06:48.000-0400",
      "body": "'screenshot-1' shows the \"Cancel\" and \"Upload\" buttons hidden\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-07-18T14:07:26.000-0400",
      "body": "'screenshot-2' shows the Uploader's title bar hidden\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-07-25T11:15:58.000-0400",
      "body": "I believe you may have fixed this with your fix for fluid-915 (svn commit: 5265). Could you please verify and i'll close. Thanks\n"
    }
  ]
}
---
Adding more than 1 file to the Upload queue, causes the pop-up version of uploader to scroll out of site, within its container.

Steps to reproduce:

1\) Open the pop-up version of the Uploader from the daily build site:\
<http://build.fluidproject.org/fluid/sample-code/uploader/pop-up/index.html>

2\) add four or more files. Notice that you can no longer see the "Cancel' and "Upload' buttons

3\) Click one of the  'x' to remove a file.

4\) tap the shift-tab key. Notice that when the "Cancel' or "Upload" button has focus, the Uploader's title bar move out of view.

        