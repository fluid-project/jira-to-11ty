---json
{
  "title": "FLUID-3593",
  "summary": "Layout reorderer grabs the incorrect element with mouse",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "James Yoon",
  "date": "2010-04-05T10:06:32.000-0400",
  "updated": "2010-04-07T11:41:48.000-0400",
  "versions": [
    "1.1.2"
  ],
  "fixVersions": [],
  "components": [
    "Layout Reorderer"
  ],
  "environment": "Chrome 4, FF 3.6, FF 3, IE 8, IE 7, IE 6 (Win XP)\\\nFF 3.6, IE 8 (Win 7)\\\nSafari 4 (Mac OS 10.5)\\\nFF 3.6, Safari 4 (Mac OS 10.6)\n",
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-3609/",
      "key": "FLUID-3609"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-3592/",
      "key": "FLUID-3592"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2010-04-06T13:23:45.000-0400",
      "body": "Fixed with <https://fluidproject.atlassian.net/browse/FLUID-3592#icft=FLUID-3592>.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-04-07T11:41:48.000-0400",
      "body": "Fixed at r9806 and filed against a duplicate issue.\n"
    }
  ]
}
---
<http://build.fluidproject.org/infusion/integration-demos/uportal/html/portal.html>

Try grabbing "Image Lightbox" – "My Weather" is grabbed instead.

        