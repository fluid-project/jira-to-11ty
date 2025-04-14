---json
{
  "title": "FLUID-4242",
  "summary": "Uploader buttons move beside uploader, instead of remaing below",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2011-05-16T12:39:17.667-0400",
  "updated": "2014-03-03T12:07:40.765-0500",
  "versions": [],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "Demos",
    "Uploader"
  ],
  "environment": "IE 8 (Win 7)\\\nIE 7 (Win XP)\n",
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-4243/",
      "key": "FLUID-4243",
      "summary": "Remove buttons from Uploader Demo"
    }
  ],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-4242/Screenshot.png",
      "filename": "Screenshot.png"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2011-05-16T13:32:48.230-0400",
      "body": "Screenshot.png shows the uploader buttons to the right of the uploader component\n"
    },
    {
      "author": "Mike Lam",
      "date": "2011-05-17T13:24:35.156-0400",
      "body": "Uploader buttons have been removed from the demo as we now have full integration tests to test all uploader configurations.  See <https://fluidproject.atlassian.net/browse/FLUID-4243#icft=FLUID-4243>\n"
    }
  ]
}
---
Steps to reproduce

1\) Open the uploader demo\
<http://build.fluidproject.org/infusion/demos/uploader/demo.html>

2\) click any of the uploader buttons

Notice that some of the buttons move to the right side of the uploader, instead of remaining below

        