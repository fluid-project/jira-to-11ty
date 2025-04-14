---json
{
  "title": "FLOE-408",
  "summary": "Implement a means of model binding the contrast theme styles to their respective labels.",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Justin Obara",
  "date": "2015-08-10T13:36:18.948-0400",
  "updated": "2015-11-03T12:55:22.060-0500",
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
      "date": "2015-08-31T15:05:30.885-0400",
      "body": "Issued a pull request: <https://github.com/fluid-project/first-discovery/pull/97>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-09-01T10:07:10.881-0400",
      "body": "Merged pull request ( <https://github.com/fluid-project/first-discovery/pull/97> ) into the project repo at c185add99fa33ad67ff4b1178a06c0214a837c24\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-09-01T10:08:39.936-0400",
      "body": "The style() function doesn't need to be bound with a model path. It should only be called when the panel is rendered to apply button styles. The comment for this task has been removed from the code.\n"
    }
  ]
}
---
An improvement would be to use a utility such as the one in the video player to make this automatically model bound. <https://github.com/fluid-project/videoPlayer/blob/master/js/VideoPlayer_showHide.js>

        