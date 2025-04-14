---json
{
  "title": "FLUID-4437",
  "summary": "Focus styling persists after moving focus from Reorderer",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Open",
  "reporter": "Justin Obara",
  "date": "2011-09-12T12:14:10.049-0400",
  "updated": "2021-07-12T14:43:14.693-0400",
  "versions": [
    "1.4",
    "1.5",
    "2.0",
    "3.0"
  ],
  "fixVersions": [],
  "components": [
    "Image Reorderer",
    "Layout Reorderer",
    "Reorderer"
  ],
  "environment": "Safari 5.1 ( Mac OS 10.6 ), Firefox 49 (Linux)\n",
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-4455/",
      "key": "FLUID-4455"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-3924/",
      "key": "FLUID-3924",
      "summary": "Focus styling persists after first reorder in grid reorderer"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Simon Bates",
      "date": "2016-10-26T17:38:09.095-0400",
      "body": "This issue is also present on the Layout Reorderer.\n\nTo reproduce:\n\n* Open <http://build.fluidproject.org/infusion/demos/reorderer/layoutReorderer/>\n* Move an item with the mouse\n* Move focus with tab\n\nExpected:\n\n* Focus indicator to be removed from the previously moved item\n\nActual:\n\n* The focus indicator persists even though the item is no longer focused\n"
    },
    {
      "author": "Simon Bates",
      "date": "2016-10-26T17:41:36.775-0400",
      "body": "I've added \"2.0\" to the affected versions and generalized the title from \"List Reorderer\" to \"Reorderer\".\n"
    },
    {
      "author": "Justin Obara",
      "date": "2021-07-12T14:43:14.693-0400",
      "body": "This doesn't seem to happen if selection is moved, but the items not reordered.\n"
    }
  ]
}
---
Steps to Reproduce:

1\) Open the List Reorderer demo

2\) Using the keyboard or the mouse reorder the items

3\) Move focus away from the list reorderer. Notice that the focus style remains on the last selected reorderable item.

        