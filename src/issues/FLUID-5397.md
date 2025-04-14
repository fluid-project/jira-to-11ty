---json
{
  "title": "FLUID-5397",
  "summary": "Cycling between the items per page breaks page links",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Justin Obara",
  "date": "2014-06-03T12:56:54.150-0400",
  "updated": "2014-06-13T13:15:30.442-0400",
  "versions": [],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Pager"
  ],
  "environment": "Firefox 29, Chrome 35, Safari 7 (Mac OS 10.9)\\\nIE 9, 10, 11 (Windows 7)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2014-06-13T13:15:24.929-0400",
      "body": "Merged pull request ( <https://github.com/fluid-project/infusion/pull/531> ) into the project repo at 8dd9adde512559455b3d02a905938dffd7b0ec10\n"
    }
  ]
}
---
Steps to reproduce:

1\) Open the pager demo or integration demo\
<http://build.fluidproject.org/infusion/demos/pager/>\
<http://build.fluidproject.org/infusion/integration-demos/sakai/html/pager-site-setting.html>

2\) Select each of the different items per page options.

3\) Select 10 items per page

4\) Click on the "last" page link. Notice that it jumps to an item in the middle, but not to the last. None of the page links between this one and the last work.

        