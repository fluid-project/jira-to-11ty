---json
{
  "title": "FLUID-1537",
  "summary": "Moving a portlet in any direction will put it into the other column, if it is the last portlet in the column",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2008-09-10T12:01:47.000-0400",
  "updated": "2008-09-11T09:17:12.000-0400",
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
  "environment": "FF2, FF3 (Mac OS 10.5)\\\nFF2, FF3, IE6, IE7 (Win XP)\\\nFF3, IE7 (Win Vista)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2008-09-10T14:34:42.000-0400",
      "body": "Fixed at revision 5503\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-09-11T09:17:12.000-0400",
      "body": "Verified fix using:\n\nFF2, FF3 (Mac OS 10.5)\\\nFF3, IE7 (Win Vista)\n"
    }
  ]
}
---
Moving a portlet in any direction will put it into the other column, if it is the last portlet in the column.

Steps to reproduce:

1\) Open the uPortal example from the daily build site:\
<http://build.fluidproject.org/fluid/sample-code/reorderer/portal/portal.html>

2\) Using the keyboard move all of the portlets from the right hand column to the left, except for one.

3\) Notice that for the last portlet in the right hand column you can move it in any direction to have it move into the left hand column

        