---json
{
  "title": "FLUID-2850",
  "summary": "Single File Uploader does not add uploaded images to the image gallery",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Justin Obara",
  "date": "2009-05-29T15:23:47.000-0400",
  "updated": "2014-07-11T14:41:46.787-0400",
  "versions": [
    "1.1",
    "1.1.1",
    "1.1.2",
    "1.2"
  ],
  "fixVersions": [],
  "components": [
    "Uploader"
  ],
  "environment": "FF2, FF3, Opera 9.6, Safari 3.2 (Mac OS 10.5)\\\nSafari 3.2 (Mac OS 10.4)\\\nFF2, FF3, IE6, IE7, IE8, Opera 9.6 (Win XP)\\\nFF3, IE7, IE8 (Win Vista)\\\nIE6 (Win 2000)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2014-07-11T14:41:46.785-0400",
      "body": "The image gallery is no longer in use.&#x20;\n"
    }
  ]
}
---
Single File Uploader does not add uploaded images to the image gallery

Steps to reproduce:

1\) Open the server version of the uploader\
<http://build.fluidproject.org:8080/sakai-imagegallery2-web/site/AddImages/>

2\) Click the "Switch to the standard single-file Uploader" link

3\) Browse for an image file

4\) Click the save button

Notice that hte file appears to upload but that when you go to the "Browse Images" page, it is not there

        