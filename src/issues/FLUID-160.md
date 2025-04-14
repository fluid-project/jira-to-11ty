---json
{
  "title": "FLUID-160",
  "summary": "Can't Shift-Tab out of the Reorderer",
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
  "reporter": "Colin Clark",
  "date": "2008-01-14T21:35:25.000-0500",
  "updated": "2008-09-18T09:30:01.000-0400",
  "versions": [
    "0.1",
    "0.3",
    "0.4beta1",
    "0.4",
    "0.5beta1"
  ],
  "fixVersions": [
    "0.5"
  ],
  "components": [
    "Reorderer"
  ],
  "environment": "FF2, FF3, Opera 9.5 (Mac OS 10.5)\\\nFF2, FF3, IE6, IE7, Opera 9.5 (Win XP)\\\nFF3, IE7 (Win Vista)\\\nFF3, IE6 (Win 2000)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-08-13T14:07:52.000-0400",
      "body": "Updated the environments the issue affects\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-09-10T11:11:28.000-0400",
      "body": "This especially problematic with nested reorderables. Take the uPortal example. If you shift-tab, you become stuck on an image in the lightbox portlet &#x20;\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2008-09-17T22:31:34.000-0400",
      "body": "Fixed at revision 5567.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-09-18T09:30:01.000-0400",
      "body": "Verified fix using:\n\nFF2, FF3, Opera 9.5 (Mac OS 10.5)\\\nFF2, FF3, IE6, Opera 9.5 (Win XP)\\\nFF3, IE7 (Win Vista)\\\nFF3, IE6 (Win 2000)\n"
    }
  ]
}
---
It's not possible to tab backwards out of the Reorderer using the Shift-Tab key. Going forward in the tab order works fine, but cycling backwards gets stuck in the Reorderer. This is likely due to the focus handler on the orderable container always re-focussing the selectable child upon focus.

        