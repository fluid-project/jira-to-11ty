---json
{
  "title": "FLUID-2859",
  "summary": "Single File uploader doesn't filter by file type",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Open",
  "reporter": "Justin Obara",
  "date": "2009-06-01T11:21:16.000-0400",
  "updated": "2017-01-19T09:15:20.144-0500",
  "versions": [
    "1.1",
    "1.1.1",
    "1.2",
    "1.3",
    "1.4",
    "1.5",
    "2.0"
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
      "date": "2014-07-11T14:47:57.389-0400",
      "body": "We'd need to use the accept attribute on the input; however, it seems that there is very little support for it. <https://developer.mozilla.org/en/docs/Web/HTML/Element/Input>\n"
    }
  ]
}
---
Single File uploader doesn't filter by file type

Steps to reproduce:

1\) Open the server version of uploader\
<http://build.fluidproject.org:8080/sakai-imagegallery2-web/site/AddImages/>

2\) Switch to the single file uploader

Notice that you are able to select any no matter the type, where as the Multi-file uploader will restrict it to image files in this example

        