---json
{
  "title": "FLUID-3918",
  "summary": "Demo: The five star rating demo starts from the first star each time",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "reporter": "Justin Obara",
  "date": "2010-12-16T11:59:56.240-0500",
  "updated": "2016-10-26T09:09:57.067-0400",
  "versions": [
    "1.3",
    "1.3.1",
    "1.4",
    "1.5",
    "2.0"
  ],
  "fixVersions": [],
  "components": [
    "Demos",
    "Keyboard Accessibility"
  ],
  "environment": "FF 3.6, Safari 5 (Mac OS 10.6)\\\nSafari 10 (macOS 10.12)\\\nFF 30 (Mac OS 10.9)\\\nIE 6 (Win XP)\\\nIE 9 (Win7)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3918/screenshot-1.png",
      "filename": "screenshot-1.png"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-12-16T12:02:06.502-0500",
      "body": "\"screenshot-1\" shows the yellow star which is where the rating is starting from\n"
    }
  ]
}
---
When editing the rating of an image, the rating always starts at the first star. This is even the case after having perviously changed the rating.

Steps to reprodcue:

1\) Open the keyboard a11y demo\
<http://build.fluidproject.org/infusion/demos/keyboard-a11y/>

2\) select one of the thumbnails and open it.

3\) Adjust the rating to something above 1 and save the change

4\) Tab away and back to the star rating.\
Notice that the first star is selected again, instead of starting where you left off.&#x20;

        