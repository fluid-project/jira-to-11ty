---json
{
  "title": "FLUID-2255",
  "summary": "applying a simplified layout, is not displayed immediately: using IE 7",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jacob Farber",
  "reporter": "Justin Obara",
  "date": "2009-02-17T16:06:03.000-0500",
  "updated": "2009-03-18T14:19:01.000-0400",
  "versions": [
    "0.8"
  ],
  "fixVersions": [
    "1.0"
  ],
  "components": [
    "UI Options"
  ],
  "environment": "IE 7 (Win Vista)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-2255/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-02-17T16:12:52.000-0500",
      "body": "'screenshot-1' shows the page displaying only the header after switching to simplified layout\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-02-17T16:13:28.000-0500",
      "body": "on Win XP, it seems that if you don't change the contrast it will display right away when switching to simplified layout\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-03-18T14:18:13.000-0400",
      "body": "Appears to have been fixed\n\nTested using\n\nIE 7 (Win Vista)\n"
    }
  ]
}
---
applying a simplified layout, takes a long time to display in IE

Steps to reproduce:

1\) Open the UI Options example from the daily build site:\
<http://build.fluidproject.org/fluid/fluid-components/html/templates/UIOptions.html>

2\) change the layout to simplified and save the changes

Notice that the page will be blank except for the header

3\) move the mouse around the header

Notice that the page is now displayed

        