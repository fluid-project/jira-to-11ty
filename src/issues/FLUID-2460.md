---json
{
  "title": "FLUID-2460",
  "summary": "HTML uploader not present when javascript turned off",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Justin Obara",
  "date": "2009-04-01T16:29:28.000-0400",
  "updated": "2009-04-01T16:44:41.000-0400",
  "versions": [
    "1.0"
  ],
  "fixVersions": [
    "1.1"
  ],
  "components": [
    "Uploader"
  ],
  "environment": "FF2, FF3, Opera 9.6, Safari 3.2 (Mac OS 10.5)\\\nSafari 3.2 (Mac OS 10.4)\\\nFF2, FF3, IE6, IE7, Opera 9.6 (Win XP)\\\nFF3, IE7 (Win Vista)\\\nIE6 (Win 2000)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-04-01T16:44:41.000-0400",
      "body": "the template is loaded via an ajax call so it can't work without javascript.\n"
    }
  ]
}
---
HTML uploader not present when javascript turned off

Steps to reproduce:

1\) Turn off javascript

2\) Open the server version of the uploader\
<http://build.fluidproject.org:8080/sakai-imagegallery2-web/site/AddImages/>

Notice that the html version of uploader isn't visible.

        