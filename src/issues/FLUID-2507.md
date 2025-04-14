---json
{
  "title": "FLUID-2507",
  "summary": "Moving the thumb for the line spacing slider leaves a trail of artifacts: using Opera",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Justin Obara",
  "date": "2009-04-03T13:55:31.000-0400",
  "updated": "2009-08-13T13:03:03.000-0400",
  "versions": [
    "1.0",
    "1.1",
    "1.1.1"
  ],
  "fixVersions": [
    "1.2"
  ],
  "components": [
    "UI Options"
  ],
  "environment": "Opera 9.6 (Mac OS 10.5)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-2507/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-04-03T13:56:16.000-0400",
      "body": "'screenshot-1' shows the trail of borders left behind\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-08-13T13:03:03.000-0400",
      "body": "Browser support for Infusion 1.2 ( <http://wiki.fluidproject.org/display/fluid/Prior+Browser+Support> ) does not include Opera 9.6 for Mac OS\n"
    }
  ]
}
---
Moving the thumb for the line spacing slider leaves a trail of artifacts

Steps to reproduce:

1\) Open the UI Options example\
<http://build.fluidproject.org/infusion/components/uiOptions/html/UIOptions.html>

2\) Drag the thumb for the line spacing slider to the far right and then back to the far left

Notice that as you move it back to the left, a trail of the vertical border is left behind

        