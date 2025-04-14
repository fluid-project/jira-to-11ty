---json
{
  "title": "FLUID-6004",
  "summary": "Grid reorderer - letters will disappear when reordered a certain way",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-issue",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Kobi Orgil",
  "date": "2016-10-27T14:40:36.920-0400",
  "updated": "2024-07-23T13:03:51.311-0400",
  "versions": [
    "2.0"
  ],
  "fixVersions": [],
  "components": [
    "Reorderer"
  ],
  "environment": "IE11, Windows 7\n",
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-5715/",
      "key": "FLUID-5715",
      "summary": "Grid Reorderer locks up on IE11"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-6007/",
      "key": "FLUID-6007"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-6012/",
      "key": "FLUID-6012"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-6070/",
      "key": "FLUID-6070"
    }
  ],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-6004/gridReorder1.PNG",
      "filename": "gridReorder1.PNG"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-6004/gridReorder2.png",
      "filename": "gridReorder2.png"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-6004/gridReorder3.png",
      "filename": "gridReorder3.png"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-6004/gridReorder4.png",
      "filename": "gridReorder4.png"
    }
  ],
  "comments": [
    {
      "author": "Kobi Orgil",
      "date": "2016-10-27T14:58:26.901-0400",
      "body": "PICTURES\\\ngridReorder1 : This is what the grid will look like when it is first opened\\\ngridReorder2 : This is what it should look like when you drag the A to the bottom right corner, to replace the C\\\ngridReorder3 : This is what it should look like when you drag the C back to it's scarting location, the bottom right corner\\\ngridReorder4 : This is what the final result should be; the C moving to the middle instead of the bottom right corner, and the A disappearing entierly\n"
    },
    {
      "author": "sushant mehta",
      "date": "2018-03-22T10:50:10.146-0400",
      "body": "works perfectly fine for me @Kobi Orgil\n"
    },
    {
      "author": "Justin Obara",
      "date": "2024-07-23T13:03:51.093-0400",
      "body": "Internet Explorer is no longer supported\n"
    }
  ]
}
---
[For the Grid Reorderer](http://build.fluidproject.org/infusion/demos/reorderer/gridReorderer/), when using the mouse, after moving the A down to the starting place of the C, then putting the C back in its starting place, the A will disappear.

1\. Close the overview panel\
2\. Drag A from top right corner of puzzle to bottom right of puzzle, where the C is\
3\. Drag C back to it's starting position, where the A is

Notice that the A disappears from the puzzle

        