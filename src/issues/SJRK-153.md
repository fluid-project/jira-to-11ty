---json
{
  "title": "SJRK-153",
  "summary": "Review the placement of model values in binder grade",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Open",
  "reporter": "Gregor Moss",
  "date": "2018-06-14T14:05:19.457-0400",
  "updated": "2018-06-14T14:05:19.457-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool UI"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
The grade sjrk.storyTelling.binder has two model values which are merged in by certain UI's, but not all. These are "languageFromSelect" and "languageFromInput". They are holdovers from the first iteration of the tool which had the ability to specify the story's language.

Given that this functionality is no longer present, and indeed may be replaced by the ability to set language individually by block, review the requirement for and placement of these two values.

<https://github.com/BlueSlug/sjrk-story-telling/blob/29c9a256d76b32c1663c5b5ff82fabe04b079aab/src/js/storyTelling-binder.js#L20-L21>

        