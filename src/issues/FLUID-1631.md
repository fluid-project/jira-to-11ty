---json
{
  "title": "FLUID-1631",
  "summary": "Springboards: \"Not sortable\" elements are also not selectable",
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
  "date": "2008-09-26T11:41:09.000-0400",
  "updated": "2011-01-14T09:53:23.081-0500",
  "versions": [
    "0.5beta1",
    "0.5"
  ],
  "fixVersions": [],
  "components": [
    "Demos",
    "Reorderer"
  ],
  "environment": "FF2, FF3, Opera 9.5, Safari 3 (Mac OS 10.5)\\\nFF2, FF3, IE6, IE7, Opera 9.5 (Win XP)\\\nFF3, IE7 (Win Vista)\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-1633/",
      "key": "FLUID-1633"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2008-09-26T12:53:12.000-0400",
      "body": "The issue is perhaps one of documentation. If there are items that are selectable but not movable the 'selectables' and 'dropTargets' selectors must be specified to the reorderer.&#x20;\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2008-09-26T14:03:50.000-0400",
      "body": "Reviewed and tested Michelle's check in (#5694)\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-09-26T14:27:28.000-0400",
      "body": "Verified fix using:\n\nFF2, FF3, Opera 9.5, Safari 3 (Mac OS 10.5)\\\nFF2, FF3, IE6, IE7, Opera 9.5 (Win XP)\\\nFF3, IE7 (Win Vista)\n"
    }
  ]
}
---
Example 1 of the reorderer springboads "Not sortable" elements are also not selectable

Steps to reproduce:

1\) Open the Reorderer Springboards from the daily build site:\
<http://build.fluidproject.org/fluid/fluid-components/html/Reorderer.html>

2\) Press the tab key until one of the "I'm Sortable" list items, from example 1, has focus

3\) Using the keyboard attempt to arrow to a "Not Sortable" item

Notice that the "Not sortable" items are also not selectable

        