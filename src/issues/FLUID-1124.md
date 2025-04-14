---json
{
  "title": "FLUID-1124",
  "summary": "Can't move element to the last position in a nested reorderer",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2008-08-11T11:42:28.000-0400",
  "updated": "2008-09-08T09:13:19.000-0400",
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
  "environment": "FF2, FF3, Safari 3 (Mac OS 10.5)\\\nFF2, FF3 (Win XP)\\\nFF3 (Win Vista)\n",
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-856/",
      "key": "FLUID-856",
      "summary": "Nested Reorderers: Moving an 'outer' orderable causes 'inner' Reorderer to be created a second time."
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-613/",
      "key": "FLUID-613",
      "summary": "Nested reorderers - keyboard movement in inner reorderer skips items"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2008-08-11T12:12:07.000-0400",
      "body": "These issues may have the same cause.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2008-08-11T12:12:48.000-0400",
      "body": "May be related.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2008-09-07T18:03:13.000-0400",
      "body": "Drop Manager, Dom Permutation work merged back into trunk at revision 5476\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-09-08T09:13:19.000-0400",
      "body": "Verified fix using:\n\nFF2, FF3 (Mac OS 10.5)\\\nFF2, FF3 (Win XP)\\\nFF3 (Win Vista)\n"
    }
  ]
}
---
When attempting to drag an element in a nested reorderer (after having moved it's parent) to the last position, the element goes to the second last position instead.

Steps to reproduce.

1\) Open the uPortal demo example from the daily build site:\
<http://build.fluidproject.org/fluid/sample-code/reorderer/portal/portal.html>

2\) Move the Lightbox portlet to the right side

3\) Attempt to drag and drop an image in the last position, notice that it moves to the second last position instead

Note that this issue doesn't occur if you do not move the Lightbox portlet first.&#x20;

If you make the last drop target visible but move away from it and then drop, you are able to get the image into the last position. This workaround is due to another issue (see <https://fluidproject.atlassian.net/browse/FLUID-1122#icft=FLUID-1122>).&#x20;

        