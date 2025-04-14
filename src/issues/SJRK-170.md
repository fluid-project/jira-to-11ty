---json
{
  "title": "SJRK-170",
  "summary": "Improve editing and display of audio/video element transcripts",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Gregor Moss",
  "date": "2019-01-02T18:04:31.324-0500",
  "updated": "2022-07-29T00:09:32.648-0400",
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
      "date": "2019-09-09T13:12:58.363-0400",
      "body": "I have linked the issue to the Inclusive Cities a11y Epic. Here are a few more notes from that discussion:\n\nVideo content blocks don’t support captions, would it be possible to enable captions or host the videos through something like YouTube?\n\nThoughts on the issue:\n\n* Add a new kind of block which is a YouTube link? Or a new field\n* Would it be either/or?\n  * \"Upload video\" button or \"Link video\" button\n* Find markup to wrap video addresses based on what site they come from\n  * YouTube\n  * Vimeo\n  * Twitter?\n* Else check the URL for a video file extension and just render it as a video\n"
    },
    {
      "author": "Gregor Moss",
      "date": "2019-09-11T15:55:57.295-0400",
      "body": "We have, for the time being, removed the transcript field from audio and video blocks until such time as we have a solid design for it\n"
    }
  ]
}
---
Review transcript editing and display for audio and video elements. Try to use the track element to accomplish this.

See this post on MDN: <https://developer.mozilla.org/en-US/docs/Web/Apps/Fundamentals/Audio_and_video_delivery/Adding_captions_and_subtitles_to_HTML5_video>

        