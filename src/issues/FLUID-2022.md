---json
{
  "title": "FLUID-2022",
  "summary": "The \"Add more\" button is not present in Flash 10 version of uploader",
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
  "date": "2008-12-17T16:55:29.000-0500",
  "updated": "2009-11-04T15:01:05.000-0500",
  "versions": [
    "0.6",
    "0.7",
    "0.8",
    "1.0",
    "1.1",
    "1.1.1"
  ],
  "fixVersions": [
    "1.1.2"
  ],
  "components": [
    "Uploader"
  ],
  "environment": "FF2, FF3, Opera 9.6, Safari 3.2 (Mac OS 10.5)\\\nSafari 3.2 (Mac OS 10.4)\\\nFF2, FF3, IE6, IE7, IE8, Opera 9.6 (Win XP)\\\nFF3, IE7, IE8 (Win Vista)\\\nIE6 (Win 2000)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-2022/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-12-17T16:58:45.000-0500",
      "body": "'screenshot-1' shows that the \"Browse Files\" button where the \"Add More\" button should be\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-11-04T15:01:05.000-0500",
      "body": "This has been fixed by placing an invisible flash movie over the button\n"
    }
  ]
}
---
The "Add more" button is not present in Flash 10 version of uploader

The "Browse Files" button does not change to an "Add More" button after files have been added to the file queue

Steps to reproduce:

1\) Open either the demo or the server version of uploader\
<http://build.fluidproject.org/fluid/fluid-components/html/templates/Uploader.html>\
<http://build.fluidproject.org:8080/sakai-imagegallery2-web/site/AddImages/>

2\) Add some files to the file queue

Notice that the "Browse Files" button does not switch to the "Add More" button

        