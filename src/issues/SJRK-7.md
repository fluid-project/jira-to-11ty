---json
{
  "title": "SJRK-7",
  "summary": "Text-to-speech should read Author and Title",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "New Feature",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Alan Harnum",
  "reporter": "Gregor Moss",
  "date": "2017-09-01T13:47:15.745-0400",
  "updated": "2017-10-31T15:10:11.131-0400",
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
      "date": "2017-09-07T20:42:34.720-0400",
      "body": "Fixed issue, pull request created:\n\n<https://github.com/waharnum/sjrk-storyTelling/pull/6/>\n"
    }
  ]
}
---
The "Listen to my story" feature currently only reads the content of the story. It should read, in this order for English:

* the title of the story,
* the author's name,
* and the content of the story

Adjustments may have to be made so that it will read the byline with the correct order and associated words for the language of the story.

        