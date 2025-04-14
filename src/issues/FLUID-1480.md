---json
{
  "title": "FLUID-1480",
  "summary": "Can't pick up and put back down a portlet which is the only moveable portlet in a column",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2008-09-08T10:57:57.000-0400",
  "updated": "2008-09-10T09:13:07.000-0400",
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
  "environment": "FF2, FF3, Opera 9.5, Safari 3 (Mac OS 10.5)\\\nFF2, FF3 (Win XP)\\\nFF3(Win Vista)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1480/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1480/screenshot-2.jpg",
      "filename": "screenshot-2.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-09-08T10:58:45.000-0400",
      "body": "'screenshot-1' shows the drop target in the right column instead of under the locked portlet.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-09-08T11:01:25.000-0400",
      "body": "It appears that you can drop it back into the same column and the drop target will appear there, if you drag the portlet over the purple vertical bar on the left side of the screen. This is the case even if the portlet is the last portlet in the right hand column.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2008-09-08T16:45:17.000-0400",
      "body": "Fixed at revision 5488.\n\nWe have had to complicate the representation within the GeometricManager somewhat since we are stuck with the possibility that, at the whim of the user, the \"moving object\" on a drag start may be either part or not part of the document. Since \"the document is the only durable reality\" we must respect this ambiguity and still find somewhere to drop even if the positions which the \"layout model\" insists should exist are not currently geometrically within the document.&#x20;\n\nThis actually brings us one step closer back to being implement the \"full permissions model\" in any case since we have had to split the drop target model into having an explicit target region for each half of the drop zone.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-09-09T08:52:02.000-0400",
      "body": "This issue  seems to only have been resolved for the case when there is a locked portlet in the column. It is still an issue if there is only one moveable portlet in the column and you try to pick it up and put it back in the same place.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-09-09T08:53:42.000-0400",
      "body": "'screenshot-2' shows the case where there is only 1 portlet in a column and you try to pick up and put it back where it was. Notice the drop target is below the locked portlet in column 1 instead of under the avatar in column 2\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2008-09-10T09:06:03.000-0400",
      "body": "Final parts of this issue fixed at rev 5494, possibly at some architectural cost\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-09-10T09:13:07.000-0400",
      "body": "Verified fix using:\n\nFF2, FF3, Opera 9.5, Safari 3 (Mac OS 10.5)\\\nFF2, FF3 (Win XP)\\\nFF3(Win Vista)\n"
    }
  ]
}
---
Can't pick up and put back down a portlet which is the only moveable portlet in a column. Need to put it in another column first and then put back

Steps to reproduce:

1\) Open the uPortal example from the daily build site\
<http://build.fluidproject.org/fluid/sample-code/reorderer/portal/portal.html>

2\) Pick up the lightbox portlet

3\) Attempt to place it down in the same location that it originated from. Notice that no drop target appears and you have to place it in the other column.

        