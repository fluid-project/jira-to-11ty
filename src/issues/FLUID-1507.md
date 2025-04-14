---json
{
  "title": "FLUID-1507",
  "summary": "The drop target is wider than the column it is in",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jacob Farber",
  "reporter": "Justin Obara",
  "date": "2008-09-09T10:35:59.000-0400",
  "updated": "2008-09-11T09:31:01.000-0400",
  "versions": [
    "0.5beta1"
  ],
  "fixVersions": [
    "0.5"
  ],
  "components": [
    "Layout Reorderer",
    "Reorderer"
  ],
  "environment": "IE7 (Win XP, Win Vista)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1507/FLUID-1507_1493.patch",
      "filename": "FLUID-1507_1493.patch"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1507/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-09-09T10:37:19.000-0400",
      "body": "'screenshot-1' shows that drop target is larger than the column it is in. Notice that it sticks out past the portlets above and below it\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-09-11T09:31:01.000-0400",
      "body": "Verified fix using:\n\nIE7 (Win XP, Win Vista)\n"
    }
  ]
}
---
The drop target is wider than the column it is in

Steps to reproduce:

1\) Open the uPortal example from the daily build site:\
<http://build.fluidproject.org/fluid/sample-code/reorderer/portal/portal.html>

2\) Drag a portal so that a drop target in the left column is displayed.

Notice that the drop target appears wider than the column it is in.

        