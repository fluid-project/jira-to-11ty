---json
{
  "title": "FLUID-5407",
  "summary": "background of preview around the table of contents is not themed",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "reporter": "Justin Obara",
  "date": "2014-06-05T13:25:17.325-0400",
  "updated": "2021-06-29T17:08:21.041-0400",
  "versions": [
    "1.5"
  ],
  "fixVersions": [
    "3.0"
  ],
  "components": [
    "Prefs Framework",
    "UI Options"
  ],
  "environment": "Chrome 35, FF 29, Safari 7 (Mac OS 10.9)\\\nIE 8, 9, 10, 11 (Windows 7)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2014-06-05T13:25:51.684-0400",
      "body": "~~screenshot.png shows the background around the table of contents isn't themed.~~\n\nThe screenshot was deleted during a system upgrade.\n"
    },
    {
      "author": "Stanislav Shterev",
      "date": "2016-05-10T14:28:24.327-0400",
      "body": "I fixed the bug by changing background-color to background in the Themes.styl file in order to remove the background images when a contrast theme is added. <https://github.com/styki/infusion/tree/FLUID-5407>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2017-08-14T09:07:16.487-0400",
      "body": "This issue seems to be present whether or not the Table of Contents is enabled; however, it is more visible when it is.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2021-06-29T17:08:21.038-0400",
      "body": "Can no longer reproduce this issue. Possibly fixed with recent changes to the contrast themes such as <https://fluidproject.atlassian.net/browse/FLUID-6549#icft=FLUID-6549>\n"
    }
  ]
}
---
Steps to reproduce:

1\) Open full with preview UIO\
<http://build.fluidproject.org/infusion/tests/manual-tests/framework/preferences/fullPage/>

2\) Select a contrast theme

3\) Enable the table of contents\
Notice that the background around the table of contents is not themed.

        