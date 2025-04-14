---json
{
  "title": "FLUID-2026",
  "summary": "All states of the \"Browse File\" button show, when page is zoomed (Flash 10)",
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
  "date": "2008-12-17T17:16:45.000-0500",
  "updated": "2009-11-04T15:02:02.000-0500",
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
  "environment": "FF3, Opera 9.6 (Mac OS 10.5)\\\nFF3, IE7, IE8, Opera 9.6 (Win XP)\\\nFF3, IE7, IE8 (Win Vista)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-2026/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-12-17T17:18:11.000-0500",
      "body": "'screenshot-1' shows the multiple states of the \"Browse Files\" button\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-12-17T17:18:30.000-0500",
      "body": "There is actually a third state visible if you keep increasing the size\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-11-04T15:02:02.000-0500",
      "body": "This has been fixed by placing an invisible flash movie over the button\n"
    }
  ]
}
---
Both states of the "Browse File" button show, when page is zoomed (Flash 10)

Steps to reproduce:

1\) Open either  the demo or the server version of uploader\
<http://build.fluidproject.org/fluid/fluid-components/html/templates/Uploader.html>\
<http://build.fluidproject.org:8080/sakai-imagegallery2-web/site/AddImages/>

2\) Zoom into the page (Make the font bigger)

3\) Notice that as the zoom increases, you are able to see all states of the "Browse Files" button

        