---json
{
  "title": "SJRK-357",
  "summary": "Investigate autosaving text content without input defocus",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Open",
  "reporter": "Gregor Moss",
  "date": "2020-05-19T17:55:48.739-0400",
  "updated": "2020-05-19T17:55:48.739-0400",
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
Determine if it is possible to save text content from an input field (e.g. a text box, multi-line text input) in a way that doesn't require focus to be removed from that element.

The way the site currently works (with \[gpii.binder|<https://github.com/GPII/gpii-binder>] via \[jQuery.change()|<https://api.jquery.com/change/>]) will only update the model once focus is removed from the element.

In the case of an author who has written some content in a text field and decides they're done writing for the time being, they will lose some of their work if they don't subsequently focus on some other element before closing the tab/window.

        