---json
{
  "title": "FLUID-6661",
  "summary": "Default reorder keyboard shortcut conflicts",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "reporter": "Justin Obara",
  "date": "2021-07-07T11:06:04.408-0400",
  "updated": "2021-07-14T10:04:21.824-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Image Reorderer",
    "Layout Reorderer",
    "Reorderer"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2021-07-07T11:06:51.526-0400",
      "body": "On macOS you can use command-control-arrow keys in place of control-arrow keys.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2021-07-12T14:27:47.220-0400",
      "body": "With VoiceOver enabled. Selecting with the arrow keys doesn't work properly as the arrow keys are also used for screen reader navigation.\n"
    }
  ]
}
---
By default the Reorderer uses the following keyboard shortcuts for moving items:

* ctrl-left arrow, ctrl-j (move left)
* ctrl-right arrow, ctrl-k (move right)
* ctrl-up arrow, ctrl-i (move up)
* ctrl-down arrow, ctrl-m (move down)

These have the following conflicts:

* macOS
  * ctrl-arrow keys used for mission control
  * see: <https://support.apple.com/en-ca/guide/mac-help/mh35798/mac>
* windows
  * Firefox
    * ctrl-j: downloads
    * ctrl-k: focus address bar
    * ctrl-i: page info
    * ctrl-m: mute/unmute audio
    * ctrl-↓: mute audio (media controls)
    * ctrl-↑: unmute audio (media controls)
    * ctrl-→ : seek forward 10% (media controls)
    * ctrl-←: seek back 10% (media controls)
    * see: <https://support.mozilla.org/en-US/kb/keyboard-shortcuts-perform-firefox-tasks-quickly>
  * Chrome
    * ctrl-j: downloads
    * ctrl-k: search
    * ctrl-→ : Move your cursor to the next word
    * ctrl-←: Move your cursor to the beginning of the previous word in a text field
    * see: <https://support.google.com/chrome/answer/157179>
  * MS Edge
    * ctrl-j: downloads
    * ctrl-k: search
    * ctrl-m: Mute the current tab (toggle)
    * see: <https://support.microsoft.com/en-us/microsoft-edge/keyboard-shortcuts-in-microsoft-edge-50d3edab-30d9-c7e4-21ce-37fe2713cfad>

        