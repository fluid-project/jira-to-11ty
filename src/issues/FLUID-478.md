---json
{
  "title": "FLUID-478",
  "summary": "Edge Case: In IE6 and 7, drop marker is wrong if mouse pointer is near edge of another thumbnail.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Duplicate",
  "assignee": "Michelle D'Souza",
  "reporter": "Jonathan Hung",
  "date": "2008-04-09T14:52:51.000-0400",
  "updated": "2008-04-28T14:08:28.000-0400",
  "versions": [
    "0.3"
  ],
  "fixVersions": [],
  "components": [
    "Image Reorderer"
  ],
  "environment": "WinXP IE6 and IE7\n",
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-479/",
      "key": "FLUID-479"
    }
  ],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-478/bad drop marker.gif",
      "filename": "bad drop marker.gif"
    }
  ],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2008-04-28T14:08:28.000-0400",
      "body": "This is the same issue as <https://fluidproject.atlassian.net/browse/FLUID-479#icft=FLUID-479>.&#x20;\n"
    }
  ]
}
---
Dragging a thumbnail will sometimes snap back to its original location despite a drop marker indicating it would appear next to another thumbnail. This is an edge case in IE6 and 7. Not reproducible on FF2 on WinXP.

To reproduce:

* grab Kiwano near the bottom-right corner.
* drag it downward to Kiwi
* slowly move mouse pointer down so that it is past Kiwi's thumbnail box and near Tamarillo
* Notice that the drop marker is indicating that it will drop next to Kiwi
* Releasing the mouse "snaps" Kiwano back to its original location.

Question:

* In this case should the drop marker appear next to Tamarillo instead of Kiwi because the mouse pointer position is closer to Tamarillo?
* Would it be easier to deal with these issues if the drag avatar is positioned centered to the mouse pointer?

        