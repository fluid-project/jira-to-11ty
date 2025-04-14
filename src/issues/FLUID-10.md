---json
{
  "title": "FLUID-10",
  "summary": "Images don't fully scroll into view when selected",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Shaw-Han Liem",
  "reporter": "Anastasia Cheetham",
  "date": "2007-06-27T11:26:35.000-0400",
  "updated": "2008-04-28T15:28:10.000-0400",
  "versions": [],
  "fixVersions": [
    "0.3"
  ],
  "components": [
    "Image Reorderer"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-225/",
      "key": "FLUID-225"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2008-04-07T13:35:44.000-0400",
      "body": "We now focus on the thumbnail rather then the link and focusing on the thumbnail scrolls the entire image into view.\n"
    }
  ]
}
---
When an item gets 'focus' (i.e. the arrow keys are used to select it, or the mouse is used to click on it) it scrolls into view if necessary, but it only scrolls enough so that the actual html element that has focus (in our case, the link attached to the caption) is in view. The rest of the thumb (above or below it, depending on the direction of the scroll) remains out of sight.

It would be nice if we could find some way to ensure that the entire thumb scrolls into full view.

        