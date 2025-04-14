---json
{
  "title": "FLUID-3592",
  "summary": "Cannot grab layout reorderable objects with mouse cursor",
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
  "reporter": "James Yoon",
  "date": "2010-04-05T10:05:04.000-0400",
  "updated": "2010-04-07T11:41:20.000-0400",
  "versions": [
    "1.1.2"
  ],
  "fixVersions": [
    "1.2"
  ],
  "components": [
    "Layout Reorderer"
  ],
  "environment": "Chrome 4, FF 3.6, FF 3, IE 8, IE 7, IE 6 (Win XP)\\\nFF 3.6, IE 8 (Win 7)\\\nSafari 4 (Mac OS 10.5)\\\nFF 3.6, Safari 4 (Mac OS 10.6)\n",
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-3609/",
      "key": "FLUID-3609"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-3593/",
      "key": "FLUID-3593",
      "summary": "Layout reorderer grabs the incorrect element with mouse"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2010-04-06T13:22:57.000-0400",
      "body": "Fixed at revision 9806. Failure in core framework during <https://fluidproject.atlassian.net/browse/FLUID-3527#icft=FLUID-3527> for jQuery version update.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-04-07T11:41:20.000-0400",
      "body": "I've reviewed Antranig's fix for this issue at r9806 and it looks good. +1 for inclusion in Infusion 1.2\n"
    }
  ]
}
---
<http://build.fluidproject.org/infusion/integration-demos/uportal/html/portal.html>

Try grabbing "Bookmarks Portlet", "Calendar", or "My Weather"

        