---json
{
  "title": "FLOE-60",
  "summary": "Increasing text size makes the bottom button on authoring page inaccessible",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Cindy Li",
  "date": "2012-07-30T16:30:56.165-0400",
  "updated": "2012-08-16T13:55:33.888-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": "firefox, IE8 & 9\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLOE/FLOE-60/Inaccessible bottom button.jpeg",
      "filename": "Inaccessible bottom button.jpeg"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLOE/FLOE-60/Unscrollable submit step.jpeg",
      "filename": "Unscrollable submit step.jpeg"
    }
  ],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2012-07-30T16:48:08.131-0400",
      "body": "This is most likely related to the 'slider' that's used to switch between write, describe and submit. Probably relate to <https://www.assembla.com/spaces/iskme/tickets/677> (which is likely caused by the slider).\n"
    },
    {
      "author": "Alexey Novak",
      "date": "2012-08-16T13:55:33.886-0400",
      "body": "Should be fixed by Anastasia since any step is scrollable to the bottom, hence it is accessible.\n"
    }
  ]
}
---
Use authoring tool to edit an OER content, maximize UIO text size and line spacing, scroll down the page, the bottom button "Next step: Describe" is out of the screen and inaccessible, although it still can be accessed by tabbing onto.

In IE8, the last authoring step, submit page is unscrollable and only the top half page is viewable.

        