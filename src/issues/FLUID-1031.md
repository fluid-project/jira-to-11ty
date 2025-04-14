---json
{
  "title": "FLUID-1031",
  "summary": "no focus styling applied to files in file queue, using IE",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-issue",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Eli Cochran",
  "reporter": "Justin Obara",
  "date": "2008-07-28T09:52:45.000-0400",
  "updated": "2009-01-14T13:00:43.000-0500",
  "versions": [
    "0.1",
    "0.3",
    "0.4beta1",
    "0.4",
    "0.5beta1",
    "0.5",
    "0.6"
  ],
  "fixVersions": [
    "0.7"
  ],
  "components": [
    "Uploader"
  ],
  "environment": "IE6, IE7 (Win XP)\\\nIE7 (Win Vista)\\\nIE6 (Win 2000)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-09-16T14:54:58.000-0400",
      "body": "Affects Uploader 2\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-01-14T13:00:43.000-0500",
      "body": "Appears to have been fixed.\n\nTested using:\n\nIE7 (Win Vista)\\\nIE6 (Win XP)\n"
    }
  ]
}
---
No focus styling applied to files in the file queue.

Steps to reproduce:

1\) Open either version of the uploader from the daily build site:\
<http://build.fluidproject.org/fluid/sample-code/uploader/inline/index.html>\
<http://build.fluidproject.org/fluid/sample-code/uploader/pop-up/index.html>

2\) Add some files

3\) Focus should be on 'Upload', tap 'shift-tab' twice, to put focus on a file in the file queue. Notice that there is no focus styling

4\) Tap the 'delete' key on the keyboard, notice that the file is removed.

        