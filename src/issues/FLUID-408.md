---json
{
  "title": "FLUID-408",
  "summary": "Thumbnail container is not a valid drop target",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "Michelle D'Souza",
  "reporter": "Justin Obara",
  "date": "2008-03-31T14:47:01.000-0400",
  "updated": "2008-04-28T14:12:35.000-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Image Reorderer"
  ],
  "environment": "Firefox 2 (Mac OS 10.5), IE6 (Win XP SP2)\n",
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-448/",
      "key": "FLUID-448"
    }
  ],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-408/Drop target .jpg",
      "filename": "Drop target .jpg"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-408/No Drop Target.jpg",
      "filename": "No Drop Target.jpg"
    }
  ],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2008-03-31T16:45:28.000-0400",
      "body": "I was unable to recreate this - can you give me more information about when you see this behaviour?\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-03-31T22:09:17.000-0400",
      "body": "This image (Drop target) shows the drop target... (unfortunately the pointer does not show with a print screen, but would have been to the side of the drop target).\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-03-31T22:11:10.000-0400",
      "body": "This image (No Drop Target) shows the drop target missing. (unfortunately the pointer does not show with a print screen, but would have been directly over top of where the drop target should have appeared).\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2008-04-01T10:21:53.000-0400",
      "body": "Thanks for clarifying Justin. The drop target is disappearing because the mouse is no longer over a valid drop target. In the case of the Lightbox, the thumbnails are the drop targets, not the container that they are in. When the mouse moves off a thumbnail and is over the container the thumbnail being dragged can no longer be dropped. I'm sure this is not the desired behaviour.&#x20;\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2008-04-28T14:12:35.000-0400",
      "body": "This is no longer the case. Now the drop target still appears but the thumbnail won't be dropped there. This is filed as <https://fluidproject.atlassian.net/browse/FLUID-479#icft=FLUID-479>.&#x20;\n"
    }
  ]
}
---
While dragging an element, the drop target disappears and the element cannot be dropped when the mouse pointer is hovering over the drop targets location.&#x20;

        