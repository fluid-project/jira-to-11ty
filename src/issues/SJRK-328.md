---json
{
  "title": "SJRK-328",
  "summary": "Can't publish stories with media files",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "reporter": "Gregor Moss",
  "date": "2020-03-19T21:10:42.710-0400",
  "updated": "2020-03-19T21:34:48.702-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool Server",
    "Storytelling Tool UI"
  ],
  "environment": "Google Pixel 3\\\nAndroid 10\\\nFirefox 68.6.0\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/SJRK-329/",
      "key": "SJRK-329",
      "summary": "Can't record audio using Google Recorder app"
    },
    {
      "type": "Related to",
      "url": "/browse/SJRK-330/",
      "key": "SJRK-330",
      "summary": "Previews for video and audio blocks not working"
    }
  ],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/SJRK/SJRK-328/2020-03-18 Pixel 3 Firefox error screenshot 5.png",
      "filename": "2020-03-18 Pixel 3 Firefox error screenshot 5.png"
    }
  ],
  "comments": []
}
---
When attempting to publish a story with an image that has been chosen from the file system, the publishing fails and reports "Publishing failed: Internal server error". This does not occur if the story only has image blocks with freshly captured rather than file system images.

**To reproduce:**

1. Add an image block
2. Click "Upload image"
3. Click "Files" on the list of options for the file uploader
4. Pick an image from the file system
5. Click "Continue" to go to the metadata step
6. Click "Preview my story" to go to the previewer step
7. Click "Publish my story"

**Expected:**

The story should publish

**Actual:**

The server reports an error: "Publishing failed: Internal server error" (see screenshot 5)

        