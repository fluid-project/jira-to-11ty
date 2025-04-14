---json
{
  "title": "FLUID-681",
  "summary": "Progress bar increasingly innacurate with subsequent uploads",
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
  "reporter": "Jonathan Hung",
  "date": "2008-05-30T16:14:15.000-0400",
  "updated": "2014-03-04T09:06:58.708-0500",
  "versions": [
    "0.1",
    "0.3",
    "0.4beta1",
    "0.4",
    "0.5beta1",
    "0.5",
    "0.6beta1"
  ],
  "fixVersions": [],
  "components": [
    "Uploader"
  ],
  "environment": "FF2, FF3, Opera 9.5, Safari 3 (Mac OS 10.5)\\\nFF2, FF3, IE6, IE7, Opera 9.5 (Win XP)\\\nFF3, IE7 (Win Vista)\n",
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-874/",
      "key": "FLUID-874"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-602/",
      "key": "FLUID-602",
      "summary": "Progress tests partially fail on IE6 and IE7"
    }
  ],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-681/Fluid-681-reopen.png",
      "filename": "Fluid-681-reopen.png"
    }
  ],
  "comments": [
    {
      "author": "Eli Cochran",
      "date": "2008-06-16T22:50:47.000-0400",
      "body": "With the various changes to the way that the progress is tracked and displayed this bug is fixed.&#x20;\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2008-07-11T17:31:03.000-0400",
      "body": "Bug does not appear to be fixed. Tested with version from the build server on July 11, 2008.\n\nSee attached image for a description of the problem.\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2008-07-11T17:31:35.000-0400",
      "body": "Visual description of the progress bar bug.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-08-13T15:08:18.000-0400",
      "body": "Updated to reflect the various browsers the issue affects\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2008-09-02T12:52:30.000-0400",
      "body": "We should ensure that this bug is resolved as part of uploader 2.&#x20;\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2008-11-16T18:46:21.000-0500",
      "body": "New code no longer displays this problem\n"
    }
  ]
}
---
When uploading a file, the progress bar on the first upload functions properly. Each subsequent upload gets increasingly innacurate.

Upload 1: Total Progress goes to 100%\
Upload 2: Total Progress goes to 50%\
Upload 3: Total Progress goes to 33%

...

Upload batch contained the same set of 7 files each time.

dev-iteration35\
dev-iteration43

        