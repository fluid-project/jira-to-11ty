---json
{
  "title": "FLUID-3614",
  "summary": "After stopping an upload, the total progress bar appears full",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2010-04-07T15:42:13.000-0400",
  "updated": "2011-01-05T12:14:37.930-0500",
  "versions": [
    "1.1.2",
    "1.2"
  ],
  "fixVersions": [],
  "components": [
    "Uploader"
  ],
  "environment": "Chrome 4, FF 3.6, FF 3, IE 8, IE 7, IE 6 (Win XP)\\\nFF 3.6, IE 8 (Win 7)\\\nSafari 4 (Mac OS 10.5)\\\nFF 3.6, Safari 4 (Mac OS 10.6)&#x20;\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3614/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-04-07T15:43:23.000-0400",
      "body": "screenshot-1 shows the total progress bar all filled up, even though none of the files have been uploaded.\n"
    },
    {
      "author": "Mike Lam",
      "date": "2011-01-05T12:14:37.859-0500",
      "body": "Resolved in Infusion 1.3.&#x20;\n"
    }
  ]
}
---
After stopping an upload, the total progress bar appears full

Steps to reproduce:

1\) Open the uploader demo\
<http://build.fluidproject.org/infusion/demos/uploader/html/uploader.html>\
<http://build.fluidproject.org:8080/sakai-imagegallery2-web/site/AddImages/>

2\) Add some files to the file queue

3\) Start the upload and stop before they have all been uploaded

Notice that the total progress bar fills up, even though not all of the files have been uploaded.

        