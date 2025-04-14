---json
{
  "title": "FLUID-1557",
  "summary": "Can't use the keyboard to move focus across an empty column",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2008-09-15T14:43:33.000-0400",
  "updated": "2008-09-17T10:09:46.000-0400",
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
  "environment": "FF2, FF3, Opera 9.5(Mac OS 10.5)\\\nFF2, FF3, Opera 9.5 (Win XP)\\\nFF3 (Win Vista)\\\nFF3 (Win 2000)\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-1556/",
      "key": "FLUID-1556",
      "summary": "Moving keyboard selection in the direction of an empty column causes portlet to lose focus"
    }
  ],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1557/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-09-15T14:44:37.000-0400",
      "body": "'screenshot-1' shows the set up of the columns. Notice that column 3 is empty.&#x20;\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2008-09-16T13:24:09.000-0400",
      "body": "Fixed at revision 5538\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-09-17T10:09:46.000-0400",
      "body": "FF2, FF3, Opera 9.5(Mac OS 10.5)\\\nFF2, FF3, Opera 9.5 (Win XP)\\\nFF3 (Win Vista)\n"
    }
  ]
}
---
Can't use the keyboard to move focus across an empty column. The empty column acts as a barrier to the keyboard navigation.

Steps to reproduce:

1\) Open the simple portlets manual test:\
<http://build.fluidproject.org/fluid/tests/fluid-tests/manual/portal/simple-portlets.html>

2\) Move all of the portlets from the third column into the empty column.

3\) Using the keyboard try to move focus from a portlet in the fourth column to one in the second column. Notice that you cannot move focus going left.

dev-iteration43

        