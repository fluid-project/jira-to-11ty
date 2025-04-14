---json
{
  "title": "FLUID-1534",
  "summary": "Attempting to perform keyboard reordering causes portlet to become semi-transparent",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2008-09-10T11:06:23.000-0400",
  "updated": "2008-09-19T11:39:06.000-0400",
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
  "environment": "Opera 9.5 (Win XP)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1534/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-09-10T11:07:43.000-0400",
      "body": "'screenshot-1' shows that the portlet is semi-transparent\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-09-19T11:39:06.000-0400",
      "body": "Appears to have been fixed with some of the recent changes to the reorderer\n\nVerified using:\n\nOpera 9.5 (Win XP)&#x20;\n"
    }
  ]
}
---
Attempting to perform keyboard reordering causes portlet to become semi-transparent

Steps to reproduce:

1\) Open the uPortal example from the daily build site:\
<http://build.fluidproject.org/fluid/sample-code/reorderer/portal/portal.html>

2\) Tap the tab key until one of the portlets has focus.

3\) Use the arrow keys to move to the 'Bookmarks" portlet

4\) Press ctrl+(down arrow), notice that the portlet become semi-transparent

        