---json
{
  "title": "FLUID-953",
  "summary": "Two avatars are displayed if screen scrolls at start of DnD in a nested reorderable, using IE",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "assignee": "Colin Clark",
  "reporter": "Justin Obara",
  "date": "2008-07-21T14:55:03.000-0400",
  "updated": "2008-08-28T10:05:00.000-0400",
  "versions": [
    "0.1",
    "0.3",
    "0.4beta1",
    "0.4"
  ],
  "fixVersions": [],
  "components": [
    "Layout Reorderer",
    "Reorderer"
  ],
  "environment": "IE6, IE7 (Win XP)\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-856/",
      "key": "FLUID-856",
      "summary": "Nested Reorderers: Moving an 'outer' orderable causes 'inner' Reorderer to be created a second time."
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-952/",
      "key": "FLUID-952",
      "summary": "Avatar not under pointer if element is picked up while partly off screen,  using IE"
    }
  ],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-953/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-07-21T14:57:02.000-0400",
      "body": "'screenshot-1' shows the two avatars\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-08-28T10:05:00.000-0400",
      "body": "may have been resolved with one of the recent updates to reorderer\n"
    }
  ]
}
---
When dragging a nested reorderable element from a portlet that has been moved, two avatars are displayed if the screen scrolls when DnD started.

Steps to reproduce:

1\) Open the uPortal example from the daily build site:\
<http://build.fluidproject.org/fluid/sample-code/reorderer/portal/portal.html>

2\) Drag the lightbox portlet from the left to the right column

3\) Drag one of the top elements in the nested lightbox. Drag the avatar over whitespace on the screen. Notice that there are two avatars.

        