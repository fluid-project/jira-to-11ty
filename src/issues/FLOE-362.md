---json
{
  "title": "FLOE-362",
  "summary": "When switching to next set of icons a checkmark remains visible",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Jonathan Hung",
  "date": "2015-05-28T13:53:13.954-0400",
  "updated": "2015-05-28T16:09:25.536-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": "Safari\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLOE/FLOE-362/Screenshot 3 - Safari.jpeg",
      "filename": "Screenshot 3 - Safari.jpeg"
    }
  ],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2015-05-28T16:09:20.653-0400",
      "body": "Fixed with <https://fluidproject.atlassian.net/browse/FLOE-352#icft=FLOE-352>. It seems that by adding some text, the problem is gone.\n"
    }
  ]
}
---
When you switch from the first set of icons to the 2nd set by pressing "Next" button, a green checkmark is visible floating over an empty space.

This happens only in Safari.

The checkmark disappears if the tooltip text is repositioned by moving the mouse slightly, or by switching focus to something else using keyboard.

This may be fixed with <https://fluidproject.atlassian.net/browse/FLOE-352#icft=FLOE-352>.

        