---json
{
  "title": "SJRK-33",
  "summary": "Add media playback",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "New Feature",
  "priority": "Major",
  "status": "Open",
  "reporter": "Gregor Moss",
  "date": "2017-10-31T16:45:52.761-0400",
  "updated": "2019-10-09T15:22:43.532-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool UI"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/SJRK-301/",
      "key": "SJRK-301"
    }
  ],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/SJRK/SJRK-33/2019-09-26 ST orator not playing audio.png",
      "filename": "2019-09-26 ST orator not playing audio.png"
    }
  ],
  "comments": [
    {
      "author": "Alan Harnum",
      "date": "2017-11-09T16:28:51.923-0500",
      "body": "This is related to <https://fluidproject.atlassian.net/browse/SJRK-34#icft=SJRK-34>. Multimodality of the story introduces some complexity, and would change the context of the \"Listen to this story\" button (perhaps the text on it should change).\n"
    },
    {
      "author": "Gregor Moss",
      "date": "2019-01-08T16:05:51.342-0500",
      "body": "with the addition of video (<https://fluidproject.atlassian.net/browse/SJRK-27#icft=SJRK-27>) and audio (<https://fluidproject.atlassian.net/browse/SJRK-31#icft=SJRK-31>) blocks, individual media file playback is incorporated. Still need to figure out a way to listen to the story including the audio and video content, in order. Transcripts are currently read aloud.\n"
    }
  ]
}
---
Add the ability to play various media associated with a story, in addition to the already-implemented text-to-speech.

The context of the "Listen to this story" will be affected by the presence of audio, worth considering. A story may have text and audio that do not directly match

        