---json
{
  "title": "FLUID-3089",
  "summary": "If columns become stacked, can't drag item into lower column",
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
  "date": "2009-08-11T13:30:19.000-0400",
  "updated": "2014-07-11T15:05:16.101-0400",
  "versions": [
    "1.1.1",
    "1.1.2",
    "1.2",
    "1.2.1",
    "1.3"
  ],
  "fixVersions": [],
  "components": [
    "Layout Reorderer"
  ],
  "environment": "FF2, FF3, Opera 9.6, Safari 3.2 (Mac OS 10.5)\\\nSafari 3.2 (Mac OS 10.4)\\\nFF2, FF3, IE6, IE7, IE8, Opera 9.6 (Win XP)\\\nFF3, IE7, IE8 (Win Vista)\\\nIE6 (Win 2000)\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-3864/",
      "key": "FLUID-3864"
    }
  ],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3089/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-08-11T13:37:11.000-0400",
      "body": "\"screenshot-1\" shows the columns stacked. When in this position you cannot drag items into column c\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-07-11T15:05:16.081-0400",
      "body": "Cannot seem to stack columns anymore more. This could be the result of a better demo code. Please re-open or file a new jira if the issue is encountered again.\n"
    }
  ]
}
---
If columns become stacked, can't drag item into lower column

Steps to reproduce:

1\) Open the Layout reorderer quick start example\
<http://build.fluidproject.org/infusion/standalone-demos/quick-start-examples/reorderer/html/LayoutReorderer.html>

2\) Adjust the browser size so that two of the columns are stacked on top of each other.

3\) Attempt to drag one of the moveable items into the lower column. Notice that it will drop at the bottom of the top column

        