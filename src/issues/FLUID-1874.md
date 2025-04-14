---json
{
  "title": "FLUID-1874",
  "summary": "Uploading files while there are previously uploaded files in the file queue, makes the uploader appear to halt",
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
  "date": "2008-12-01T09:55:29.000-0500",
  "updated": "2008-12-04T08:40:29.000-0500",
  "versions": [
    "0.6beta1"
  ],
  "fixVersions": [
    "0.6"
  ],
  "components": [
    "Uploader"
  ],
  "environment": "FF2, FF3, Opera 9.5, Safari 3 (Mac OS 10.5)\\\nFF2, FF3, IE6, IE7, Opera 9.5 (Win XP)\\\nFF3, IE7 (Win Vista)\\\nFF3, IE6 (Win 2000)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1874/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-12-01T09:56:59.000-0500",
      "body": "'screenshot-1' shows the uploader after it has finished uploading the additional files\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2008-12-03T14:15:18.000-0500",
      "body": "Interesting bug... and perplexing as the file queue is behaving differently on the server vs. local. On the server the queue seems to still contain the files which were already uploaded.  Which is, of course, a big ol' hint as to what's going on.&#x20;\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2008-12-03T19:14:39.000-0500",
      "body": "now updating the internal status of our queue on all significant file upload events.&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-12-04T08:40:29.000-0500",
      "body": "Verified fix using:\n\nFF2, Safari 3 (Mac OS 10.5)\\\nFF3, IE7 (Win Vista)\n"
    }
  ]
}
---
Uploading files while there are previously uploaded files in the file queue, makes the uploader appear to halt

Steps to reproduce:

1\) Open the uploader example:\
<http://build.fluidproject.org:8080/sakai-imagegallery2-web/site/AddImages/>

2\) Add some files to the file queue and upload them

3\) Add some other files to the file queue and upload them

Notice that the uploader appears to halt after uploading all of the new files.

        