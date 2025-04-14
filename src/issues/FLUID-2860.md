---json
{
  "title": "FLUID-2860",
  "summary": "Removing all errored files from the file queue, doesn't remove the  yellow highlight from the status bar",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Open",
  "reporter": "Justin Obara",
  "date": "2009-06-01T11:36:38.000-0400",
  "updated": "2014-07-11T14:49:20.504-0400",
  "versions": [
    "1.1",
    "1.1.1",
    "1.2",
    "1.3"
  ],
  "fixVersions": [],
  "components": [
    "Uploader"
  ],
  "environment": "FF2, FF3, Opera 9.6, Safari 3.2 (Mac OS 10.5)\\\nSafari 3.2 (Mac OS 10.4)\\\nFF2, FF3, IE6, IE7, IE8, Opera 9.6 (Win XP)\\\nFF3, IE7, IE8 (Win Vista)\\\nIE6 (Win 2000)\\\nIE9 (Win 7)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-2860/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-06-01T11:45:01.000-0400",
      "body": "'screenshot-1' shows that the status bar remains highlighted in yellow\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2010-12-22T11:23:22.236-0500",
      "body": "Note that this is the case even if you empty the file queue altogether. To reproduce:\\\n1\\) Use the server version that actually uploads files\\\n2\\) add a single file to the queue\\\n3\\) remove that file from the filesystem\\\n4\\) try to upload\\\n– you'll get the error message and highlight\\\n5\\) remove the offending file from the queue, leaving the queue empty\\\n– the error highlight remains\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-07-11T14:49:20.504-0400",
      "body": "We'll need to create a unit test for this, as there is no longer a demo that can be used to reproduce the issue.\n"
    }
  ]
}
---
Removing all errored files from the file queue, doesn't not remove the  yellow highlight from the status bar

Steps to reproduce:

1\) Open the server version of uploader\
<http://build.fluidproject.org:8080/sakai-imagegallery2-web/site/AddImages/>

2\) Do something to cause an error with a file upload, such as having the same file in the queue twice

3\) Attempt to upload the files

Notice that the status bar becomes yellow to indicate that there was an error

4\) Remove all files that threw an error

5\) Notice that the status bar is still highlighted yellow

        