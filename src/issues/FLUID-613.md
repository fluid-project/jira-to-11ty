---json
{
  "title": "FLUID-613",
  "summary": "Nested reorderers - keyboard movement in inner reorderer skips items",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Michelle D'Souza",
  "reporter": "Michelle D'Souza",
  "date": "2008-05-21T09:57:16.000-0400",
  "updated": "2008-09-08T10:05:13.000-0400",
  "versions": [],
  "fixVersions": [
    "0.5"
  ],
  "components": [
    "Reorderer"
  ],
  "environment": "FF2, FF3, (Mac OS 10.5)\\\nFF2, FF3 (Win XP)\\\nFF3, IE7 (Win Vista)\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-1124/",
      "key": "FLUID-1124"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2008-09-07T18:03:31.000-0400",
      "body": "Drop Manager, Dom Permutation work merged back into trunk at revision 5476\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-09-08T09:18:10.000-0400",
      "body": "Appears to be fixed. Assigning it to Michelle to close, as she was the reporter.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2008-09-08T10:05:13.000-0400",
      "body": "This issue is fixed, however, moving portlets with the keyboard in the uPortal example no longer works correctly. Justin is looking into the particulars and will file a new bug.&#x20;\n"
    }
  ]
}
---
When an element containing a reorderer is moved to a different width space, the keyboard movement in the inner reorderer is incorrect. It appears that when moving an item, it consistently skips over the adjacent item and moves the item two spaces instead of one.&#x20;

To recreate use the uPortal mockup example that has a lightbox portlet.

1\. Tab to the outer reorderer (the portlets)\
2\. Arrow to the lightbox portlet\
3, Move the lightbox portlet to the other column\
4\. Tab to the inner reorderer (the thumbnails)\
5\. Move a thumbnail right. \
6\. Notice how the thumbnail moves over two spaces instead of one.

        