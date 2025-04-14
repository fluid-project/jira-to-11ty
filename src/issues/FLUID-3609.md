---json
{
  "title": "FLUID-3609",
  "summary": "The uPortal layout reorderer example is broken for mouse reorderering",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Duplicate",
  "reporter": "Justin Obara",
  "date": "2010-04-06T12:40:17.000-0400",
  "updated": "2010-04-06T12:54:43.000-0400",
  "versions": [],
  "fixVersions": [
    "1.2"
  ],
  "components": [
    "Reorderer"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-3592/",
      "key": "FLUID-3592",
      "summary": "Cannot grab layout reorderable objects with mouse cursor"
    },
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-3593/",
      "key": "FLUID-3593",
      "summary": "Layout reorderer grabs the incorrect element with mouse"
    }
  ],
  "attachments": [],
  "comments": []
}
---
The uPortal layout reorderer example is broken for mouse reorderering

Steps to reproduce:

1\) Open the uPortal integration demo\
<http://build.fluidproject.org/infusion/integration-demos/uportal/html/portal.html>

2\) Using the mouse attempt to reorder the portlets

Notice that the portlets don't reorder. I have been able to move the weather portlet when trying to move the lightbox portlet.

Interestingly the layout reorderer  demo is wokring.\
<http://build.fluidproject.org/infusion/demos/reorderer/layoutReorderer/html/layoutReorderer.html>

        