---json
{
  "title": "FLUID-4454",
  "summary": "Background images are conflicting with the contrast themes",
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
  "date": "2011-09-16T10:56:14.488-0400",
  "updated": "2013-10-04T10:59:37.312-0400",
  "versions": [
    "1.4"
  ],
  "fixVersions": [],
  "components": [
    "Demos",
    "FSS",
    "UI Options"
  ],
  "environment": "FF3.6 (Win XP)\\\nFF7 (OSX)\\\nIE7 (Win XP)\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-4298/",
      "key": "FLUID-4298",
      "summary": "When switching to a different theme, UIO should use theme-appropriate background images if available and none otherwise"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-4368/",
      "key": "FLUID-4368",
      "summary": "Some background images are still present in the Preview after applying a contrast theme"
    }
  ],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-4454/sakai-demo-bad-widget-borders.png",
      "filename": "sakai-demo-bad-widget-borders.png"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-4454/Screenshot.png",
      "filename": "Screenshot.png"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2011-09-16T10:57:19.849-0400",
      "body": "Screenshot.png shows background images clashing with the contrast theme\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2011-10-11T15:40:54.038-0400",
      "body": "This issue also seems to affect \"widgets.\" The attached screenshot (sakai-demo-bad-widget-borders.png) shows the borders of the widgets not being properly set to the high-contrast theme colours.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2013-10-04T10:59:37.311-0400",
      "body": "This demo has been removed.\n"
    }
  ]
}
---
Steps to reproduce:

1\) Open the sakai mock-up example\
<http://build.fluidproject.org/infusion/integration-demos/sakai/html/ui-options-fss-sakai.html>

2\) Change the contrast theme. Notice that the background images used for things like "tabs" do not get removed or changed to fit the theme.

        