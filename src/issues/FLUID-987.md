---json
{
  "title": "FLUID-987",
  "summary": "When dragging a JQuery Tab, the pointer is an arrow unless it is over top of another JQuery Tab, using Opera",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-issue",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jacob Farber",
  "reporter": "Justin Obara",
  "date": "2008-07-22T19:09:56.000-0400",
  "updated": "2008-11-03T09:55:27.000-0500",
  "versions": [
    "0.1",
    "0.3",
    "0.4beta1",
    "0.4",
    "0.5beta1",
    "0.5",
    "0.6beta1"
  ],
  "fixVersions": [
    "0.6"
  ],
  "components": [
    "Reorderer"
  ],
  "environment": "Opera 9.5 (Mac OS 10.5, Win XP)\n",
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-1289/",
      "key": "FLUID-1289"
    }
  ],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-987/FLUID-987.patch",
      "filename": "FLUID-987.patch"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-987/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-09-02T11:15:23.000-0400",
      "body": "'screenshot-1' shows the incorrect pointer style&#x20;\n"
    },
    {
      "author": "Jacob Farber",
      "date": "2008-10-31T10:20:06.000-0400",
      "body": "flora theme forced cursor to pointer, so added a rule to \"cursor:move\"\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-11-03T09:50:57.000-0500",
      "body": "Verified fix using:\n\nFF2 (Mac OS 10.5)\\\nFF3(Win XP)\\\nIE7 (Win Vista)\n"
    }
  ]
}
---
When dragging a JQuery Tab, the pointer is an arrow unless it is over top of a JQuery Tab.

Steps to reproduce:

1\) Open the Sortable JQuery Tabs Demo from the daily build site:\
<http://build.fluidproject.org/fluid/sample-code/reorderer/jquery-tabs/jquery-tabs.html>

2\) Drag a Tab, notice that the pointer is an arrow unless it is over another JQuery Tab

        