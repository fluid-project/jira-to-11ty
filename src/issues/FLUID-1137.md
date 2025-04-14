---json
{
  "title": "FLUID-1137",
  "summary": "Runtime Error when dragging a nested reorderable",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2008-08-13T08:54:11.000-0400",
  "updated": "2008-09-09T09:09:50.000-0400",
  "versions": [
    "0.4",
    "0.5beta1"
  ],
  "fixVersions": [
    "0.5"
  ],
  "components": [
    "Layout Reorderer"
  ],
  "environment": "IE7 (Win Vista)\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-1140/",
      "key": "FLUID-1140",
      "summary": "Portlet avatar freezes when dropped while the pointer is just higher than the drop marker"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2008-09-07T22:17:02.000-0400",
      "body": "Fixed with \"Geometric Manager\" @ rev 5476\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-09-09T09:09:50.000-0400",
      "body": "Verified fix using:\n\nIE7 (Win Vista)\n"
    }
  ]
}
---
When you attempt a drag and drop operation on a portlet with a nested reorderable, it throws a runtime error.

Steps to reproduce:

1\) Open the uPortal demo from the daily build site:\
<http://build.fluidproject.org/fluid/sample-code/reorderer/portal/portal.html>

2\) Attempt to drag and drop the lightbox portlet. Notice that a Runtime Error occurs

Runtime Error\
\--------------------
\
Error: 'columns\[...].children' is null or not an object\
Line: 315\
File: ModuleLayout.js

If you place the avatar perfectly in the drop target you get the following error

Error: Object doesn't support this property or method\
Line: 157\
File: Fluid.js

dev-iteration42

        