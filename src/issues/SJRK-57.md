---json
{
  "title": "SJRK-57",
  "summary": "Adapt \"Listen to my story\" to read blocks",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Done",
  "reporter": "Gregor Moss",
  "date": "2018-03-15T15:01:15.040-0400",
  "updated": "2018-04-25T16:40:27.727-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool UI"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Gregor Moss",
      "date": "2018-04-02T17:05:43.320-0400",
      "body": "pay attention to {uiManager}.storySpeaker's model relay for ttsText and related fields\n"
    },
    {
      "author": "Gregor Moss",
      "date": "2018-04-25T16:40:27.724-0400",
      "body": "storySpeaker has been updated to compile the contents of each block of a story using a model relay to track any changes automagically. A block's contents will depend on the type of block that it is, and the contents are compiled by model relays in each. E.g. for an image block, it combines the heading, alternative text and description values, while a text block will combine only the heading and text values.\n"
    }
  ]
}
---
With the inclusion of the new block-style story composition, the "Listen to my story" feature no longer works properly. Instead of reading out the story content, it now attempts to stringify each block and simply says "Object object" for each block.

We should consider

* what elements of each block should be read aloud, with a focus on the alternative text values
* how to iterate over them
* when to iterate over them (e.g. on demand when the button is pressed or ahead of time with something like a model relay)

        