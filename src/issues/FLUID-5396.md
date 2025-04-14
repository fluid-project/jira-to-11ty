---json
{
  "title": "FLUID-5396",
  "summary": "The page link tooltip only appears after sorting the data",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Not A Bug",
  "reporter": "Justin Obara",
  "date": "2014-06-03T12:27:49.219-0400",
  "updated": "2014-06-09T13:24:40.551-0400",
  "versions": [
    "1.5"
  ],
  "fixVersions": [],
  "components": [
    "Pager"
  ],
  "environment": "Firefox 29, Chrome 35, Safari 7 (Mac OS 10.9)\\\nIE 8, 9, 10, 11 (Windows 7)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2014-06-09T13:24:40.549-0400",
      "body": "This is the expected behaviour for this demo.\n"
    }
  ]
}
---
Steps to reproduce:

1\) Open the pager integration demo\
<http://build.fluidproject.org/infusion/integration-demos/sakai/html/pager-site-setting.html>

2\) hover over or put keyboard focus on one of the page links\
Notice that no tooltip appears

3\) sort the table by one of the sortable columns

4\) hover over or put keyboard focus on one of the page links\
Notice that the tooltip now appears.

        