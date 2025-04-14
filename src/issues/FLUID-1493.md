---json
{
  "title": "FLUID-1493",
  "summary": "Drop target missing right border",
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
  "date": "2008-09-09T10:26:02.000-0400",
  "updated": "2008-09-11T10:21:14.000-0400",
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
  "environment": "IE6 (Win XP)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1493/FLUID-1507_1493.patch",
      "filename": "FLUID-1507_1493.patch"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1493/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-09-09T10:27:09.000-0400",
      "body": "'screenshot-1' shows the right border of the drop target missing\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-09-11T10:21:14.000-0400",
      "body": "Verified fix using:\n\nIE6 (Win XP)\n"
    }
  ]
}
---
Drop target missing right border

Steps to reproduce:

1\) Open the uPortal example from the daily build site:\
<http://build.fluidproject.org/fluid/sample-code/reorderer/portal/portal.html>

2\) Move a portlet so that a drop target in the left hand column is visible.&#x20;

Notice that the right border of the drop target is missing

        