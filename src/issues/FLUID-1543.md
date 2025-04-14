---json
{
  "title": "FLUID-1543",
  "summary": "Springboards: Can only move tabs to the first position",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "reporter": "Justin Obara",
  "date": "2008-09-10T15:33:15.000-0400",
  "updated": "2011-01-14T09:53:23.380-0500",
  "versions": [
    "0.5beta1"
  ],
  "fixVersions": [
    "0.5"
  ],
  "components": [
    "Demos",
    "Reorderer"
  ],
  "environment": "IE6, IE7 (Win XP)\\\nIE7 (Win Vista)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1543/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-09-10T15:34:25.000-0400",
      "body": "'screenshot-1' shows the avatar for Tab C in between Tab B and Tab C, but the drop target is in front of Tab D\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-09-10T15:37:06.000-0400",
      "body": "You are sometimes able to get other drop targets to appear if you move the avatar below the tabs component. (e.g. over the example 3)&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-09-15T11:26:26.000-0400",
      "body": "Appears to have been fixed with some recent updates\n\nVerified using:\n\nIE 7 (Vista)\n"
    }
  ]
}
---
Can only move tabs to the first position

Steps to Reproduce:

1\) Open the Reorderer Springboard example from the daily build site:\
<http://build.fluidproject.org/fluid/fluid-components/html/Reorderer.html>

2\) Pick up one of the tabs and move it around. Notice that the drop target only appears in front of the first tab

        