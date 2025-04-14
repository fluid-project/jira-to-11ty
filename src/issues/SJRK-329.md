---json
{
  "title": "SJRK-329",
  "summary": "Can't record audio using Google Recorder app",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "reporter": "Gregor Moss",
  "date": "2020-03-19T21:15:04.576-0400",
  "updated": "2020-03-19T21:34:49.228-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool UI"
  ],
  "environment": "Google Pixel 3\\\nAndroid 10\\\nFirefox 68.6.0\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/SJRK-330/",
      "key": "SJRK-330",
      "summary": "Previews for video and audio blocks not working"
    },
    {
      "type": "Related to",
      "url": "/browse/SJRK-328/",
      "key": "SJRK-328"
    }
  ],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/SJRK/SJRK-329/2020-03-18 Pixel 3 Firefox error screenshot 1.png",
      "filename": "2020-03-18 Pixel 3 Firefox error screenshot 1.png"
    }
  ],
  "comments": []
}
---
The "System UI" Android app crashes when attempting to record an audio file in an audio block using the Google Recorder app.

**To reproduce:**

1. Add an audio block
2. Click "Upload audio"
3. Click "Recorder" on the list of options for the file uploader

**Expected:**

The Recorder app should load and begin recording audio

**Actual:**

The "System UI" app crashes (see screenshot 1)

        