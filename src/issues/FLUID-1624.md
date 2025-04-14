---json
{
  "title": "FLUID-1624",
  "summary": "List number of moved item disappears while reorderering a sortable list",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jacob Farber",
  "reporter": "Justin Obara",
  "date": "2008-09-25T16:43:35.000-0400",
  "updated": "2011-01-14T09:53:23.891-0500",
  "versions": [
    "0.5beta1",
    "0.5",
    "0.6beta1"
  ],
  "fixVersions": [
    "0.6"
  ],
  "components": [
    "Demos",
    "Reorderer"
  ],
  "environment": "FF3, Safari 3.1 (Mac OS 10.4)\\\nFF2, FF3, Opera 9.5, Safari 3 (Mac OS 10.5)\\\nFF2, FF3, IE6, IE7, Opera 9.5 (Win XP)\\\nFF3, IE7 (Win Vista)\\\nFF3, IE6 (Win 2000)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1624/FLUID-1624.patch",
      "filename": "FLUID-1624.patch"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1624/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-09-25T17:01:04.000-0400",
      "body": "'screenshot-1' shows the list number missing while performing drag and drop\n"
    },
    {
      "author": "Jacob Farber",
      "date": "2008-10-30T16:15:16.000-0400",
      "body": "Since its now dis-associated with its parent markup blob, perhaps we could force the value to show by using the \"value\" attribute?\n"
    },
    {
      "author": "Jacob Farber",
      "date": "2008-10-31T09:44:22.000-0400",
      "body": "The list item's number was blending into the white background. This is patch has some slight color tweaks to enhance the effect.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-11-03T09:46:34.000-0500",
      "body": "Verified fix using:\n\nFF2 (Mac OS 10.5)\\\nFF3(Win XP)\\\nIE7 (Win Vista)\n"
    }
  ]
}
---
List number of moved item disappears while reorderering a sortable list

Steps to reproduce:

1\) Open the Reorderer Springboard example from the daily build site:\
<http://build.fluidproject.org/fluid/fluid-components/html/Reorderer.html>

2\) In example 1 move any of the sortable list items

Notice that the number for the item you moved disappears while you are reordering it

        