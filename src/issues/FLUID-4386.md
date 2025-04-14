---json
{
  "title": "FLUID-4386",
  "summary": "The Fat Panel UIO Tabs break when the page is loaded with Table of Contents on",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2011-08-03T13:38:29.109-0400",
  "updated": "2013-10-04T09:57:10.919-0400",
  "versions": [],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-4386/ScreenShot.png",
      "filename": "ScreenShot.png"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2011-08-03T13:39:54.461-0400",
      "body": "ScreenShot.png shows the broken tabs.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-08-03T13:40:58.036-0400",
      "body": "Bug Parade Infusion\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2011-08-15T15:33:09.975-0400",
      "body": "I believe this issue may already be fixed by my consolidated fixes for <https://fluidproject.atlassian.net/browse/FLUID-4397#icft=FLUID-4397> - I made various styling fixes as part of that package since I noticed that styling class names were not being used consistently. Please retest since I can't reproduce on my machine - thanks\n"
    }
  ]
}
---
If the fat panel uio is initialized with the table of contents already turned on, the tabs component breaks.

Steps to reproduce

1\) Open the fat panel uio demo\
<http://build.fluidproject.org/infusion/demos/uiOptions/FatPanelUIOptions/html/uiOptions.html>

2\) Open the uio options and turn on the table of contents, and make sure the changes have saved

3\) Reload the page

4\) Open the uio panel\
Notice that the tabs are now broken

        