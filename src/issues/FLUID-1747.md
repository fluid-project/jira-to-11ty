---json
{
  "title": "FLUID-1747",
  "summary": "right border of portlets in the right column do not display properly if a horizontal scroll bar appears; using IE7",
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
  "date": "2008-10-30T13:25:13.000-0400",
  "updated": "2014-06-05T15:24:46.664-0400",
  "versions": [
    "0.6beta1",
    "0.6",
    "0.7",
    "0.8",
    "1.0",
    "1.1",
    "1.1.1",
    "1.2",
    "1.2.1",
    "1.3"
  ],
  "fixVersions": [],
  "components": [
    "Layout Reorderer"
  ],
  "environment": "IE7 (Win Vista, Win XP)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1747/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-10-30T13:31:47.000-0400",
      "body": "'screenshot-1' shows that the right border is no longer displayed properly\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-06-05T15:24:46.658-0400",
      "body": "This demo has been removed\n"
    }
  ]
}
---
right border of portlets in the right column do not display properly if a horizontal scroll bar appears

Steps to reproduce

1\) Open the uportal example from the daily build site:\
<http://build.fluidproject.org/fluid/sample-code/reorderer/portal/portal.html>

2\) shrink the window until a horizontal scroll bar appears

3\) move the scroll bar to the far right.

Notice that the right border is no longer display correctly

        