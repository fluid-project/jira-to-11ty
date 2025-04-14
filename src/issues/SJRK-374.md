---json
{
  "title": "SJRK-374",
  "summary": "Empty video placeholder in editor is focusable",
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
  "date": "2020-07-02T17:32:57.394-0400",
  "updated": "2020-08-04T13:15:37.035-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool UI"
  ],
  "environment": "Windows 10 Pro v1909\\\nFirefox 78\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/SJRK/SJRK-374/2020-07-02 video placeholder focus bug.png",
      "filename": "2020-07-02 video placeholder focus bug.png"
    }
  ],
  "comments": [
    {
      "author": "Dana",
      "date": "2020-07-15T14:58:11.665-0400",
      "body": "@@Gregor Moss, @@Justin Obara Something else I just noticed about the media placeholders. In Safari and Firefox (and not in Chrome), the image block placeholder has a frame (unfocusable) around it that shouldn't be there, to be consistent with the other blocks, and make it clear that it is not focusable.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2020-07-15T15:39:08.362-0400",
      "body": "@@Dana I believe this is filed as <https://fluidproject.atlassian.net/browse/SJRK-226#icft=SJRK-226>. Could you please confirm if that's the same issue you are experiencing.\n"
    },
    {
      "author": "Dana",
      "date": "2020-07-16T12:14:22.114-0400",
      "body": "@@Justin Obara thanks, yep, looks like 226 covers this issue.\n"
    },
    {
      "author": "Cindy Li",
      "date": "2020-07-17T14:23:14.307-0400",
      "body": "[The pull request](https://github.com/fluid-project/sjrk-story-telling/pull/89) that fixes this issue has been merged into project repo master branch at [this commit](https://github.com/fluid-project/sjrk-story-telling/commit/90e928055ae20890a1dfc7773ce9616aa29bbbdb).\n"
    }
  ]
}
---
In Firefox 78, the video block placeholder (when no video is uploaded) is focusable. This should not be the case. The issue does not occur in Chrome 83 or Edge 44 (pre-Chromium).

**To reproduce:**

1. Go to <https://staging-stories.floeproject.org/storyEdit.html>
2. Click "Add a video block"
3. One of the following actions
   1. Click on the video preview placeholder
   2. Press "tab" to cycle focus from element to element until it lands on the video preview placeholder

**Expected:**

The placeholder is skipped in tab order

**Actual:**

The placeholder is focusable

        