---json
{
  "title": "FLUID-5393",
  "summary": "No hover tooltip for markup driven pager",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Justin Obara",
  "date": "2014-06-03T11:49:08.353-0400",
  "updated": "2015-06-26T10:05:19.654-0400",
  "versions": [
    "1.5"
  ],
  "fixVersions": [
    "1.9"
  ],
  "components": [
    "Demos",
    "Pager"
  ],
  "environment": "Firefox 29, Chrome 35, Safari 7 (Mac OS 10.9)\\\nIE 8, 9, 10, 11 (Windows 7)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2015-06-15T15:02:00.630-0400",
      "body": "The markup driven demo has been replaced by an example <http://build.fluidproject.org/infusion/examples/components/pager/markupDriven/> . However, the reason it does not show the tooltip, is that the markup driven pager does not support it.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-06-26T09:51:06.366-0400",
      "body": "Reopening to change the fix version to 1.9\n"
    }
  ]
}
---
Steps to reproduce:

1\) Open the markup driven pager demo\
<http://build.fluidproject.org/infusion/standalone-demos/pager/html/pager.html>

2\) Hover over or place keyboard focus on one of the page links\
Notice that no tooltip is displayed.

        