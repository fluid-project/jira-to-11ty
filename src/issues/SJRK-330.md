---json
{
  "title": "SJRK-330",
  "summary": "Previews for video and audio blocks not working",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "reporter": "Gregor Moss",
  "date": "2020-03-19T21:16:39.279-0400",
  "updated": "2020-07-30T16:23:19.408-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": "Google Pixel 3\\\nAndroid 10\\\nFirefox 68.6.0\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/SJRK-328/",
      "key": "SJRK-328"
    },
    {
      "type": "Related to",
      "url": "/browse/SJRK-329/",
      "key": "SJRK-329"
    }
  ],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/SJRK/SJRK-330/2020-03-18 Pixel 3 Firefox error screenshot 2.png",
      "filename": "2020-03-18 Pixel 3 Firefox error screenshot 2.png"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/SJRK/SJRK-330/2020-03-18 Pixel 3 Firefox error screenshot 3.png",
      "filename": "2020-03-18 Pixel 3 Firefox error screenshot 3.png"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/SJRK/SJRK-330/2020-07-02 ipad audio preview broken (cropped).png",
      "filename": "2020-07-02 ipad audio preview broken (cropped).png"
    }
  ],
  "comments": [
    {
      "author": "Gregor Moss",
      "date": "2020-07-02T17:22:06.603-0400",
      "body": "A similar issue was noted in Safari on the iPad Air 3 (iOS 13.3). It only occurred once and could not be reproduced in subsequent attempts. See \"2020-07-02 ipad audio preview broken (cropped).png\"\n\nI added an audio block as part of Test 14 (one of each block type, all fields filled in), and when I got to the preview, the file could not be played. This may be the same issue or it may be separate\n"
    }
  ]
}
---
Previews within the Previewer step do not load properly for audio or video blocks if the file is added from file system

**To reproduce:**

1. Add an audio or video block
2. Click "Upload audio" or "Upload video"
3. Click "Files" on the list of options for the file uploader
4. Select an audio or video file, as appropriate
5. Click "Continue" to go to the metadata step
6. Click "Preview my story" to go to the previewer step

**Expected:**

The media preview should appear and play properly

**Actual:**

The preview is either blank (for an audio block) or shows the file is not found (for a video block.) See screenshots 2 and 3.

        