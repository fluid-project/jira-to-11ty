---json
{
  "title": "FLUID-563",
  "summary": "Flickering drop marker when drop marker is large.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Michelle D'Souza",
  "reporter": "Michelle D'Souza",
  "date": "2008-04-30T15:09:54.000-0400",
  "updated": "2008-06-23T17:43:45.000-0400",
  "versions": [],
  "fixVersions": [
    "0.3"
  ],
  "components": [
    "Layout Reorderer"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-407/",
      "key": "FLUID-407",
      "summary": "Nested drop targets sometimes display the drop marker in the wrong place."
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2008-05-14T15:16:35.000-0400",
      "body": "Fixed in commit 4949 by change the drop marker strategy.\n"
    }
  ]
}
---
The problem can be seen in the portalWithAvatarClone example. <http://build.fluidproject.org/sakai-imagegallery-tool/sample-code/reorderer/portal/portalWithAvatarClone.html>

To reproduce:

1\. pick up the 'calendar' portlet\
2\. hover over the title bar of the 'lightbox' portlet\
3\. be annoyed and confused by the flickering drop marker

Hovering over the title bar (or in fact over the top half of the portlet) causes a drop marker to be inserted above the portlet being hovered over. The insertion of the drop marker causes the rest of the items to move down accordingly. Drop markers are currently not considered valid drop targets so once the drop marker has been inserted, the mouse pointer is effectively hovering over a space between portlets. The space between portlets is actually the container that holds all of the items. When dropping directly onto the container, items are placed at the end so in this case when the mouse pointer is hovering over the drop marker, the drop marker is removed from its current location and placed at the bottom of the container. Which, of course means that the mouse pointer is again hovering over the title bar and the cycle starts again.&#x20;

The obvious solution is to make drop markers valid drop targets.&#x20;

dev-iteration33

        