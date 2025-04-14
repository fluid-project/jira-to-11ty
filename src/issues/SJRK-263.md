---json
{
  "title": "SJRK-263",
  "summary": "Empty blocks are being saved by storySpeaker",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Gregor Moss",
  "date": "2019-07-26T18:51:26.796-0400",
  "updated": "2019-09-10T11:35:23.079-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool UI"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/SJRK/SJRK-263/2019-07-26 block filter failure.PNG",
      "filename": "2019-07-26 block filter failure.PNG"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2019-09-03T11:19:00.989-0400",
      "body": "Merged PR ( <https://github.com/fluid-project/sjrk-story-telling/pull/37> ) into the project repo at 8f7600cb049323ce088745f42f1733ad73d774fe\n"
    }
  ]
}
---
Blocks that should be filtered out due to being "empty" are still making it through the model relay.

Minimum steps to reproduce:\
1\. create an image, video or audio block and populate at least one of its fields that isn't the media (e.g. an image block with no image)\
2\. publish the story

Expected:\
The empty media block should be filtered out by the model relay in storyEdit

Actual:\
The empty media block is not being filtered out and is being saved and rendered

        