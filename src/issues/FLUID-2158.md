---json
{
  "title": "FLUID-2158",
  "summary": "Accordion menu not working in sakai mock-up",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2009-01-23T09:53:58.000-0500",
  "updated": "2011-02-22T16:27:49.291-0500",
  "versions": [],
  "fixVersions": [
    "0.8"
  ],
  "components": [
    "UI Options"
  ],
  "environment": "FF2, FF3, Opera 9.5, Safari 3 (Mac OS 10.5)\\\nFF2, FF3, IE6, IE7, Opera 9.5 (Win XP)\\\nFF3, IE7 (Win Vista)\\\nFF3, IE6 (Win 2000)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-2158/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-01-23T09:54:58.000-0500",
      "body": "'screenshot-1' shows the accordion menu fully expanded\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-01-23T11:23:23.000-0500",
      "body": "The ajax call was not bringing in the necessary js files, added them to the head of sakai.html. Also added a function to sakai.js which is called in a script tag on the UIOptions.html page\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-02-22T16:27:49.290-0500",
      "body": "Closing issues that were resolved for 1.0 and earlier releases.&#x20;\n"
    }
  ]
}
---
Accordion menu not working in sakai mock-up

Steps to reproduce:

1\) Open the sakai mock-up from the daily build site\
<http://build.fluidproject.org/fluid/sample-code/shared/sakai/sakai.html>

2\) Click "Edi Appearance" to bring up the UI Options dialog

Notice that the accordion menu is always fully expanded

        