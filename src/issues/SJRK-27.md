---json
{
  "title": "SJRK-27",
  "summary": "Add video capturing capabilities",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "New Feature",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Done",
  "reporter": "Gregor Moss",
  "date": "2017-10-31T16:35:33.868-0400",
  "updated": "2019-01-21T15:28:51.919-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool Server",
    "Storytelling Tool UI"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Gregor Moss",
      "date": "2018-12-11T13:33:10.780-0500",
      "body": "To consider:\n\n* transcript placement/integration. See this post on MDN: <https://developer.mozilla.org/en-US/docs/Web/Apps/Fundamentals/Audio_and_video_delivery/Adding_captions_and_subtitles_to_HTML5_video>\n* video block was tested with NVDA and it didn't read out the alt text. Instead it offered access to the video controls. In this case, what is the best choice for accessibility?\n"
    },
    {
      "author": "Gregor Moss",
      "date": "2019-01-02T18:35:40.210-0500",
      "body": "Took the first half of the previous comment and opened <https://fluidproject.atlassian.net/browse/SJRK-170#icft=SJRK-170> to deal with it.\n\nRegarding NVDA not reading the \"alt text\", which is to say the text that is meant to be displayed when no video file is able to load, that whole idea doesn't conform with the W3C's video accessibility suggestions anyway: <https://www.w3.org/2008/06/video-notes>\n\nA workable transcript and captions seem to be the best way at this point, so we should focus on that\n"
    },
    {
      "author": "Gregor Moss",
      "date": "2019-01-03T15:45:43.456-0500",
      "body": "Grades and tests added, merged into <https://fluidproject.atlassian.net/browse/SJRK-91#icft=SJRK-91>.\n"
    }
  ]
}
---
Add video capturing features to the storytelling tool. Consider offering the user a choice of which camera to use (not consistent across all browsers)

        