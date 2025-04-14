---json
{
  "title": "FLOE-342",
  "summary": "The keyboardInput textfield captures browser shortcuts",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Duplicate",
  "reporter": "Justin Obara",
  "date": "2015-05-15T15:54:21.142-0400",
  "updated": "2015-11-12T14:42:59.877-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "First Discovery"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Cindy Li",
      "date": "2015-11-12T14:42:59.874-0500",
      "body": "This report has been copied to the GPII bug tracker: <https://issues.gpii.net/browse/GPII-1417> and all activities should be carried on there.\n"
    }
  ]
}
---
The keyboardInput textfield, used in the keyboard panel, will capture all inputs. This includes keyboard shortcuts used by the browser. However, it would be better to only capture text entry and to all these shortcuts to pass through to the browser.

Currently the reset short cut "ctrl-option/alt-r" does work, because this keybinding is evaluated before the keyboardInput captures the event.

        