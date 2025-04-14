---json
{
  "title": "FLUID-1993",
  "summary": "In vertical list, dragged moveable item does not trigger page scrolling",
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
  "date": "2008-12-16T16:13:17.000-0500",
  "updated": "2011-01-14T09:53:27.239-0500",
  "versions": [
    "0.6"
  ],
  "fixVersions": [
    "0.6"
  ],
  "components": [
    "Demos",
    "Reorderer"
  ],
  "environment": "XP - Opera 9.5\n",
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-1801/",
      "key": "FLUID-1801",
      "summary": "Page won't scroll during DnD when reorderer contained in a fixed width container"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Daphne Ogle",
      "date": "2008-12-17T14:15:06.000-0500",
      "body": "I just found this same behavior on Mac OSX 10.5, Firefox 3.0 in the Reorder Springboard, <http://build.fluidproject.org/fluid/fluid-components/html/LayoutReorderer.html>\n\nNo automatic scrolling if I make the window small enough that not all boxes display in example 1 and then try to drag \"below the fold\".\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-12-19T09:08:23.000-0500",
      "body": "Daphne, the issue you are refering to is listed as <https://fluidproject.atlassian.net/browse/FLUID-1748#icft=FLUID-1748>\n"
    }
  ]
}
---
Dragging a moveable item in a vertical list below the browser window when the bottom section of the list is partially hidden does not scroll the window to reveal drop target until the list avatar is dropped. This violates a testing requrement:\
"The screen should scroll, revealing the drop targets which were off screen ".

        