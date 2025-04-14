---json
{
  "title": "SJRK-378",
  "summary": "SJRK icon get hidden when when the text size is reduced",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "reporter": "Gregor Moss",
  "date": "2020-07-14T02:08:02.588-0400",
  "updated": "2020-07-14T02:08:02.588-0400",
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
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/SJRK/SJRK-378/78667191-20744480-78f6-11ea-85fc-698107adcf00.png",
      "filename": "78667191-20744480-78f6-11ea-85fc-698107adcf00.png"
    }
  ],
  "comments": []
}
---
SJRK image(at the top left corner) is not reducing when text size is reduced from the preferences. Originally reported by GitHub user [Chaitanyassr](https://github.com/Chaitanyassr) in the repository's Issues list: [#63](https://github.com/fluid-project/sjrk-story-telling/issues/63)

**To reproduce:**

1. Go to <https://stories.sojustrepairit.org/>
2. Click "show preferences" to open the UIO panel
3. Reduce the Text Size option by clicking the minus button

**Expected:**

The text and all graphics will be reduced in size and in proportion with each other

**Actual:**

The site logo in the masthead remains the same size regardless of text size (see the attached screenshot: 78667191-20744480-78f6-11ea-85fc-698107adcf00.png)

        