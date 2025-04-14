---json
{
  "title": "FLUID-6007",
  "summary": "Image reorderer - fruits will disappear when reordered a certain way",
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
  "date": "2016-10-27T15:52:50.447-0400",
  "updated": "2024-07-23T13:05:00.983-0400",
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
      "type": "Related to",
      "url": "/browse/FLUID-6004/",
      "key": "FLUID-6004",
      "summary": "Grid reorderer - letters will disappear when reordered a certain way"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-6070/",
      "key": "FLUID-6070"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2024-07-23T13:05:00.820-0400",
      "body": "Internet Explorer is no longer supported\n"
    }
  ]
}
---
[For the Image reorderer](http://build.fluidproject.org/infusion/demos/reorderer/imageReorderer/), when using the mouse, after moving the dragonfruit down to the far right of the list (replacing the grapes), then putting the grapes back in it's original image, the dragonfruit will disappear

1\. Close the overview panel\
2\. Drag the dragonfruit from the far left to the far right, where the grapes are\
3\. Drag the grapes to it's starting place in the line, where the dragonfruit is

Notice that the dragonfruit disappears entirely

        