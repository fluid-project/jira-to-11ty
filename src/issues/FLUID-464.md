---json
{
  "title": "FLUID-464",
  "summary": "portlet avatar missing / distracting blue box appears when moving portlet",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Duplicate",
  "reporter": "Herb Wideman",
  "date": "2008-04-07T15:42:07.000-0400",
  "updated": "2008-04-21T12:55:11.000-0400",
  "versions": [
    "0.3"
  ],
  "fixVersions": [
    "0.3"
  ],
  "components": [
    "Reorderer"
  ],
  "environment": "Win XP, IE7\n",
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-395/",
      "key": "FLUID-395",
      "summary": "Change avatar to small grey rectangle, as in mockups"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2008-04-21T12:55:11.000-0400",
      "body": "Duplicates <https://fluidproject.atlassian.net/browse/FLUID-487#icft=FLUID-487>.\n"
    }
  ]
}
---
When dragging a portlet on\
<http://build.fluidproject.org/sakai-imagegallery-tool/sample-code/reorderer/abstract/portal/portlets.html>\
a solid blue rectangle appears a few inches to the right, well away from the "real" location of the box being dragged. Purpose unclear for this - presumably it is the missing avatar for the moving portlet? - it miscues user into thinking the location of the dragged protlet is further to the right.

        