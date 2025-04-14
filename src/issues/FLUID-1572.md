---json
{
  "title": "FLUID-1572",
  "summary": "Pointer is always an arrow while dragging sortable jQuery tab, using IE6",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2008-09-16T12:50:11.000-0400",
  "updated": "2010-12-08T15:42:51.155-0500",
  "versions": [
    "0.5beta1",
    "0.5",
    "0.6beta1",
    "0.6",
    "0.7",
    "0.8",
    "1.0",
    "1.1",
    "1.1.1",
    "1.2"
  ],
  "fixVersions": [
    "1.3"
  ],
  "components": [
    "Reorderer"
  ],
  "environment": "IE6 (Win 2000)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1572/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-09-16T12:50:43.000-0400",
      "body": "'screenshot-1' shows the pointer as an arrow when it should be a move cursor\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2010-12-08T15:42:51.141-0500",
      "body": "This bug is no longer relevant because demo has been removed. See <https://fluidproject.atlassian.net/browse/FLUID-3731#icft=FLUID-3731>.\n"
    }
  ]
}
---
Pointer is always an arrow while dragging sortable jQuery tab

Steps to reproduce:

1\) Open the sortable jQuery tabs demo from the daily build site:

2\) Using the mouse drag one of the sortable jQuery tabs. Notice that the pointer is an arrow while dragging. It should be a hand&#x20;

        