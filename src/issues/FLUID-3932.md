---json
{
  "title": "FLUID-3932",
  "summary": "Keyboard Accessbility Demo - Reverse tabbing the demo is not the same as forward tabbing",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Open",
  "reporter": "Jonathan Hung",
  "date": "2010-12-17T10:25:36.721-0500",
  "updated": "2015-06-09T09:11:18.392-0400",
  "versions": [
    "1.3",
    "1.4",
    "1.5"
  ],
  "fixVersions": [],
  "components": [
    "Keyboard Accessibility"
  ],
  "environment": "Chrome 8, FF 3.6, IE 8 in Window XP\n",
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-4095/",
      "key": "FLUID-4095"
    }
  ],
  "attachments": [],
  "comments": []
}
---
Tabbing forward through the keyboard accessibility demo is different from tabbing in reverse.

Example:\
1\. Press Tab until focus is placed on the first thumbnail.\
2\. Press Tab again places focus on the 5-star widget.\
3\. With focus on the 5-star widget, Reverse Tab. (Shift-Tab on Windows, not what what it is on Mac).\
4\. Focus is lost on some other element. (no visual indication what is focused).\
5\. Reverse Tab again puts focus back on the first thumbnail.

        