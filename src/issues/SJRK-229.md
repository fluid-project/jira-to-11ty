---json
{
  "title": "SJRK-229",
  "summary": "The background images for image and video blocks show at publishing empty blocks of these",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Task",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Gregor Moss",
  "reporter": "Cindy Li",
  "date": "2019-02-19T15:03:04.542-0500",
  "updated": "2019-05-14T11:44:51.455-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/SJRK/SJRK-229/preview.png",
      "filename": "preview.png"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/SJRK/SJRK-229/published.png",
      "filename": "published.png"
    }
  ],
  "comments": [
    {
      "author": "Gregor Moss",
      "date": "2019-04-01T13:30:14.243-0400",
      "body": "We want to disable the saving of empty blocks. If at some point we revisit this and decide that we want to enable that, we can.\n"
    },
    {
      "author": "Gregor Moss",
      "date": "2019-04-01T13:31:58.138-0400",
      "body": "Some stories saved in the Storytelling Project efforts in the last few months have empty blocks exhibiting this behaviour. We won't be addressing those for the time being.\n"
    },
    {
      "author": "Cindy Li",
      "date": "2019-05-09T09:59:16.179-0400",
      "body": "[The pull request](https://github.com/fluid-project/sjrk-story-telling/pull/23/files) has been merged into the project repo at [this commit](https://github.com/fluid-project/sjrk-story-telling/commit/a2066b42b7f6991789d567b2ed6794ddb10536bd).\n"
    }
  ]
}
---
To reproduce:

1\. Open [SJRK staging site](http://staging-stories.floeproject.org/);\
2\. Click add block buttons to add 4 empty blocks. Each of them is for text, image, audio, video;\
3\. Click "Continue" button. On the next page, click "preview my story" button;\
4\. The background images for image and video blocks show. The background image for the audio block doesn't show.

The expected behavior is none of these background images should show when adding empty blocks.

        