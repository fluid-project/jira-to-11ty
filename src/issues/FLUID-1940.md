---json
{
  "title": "FLUID-1940",
  "summary": "\"enter\" doesn't activate browse button but initiates save (when javascript is turned off): Using IE",
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
  "date": "2008-12-08T11:20:10.000-0500",
  "updated": "2011-02-28T15:34:47.294-0500",
  "versions": [
    "0.6",
    "0.7",
    "0.8",
    "1.0",
    "1.1"
  ],
  "fixVersions": [],
  "components": [
    "Uploader"
  ],
  "environment": "IE6, IE7, IE8 (Win XP)\\\nIE7, IE8 (Win Vista)\\\nIE6 (Win 2000)\n",
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-4102/",
      "key": "FLUID-4102"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-12-08T11:20:59.000-0500",
      "body": "You can activate the browse button using the \"space\" bar\n\nThis may just be a limitation of the browser\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-08-12T15:54:59.000-0400",
      "body": "this is due to the browsers natural behaviour\n"
    }
  ]
}
---
"enter" doesn't activate browse button but initiates save (when javascript is turned off): Using IE

Steps to reproduce:

1\) Turn off javascript in the browser

2\) Open the uploader demo from the daily build site:\
<http://build.fluidproject.org/fluid/fluid-components/html/templates/Uploader.html>

3\) Tab to the browse button

4\) Tap the enter key\
Notice that the File system dialog does not appear, but the save button is activated instead.

        