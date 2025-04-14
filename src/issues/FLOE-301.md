---json
{
  "title": "FLOE-301",
  "summary": "Implement a sticky keys simulator ",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Simon Bates",
  "reporter": "Justin Obara",
  "date": "2015-04-10T11:04:21.311-0400",
  "updated": "2015-11-03T11:30:32.747-0500",
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
      "author": "Justin Obara",
      "date": "2015-04-10T15:35:04.410-0400",
      "body": "We cannot highjack the key events to inject the modifier key, so an approach that captures the key event and modifies the input seems to be needed. This will also need to ensure that any change events from the input field are also triggered appropriately.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-04-10T15:36:47.959-0400",
      "body": "I did some initial exploration into the sticky keys in a jsfiddle\\\n<http://jsfiddle.net/3uk7xg38/>\n\npressing shift once enables the sticky key for single use, pressing twice persists the sticky key, and the third press disables. This demo only works for capital letters and doesn't handle any punctuation or other symbols.\n"
    },
    {
      "author": "Simon Bates",
      "date": "2015-04-22T13:21:05.786-0400",
      "body": "After some discussions, the following changes have been made to the sticky keys implementation:\n\n* sticky keys is implemented for shift only\n* the text input on which sticky keys can be activated shows at most 1 character of input (subsequent input replaces the character, if there is one)\n* we do not implement locking of the shift key, only latching for a single input\n* pressing shift toggles the shift latch status (that is, pressing the shift key twice without any other input will turn the shift latching off, rather than lock)\n* shift is unlatched after a shifted key is input\n* we have added support for an indicator to show when the shift key is latched – this is done by setting a class on the text input whenever latching is active (see /tests/manualTests/html/keyboardInput-manualTests.html for an example)\n"
    },
    {
      "author": "Simon Bates",
      "date": "2015-04-22T13:49:24.494-0400",
      "body": "In addition, due to the nature of the information and functionality available within the browser, the shifting behaviour is US keyboard specific.\n"
    },
    {
      "author": "Simon Bates",
      "date": "2015-04-22T14:13:38.004-0400",
      "body": "Pull request: <https://github.com/fluid-project/first-discovery/pull/34>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-04-23T16:07:41.086-0400",
      "body": "Merged pull request ( <https://github.com/fluid-project/first-discovery/pull/34> ) into the project repo at f0d03daf4a92110e3a74c815ab064e3bbace3e48 and 9c796c7cf075636da39ea4612a16cac0c8632347\n"
    }
  ]
}
---
Implement a sticky simulator so that a user can experiment with sticky keys from within a web interface.

It should be possible to apply the simulator to a text entry field. If a user presses a modifier key, it should be "remembered" and applied to the subsequent keypress in the text entry field.

press modifier once - added to the subsequent character input only\
press modifier twice - added to all subsequent character inputs\
press modifier three times - disables the sticky key

e.g.

* User places focus in a textfield.
* User presses "shift"
* User presses "a"
* The textfield outputs "A"

        