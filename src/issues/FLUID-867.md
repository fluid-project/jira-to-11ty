---json
{
  "title": "FLUID-867",
  "summary": "Calendar not aligned properly within the calendar portlet, using IE6 & IE7",
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
  "date": "2008-07-08T17:52:00.000-0400",
  "updated": "2014-06-05T15:21:25.373-0400",
  "versions": [
    "0.4",
    "0.5beta1",
    "0.5",
    "0.6beta1",
    "0.6",
    "0.7",
    "0.8",
    "1.0",
    "1.1",
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
  "environment": "IE6, IE7 (Win XP)\\\nIE7 (Win Vista)\\\nIE6 (Win 2000)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-867/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-09-02T13:31:18.000-0400",
      "body": "'screenshot-1' shows the calendar  pushing out of the calendar portlet\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-06-05T15:21:25.364-0400",
      "body": "This demo has been removed\n"
    }
  ]
}
---
The calendar is not centred within the calendar portlet. It is positioned to far towards the left.

When in the left hand column, it pokes out the left hand side of the portlet.\
When in the right hand column, it touches the bottom-right corner.

see the uportal page on the daily build site:\
<http://build.fluidproject.org/fluid/sample-code/reorderer/portal/portal.html>

        