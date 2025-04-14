---json
{
  "title": "FLUID-1628",
  "summary": "Top border of browser focus styling remains during keyboard reordering of jQuery tabs: using Opera",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Justin Obara",
  "date": "2008-09-26T11:20:49.000-0400",
  "updated": "2009-08-13T13:05:58.000-0400",
  "versions": [
    "0.5",
    "0.6beta1",
    "0.6",
    "0.7",
    "0.8",
    "1.0",
    "1.1",
    "1.1.1"
  ],
  "fixVersions": [
    "1.2"
  ],
  "components": [
    "Reorderer"
  ],
  "environment": "Opera 9.6 (Mac OS 10.5)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1628/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-09-26T11:21:46.000-0400",
      "body": "'screenshot -1' shows the trail of blue borders\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-08-13T13:05:58.000-0400",
      "body": "Browser support for Infusion 1.2 ( <http://wiki.fluidproject.org/display/fluid/Prior+Browser+Support> ) does not include Opera 9.6 for Mac OS\n"
    }
  ]
}
---
Top border of browser focus styling remains during keyboard reordering of jQuery tabs

Steps to reproduce:

1\) Open the sortable jQuery Tabs demo from the daily build site:\
<http://build.fluidproject.org/fluid/sample-code/reorderer/jquery-tabs/jquery-tabs.html>

2\) Press the "tab" key until one of the jQuery Tabs has focus

3\) Use the keyboard to move the first jQuery Tab to the last position

Notice that a trail of the top border from the focus styling persists

        