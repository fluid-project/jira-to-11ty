---json
{
  "title": "FLUID-1669",
  "summary": "Pieces of outline remain after shifting focus on Reorderable jQuery tabs on Opera",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "reporter": "Joseph Vernuccio",
  "date": "2008-10-09T12:50:45.000-0400",
  "updated": "2009-08-13T13:05:17.000-0400",
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
  "fixVersions": [],
  "components": [
    "Reorderer"
  ],
  "environment": "Opera 9.6 for Mac OS X 10.5&#x20;\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1669/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    }
  ],
  "comments": [
    {
      "author": "Joseph Vernuccio",
      "date": "2008-10-09T12:53:41.000-0400",
      "body": "Screenshiot-1 shows the fragments of blue highlight bos that appear after shifiting focus to a new tab or clicking in blank/white space.&#x20;\n"
    }
  ]
}
---
Fragments of the bule highlight box remain after shifting focus to a new tab.&#x20;

Steps to reproduce:&#x20;

1\. Open URL: <http://build.fluidproject.org/fluid/sample-code/reorderer/jquery-tabs/jquery-tabs.html>

2\. Using mouse, focus on one of the reorderable tabs.&#x20;

3\. Click on blank area and fragments of the blue highlight box will remain where the box used to appear.&#x20;

        