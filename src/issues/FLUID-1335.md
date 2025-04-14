---json
{
  "title": "FLUID-1335",
  "summary": "Drop target based on position of pointer instead of avatar",
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
  "date": "2008-08-28T08:35:05.000-0400",
  "updated": "2008-09-11T09:52:02.000-0400",
  "versions": [
    "0.5beta1"
  ],
  "fixVersions": [
    "0.5"
  ],
  "components": [
    "Image Reorderer",
    "Layout Reorderer",
    "Reorderer"
  ],
  "environment": "FF2, FF3, Opera 9.5, Safari 3 (Mac OS 10.5)\\\nFF2, FF3, IE6, IE7, Opera 9.5 (Win XP)\\\nFF3, IE7 (Win Vista)\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-1327/",
      "key": "FLUID-1327",
      "summary": "Reorderer - valid/invalid notice based on mouse loc, not avatar loc"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-1334/",
      "key": "FLUID-1334"
    }
  ],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1335/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1335/screenshot-2.jpg",
      "filename": "screenshot-2.jpg"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1335/screenshot-3.jpg",
      "filename": "screenshot-3.jpg"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1335/screenshot-4.jpg",
      "filename": "screenshot-4.jpg"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-08-28T08:36:43.000-0400",
      "body": "'screenshot-1' shows the location of the avatar to generate a drop target on the left side, when avatar is picked up from the left side.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-08-28T08:44:27.000-0400",
      "body": "'screenshot-2' shows the location of the avatar to generate a drop target on the left side, when avatar is picked up from the right side.\n"
    },
    {
      "author": "Simon Simon",
      "date": "2008-08-29T16:54:49.000-0400",
      "body": "In Reorderer.js, initDropTarget(), droppable(), the tolerance is set to \"pointer\", which causes the \"pointer\" (mouse position) to activate the drop target.\n\nI tested set tolerance to be \"intersect\", and it looks better.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-09-02T09:40:27.000-0400",
      "body": "'screenshot-3' is the same as 'screenshot-1' but shows the location of the pointer\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-09-02T09:41:35.000-0400",
      "body": "'screenshot-4' is the same as 'screenshot-2' but shows the location of the pointer\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2008-09-07T18:58:12.000-0400",
      "body": "We are no longer using JQuery UI droppable, and \"intersect\" whilst better was not perfect. We will need to handle the pointer-element offset ourselves for 0.5.\n"
    },
    {
      "author": "Paul Zablosky",
      "date": "2008-09-10T12:57:00.000-0400",
      "body": "The behaviour can also be demonstrated with the \"Sortable Vertical List\" and \"Sortable jQuery Tabs\" examples on the daily build page.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2008-09-10T17:17:04.000-0400",
      "body": "Fixed at revision 5510\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-09-11T09:52:02.000-0400",
      "body": "Verified fix using:\n\nFF2, FF3, Opera 9.5, Safari 3 (Mac OS 10.5)\\\nFF2, FF3, IE6, IE7, Opera 9.5 (Win XP)\\\nFF3, IE7 (Win Vista)\n"
    }
  ]
}
---
The drop target appears based on the location of the pointer instead of the location of the avatar. This means that since a user will likely pick up the avatar in different spots each time, the generation of the drop target may seem inconsistent.&#x20;

        