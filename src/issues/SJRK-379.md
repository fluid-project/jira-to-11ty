---json
{
  "title": "SJRK-379",
  "summary": "Uncaught error when showing story preview with AV block",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "reporter": "Gregor Moss",
  "date": "2020-07-14T04:47:55.319-0400",
  "updated": "2020-07-14T04:48:38.800-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool UI"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
When moving to the story preview part of the Story Edit page, if the story contains a non-empty audio or video block, the following error is reported:

```javascript
"Assertion failure - check console for more details: Could not resolve reference {that}.dom.mediaPlayer.0 to a value"
```

No issues seem to be present otherwise, the preview is working as expected, and publishing works without issue. I am unsure how long this bug has been present.

**To reproduce:**

1. Go to <https://staging-stories.floeproject.org/storyEdit.html>
2. Click "Add an audio block" or "Add a video block"
3. Add an appropriate file to the block
4. Click "Continue"
5. Click "Preview my story"

**Expected:**

The story preview is displayed and no errors are thrown

**Actual:**

The story preview is displayed and the error described above is thrown

        