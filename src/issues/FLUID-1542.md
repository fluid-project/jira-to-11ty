---json
{
  "title": "FLUID-1542",
  "summary": "Springboards: Draggable elements move around static elmenents during addition and removal of elements in a column",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jacob Farber",
  "reporter": "Justin Obara",
  "date": "2008-09-10T14:51:44.000-0400",
  "updated": "2011-01-14T09:53:23.697-0500",
  "versions": [
    "0.5beta1"
  ],
  "fixVersions": [
    "0.5"
  ],
  "components": [
    "Demos",
    "Layout Reorderer",
    "Reorderer"
  ],
  "environment": "FF2, FF3, Opera 9.5, Safari 3 (Mac OS 10.5)\\\nFF2, FF3, IE6, IE7, Opera 9.5 (Win XP)\\\nFF3, IE7 (Win Vista)\\\nFF3, IE6 (Win 2000)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2008-09-15T16:43:59.000-0400",
      "body": "This one isn't a blocker, since I'm not sure we have any concrete examples that require this behaviour. If we can't fix it, let's remove it from the Springboards.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-09-18T17:09:37.000-0400",
      "body": "Also occurs in example 1 of the Reorderer Springboard\\\n<http://build.fluidproject.org/fluid/fluid-components/html/Reorderer.html>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-09-22T12:59:59.000-0400",
      "body": "Bug Parade: 0.5 release\n"
    },
    {
      "author": "Jacob Farber",
      "date": "2008-09-22T15:07:19.000-0400",
      "body": "Removed example due to it being reliant on legacy approach to locked portlets. \"Dead\" portlets should really be locked portlets.\n"
    }
  ]
}
---
Draggable elements move around static elmenents during addition and removal of elements in a column

Steps to reproduce:

1\) Open the Layout Customizer Springboard example from the daily build site\
<http://build.fluidproject.org/fluid/fluid-components/html/LayoutCustomizer.html>

2\) Look at the second example

3\) Move some draggable elements from Column A to the bottom of Column B.

4\) Move a draggable element from Column C to the top of Column B. Notice that it appears to be added to the bottom of Column B.

5\) Move a draggable element from Column C to Column B between the first  static element and the draggable element.&#x20;

6\) Move any of the top draggable elements from Column B to any other column. Notice that it appears to take it from the bottom.

It's hard to tell from this example which elements are moving where but I would guess that the lower draggable elements are moving up to take the place of the higher draggable element that was moved.

        