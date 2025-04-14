---json
{
  "title": "FLUID-1994",
  "summary": "Improper keyboard movement of sortable item over non-sortable item in vertical list",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Herb Wideman",
  "date": "2008-12-16T16:26:23.000-0500",
  "updated": "2011-01-14T09:53:27.037-0500",
  "versions": [
    "0.6beta1",
    "0.6",
    "0.7",
    "0.8",
    "1.0",
    "1.1",
    "1.1.1"
  ],
  "fixVersions": [],
  "components": [
    "Demos",
    "Reorderer"
  ],
  "environment": "FF2, FF3, Opera 9.6, Safari 3.2 (Mac OS 10.5)\\\nSafari 3.2 (Mac OS 10.4)\\\nFF2, FF3, IE6, IE7, IE8, Opera 9.6 (Win XP)\\\nFF3, IE7, IE8 (Win Vista)\\\nIE6 (Win 2000)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-11-04T14:56:43.000-0500",
      "body": "No longer have this example\n"
    }
  ]
}
---
When moving a sortable item in a vertical list over one or more contiguous non-sortable items with the keyboard (ctrl-uparrow/downarrow), the item is moved up or down one position beyond where it should be - that is, not above or below the final contiguous non-sortable item, but above or below the sortable item that is beyond the final contiguous non-sortable item.&#x20;

(Tested at <http://build.fluidproject.org/fluid/fluid-components/html/Reorderer.html#>)

        