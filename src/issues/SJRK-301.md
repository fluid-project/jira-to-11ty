---json
{
  "title": "SJRK-301",
  "summary": "Orator not reading out alt text of images",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Open",
  "reporter": "Gregor Moss",
  "date": "2019-09-25T16:41:09.727-0400",
  "updated": "2019-10-09T14:03:46.196-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool UI"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/SJRK-33/",
      "key": "SJRK-33",
      "summary": "Add media playback"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2019-09-25T17:20:03.305-0400",
      "body": "The Orator component was actually designed to only read the text nodes. It ignores hidden text and also doesn't read things like alt text off of images. It is designed to be a tool to synthesize the visible text on the page, as opposed to something more akin to a screen reader. You could probably modify this behaviour, but would probably require writing a new Dom parser(s) and may need to modify some parts that control the highlighting of text. \n"
    }
  ]
}
---
The Orator component (replacing the storySpeaker) does not currently read out image alt text, which it probably should. Unsure if this is a configuration issue within the Storytelling Tool or a change that will have to be made in Infusion.

For an example of this, please see this story on the Floe site: <https://stories.floeproject.org/storyView.html?id=a51dec50-28c9-11e9-98f6-71413982cc35>

To reproduce:

* Create or access a story with an image that has alt text provided
* Click "play" on the Orator

Expected:

* Image alt text is read aloud

Actual:

* Image alt text is not read and is effectively skipped

        