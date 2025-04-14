---json
{
  "title": "FLUID-4373",
  "summary": "Under the \"Links and Buttons\" tab, the the checkboxes' container is focusable",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Mike Lam",
  "reporter": "Justin Obara",
  "date": "2011-07-28T14:08:32.304-0400",
  "updated": "2013-09-06T13:33:45.132-0400",
  "versions": [
    "1.4"
  ],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-4373/ScreenShot.png",
      "filename": "ScreenShot.png"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2011-07-28T14:09:39.869-0400",
      "body": "ScreenShot.png shows the focus styling around the container of the options. Notice the dotted underline.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-07-28T14:09:48.314-0400",
      "body": "Bug Parade Infusion\n"
    },
    {
      "author": "Justin Obara",
      "date": "2013-09-06T13:33:45.128-0400",
      "body": "No longer an issue with the redesigned panels.\n"
    }
  ]
}
---
The \<ul> containing the options under the "Links and Buttons" tab in the fat panel is focusable. This provides an unneeded navigation element and adds a confusing focus styling when using the mouse.

Steps to reproduce

1\) Open the Fat Panel UIO Demo\
<http://build.fluidproject.org/infusion/demos/uiOptions/FatPanelUIOptions/html/uiOptions.html>

2\) Change to the "Links and Buttons" tab

3\) Attempt to change the options\
Notice the focus styling that goes around the \<ul> containing the options.

        