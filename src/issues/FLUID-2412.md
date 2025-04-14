---json
{
  "title": "FLUID-2412",
  "summary": "Reset doesn't work after saving the initial cookie",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Michelle D'Souza",
  "reporter": "Justin Obara",
  "date": "2009-03-25T14:07:01.000-0400",
  "updated": "2009-05-06T15:41:49.000-0400",
  "versions": [
    "1.0"
  ],
  "fixVersions": [
    "1.1"
  ],
  "components": [
    "UI Options"
  ],
  "environment": "FF2, FF3, Opera 9.6, Safari 3.2 (Mac OS 10.5)\\\nSafari 3.2 (Mac OS 10.4)\\\nFF2, FF3, IE6, IE7, IE8, Opera 9.6 (Win XP)\\\nFF3, IE7, IE8 (Win Vista)\\\nIE6 (Win 2000)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-05-06T15:41:48.000-0400",
      "body": "Verified fix using:\n\nFF2, FF3, Opera 9.6, Safari 3.2 (Mac OS 10.5)\\\nFF3, IE7 (Win Vista)\n"
    }
  ]
}
---
Reset doesn't work after saving the initial cookie. Once the page has been reloaded, it will work.

Steps to reproduce:

1\) Make sure you do not have a cookie stored for the site

2\) Open the UI Options example from the daily build site\
<http://build.fluidproject.org/fluid/fluid-components/html/templates/UIOptions.html>

3\) change any of the options and save

4\) click on the reset button

Notice that reset has no effect

        