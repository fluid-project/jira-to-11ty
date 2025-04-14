---json
{
  "title": "FLUID-3893",
  "summary": "List reorderer breaks with firefox accessibility cursor",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "reporter": "heidi valles",
  "date": "2010-12-10T15:25:33.124-0500",
  "updated": "2016-12-19T17:41:17.206-0500",
  "versions": [
    "1.2.1",
    "1.3",
    "1.4",
    "1.5"
  ],
  "fixVersions": [],
  "components": [
    "Reorderer"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2011-01-11T12:47:08.782-0500",
      "body": "It looks like this is happening because after reaching the end of the text on the line it wraps to the next line, and places the cursor ahead of the next list item. When this happens the reorderable element no longer has focus. Pressing tab again will restore focus and allow reorderering.\n"
    }
  ]
}
---
In firefox, go to preferences, advanced, and check "always use the cursor keys to navigate" under accessibility preferences.

In list reorderer demo (<http://build.fluidproject.org/infusion/demos/reorderer/listReorderer/>) tab to the list, then move down arrow to item #4, use right arrow all the way to the end. This breaks the reorderer until you hit tab again. There are variations of cursor movement that also break it.... would take time to figure out what exactly is affecting it.

        