---json
{
  "title": "FLUID-1058",
  "summary": "Styling of portlet does not change to show it is moveable",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Herb Wideman",
  "date": "2008-07-29T11:31:17.000-0400",
  "updated": "2008-09-04T10:23:43.000-0400",
  "versions": [
    "0.1",
    "0.3",
    "0.4beta1",
    "0.4",
    "0.5beta1"
  ],
  "fixVersions": [],
  "components": [
    "Layout Reorderer"
  ],
  "environment": "FF2, FF3, Opera 9.5, Safari 3 (Mac OS 10.5)\\\nFF2, FF3, IE6, IE7, Opera 9.5 (Win XP)\\\nFF3, IE7 (Win Vista)\n",
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-486/",
      "key": "FLUID-486",
      "summary": "Styling of portlet does not change to show it is moveable"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-09-04T10:23:43.000-0400",
      "body": "This was an error in the test spec that was reintroduced when the test spec was updated. It has been corrected now\n"
    }
  ]
}
---
When you mouseover a moveable portlet title box the style of the portlet window does not change as required by testing specs.

        