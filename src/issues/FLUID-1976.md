---json
{
  "title": "FLUID-1976",
  "summary": "\"Add More\" button is still active during upload in Flash 9 version",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Eli Cochran",
  "reporter": "Justin Obara",
  "date": "2008-12-15T15:50:50.000-0500",
  "updated": "2008-12-18T11:13:39.000-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Uploader"
  ],
  "environment": "FF2, FF3, Opera 9.5, Safari 3 (Mac OS 10.5)\\\nFF2, FF3, IE7, Opera 9.5 (Win XP)\\\nFF3, IE7 (Win Vista)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1976/FLUID-1976.a.patch",
      "filename": "FLUID-1976.a.patch"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1976/FLUID-1976-isUploading-fix.patch",
      "filename": "FLUID-1976-isUploading-fix.patch"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-12-15T16:08:52.000-0500",
      "body": "Bug Parade: 0.6 release\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2008-12-15T17:00:11.000-0500",
      "body": "I have added a check inside SWFUploadManager to check that.queue.isUploading before doing a browse. Could probably do a little better on the styling in this case but this'll do for now.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2008-12-15T19:13:29.000-0500",
      "body": "I've reviewed Eli's fix and it looks good.\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2008-12-15T19:26:08.000-0500",
      "body": "Nice, clean and simple code fix\n"
    },
    {
      "author": "Colin Clark",
      "date": "2008-12-15T19:42:11.000-0500",
      "body": "There was a second aspect to this fix that became clear after more testing: the Add more button wasn't working after an upload had been completed. This is because SWFUPloadManager wasn't setting isUploading to false when an upload batch is finished. Here's a patch with a two-line fix.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-12-18T11:13:39.000-0500",
      "body": "Verified fix using:\n\nFF2, FF3, Opera 9.5, Safari 3 (Mac OS 10.5)\\\nFF2, FF3, Opera 9.5 (Win XP)\\\nFF3 (Win Vista)\n"
    }
  ]
}
---
"Add More" button is still active during upload in Flash 9 version

Steps to reproduce:

1\) Open the uploader demo:\
<http://build.fluidproject.org/fluid/fluid-components/html/templates/Uploader.html>

2\) Add some files to the file queue.

3\) Click "upload" to start uploading the files

4\) While the files are uploading, click "Add More'&#x20;

Notice that the OS File Open Dialog appears and you can add more files to the queue, while other files are still uploading

        