---json
{
  "title": "FLUID-5399",
  "summary": "can't click on the browse button for the single file uploader",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2014-06-03T14:44:38.341-0400",
  "updated": "2014-06-12T10:47:51.461-0400",
  "versions": [
    "1.5"
  ],
  "fixVersions": [],
  "components": [
    "Uploader"
  ],
  "environment": "FF 29, Chrome 35, Safari 7 (Mac OS 10.9)\\\nIE 11 (Windows 7)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2014-06-10T11:05:34.351-0400",
      "body": "This seems to be caused by the overview panel's container being overtop of the single file browse button. The container doesn't have anything in it, so it is invisible, however it is capturing the mouse clicks.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-06-11T11:02:50.842-0400",
      "body": "Submitted a pull request\\\n<https://github.com/fluid-project/infusion/pull/530>\n"
    },
    {
      "author": "Cindy Li",
      "date": "2014-06-12T10:47:48.325-0400",
      "body": "Merged into the project repo @ d934d757a4bee649137e553ca3c31d16f7e4c39a\n"
    }
  ]
}
---
Steps to reproduce:

1\) disable javascript in the browser

2\) Open the uploader demo\
<http://build.fluidproject.org/infusion/demos/uploader/>

3\) Using the mouse attempt to click on the "browse" button\
Notice that you can't click on the "browse" button. It does work with the keyboard though.&#x20;

        