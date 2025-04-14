---json
{
  "title": "SJRK-327",
  "summary": "Unable to reach buttons with tab navigation in Safari",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Not A Bug",
  "reporter": "Gregor Moss",
  "date": "2020-03-19T17:38:24.659-0400",
  "updated": "2020-03-19T21:34:48.276-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool UI"
  ],
  "environment": "MacBook Pro (2015)\\\nmacOS High Sierra 10.13.6\\\nSafari 13.0.2\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Gregor Moss",
      "date": "2020-03-19T17:42:21.156-0400",
      "body": "This isn't an issue with the Storytelling Tool, but rather an option in Safari that needs to be enabled...\n\nSee these pages for more information:\n\n<https://corehelpcenter.bqe.com/hc/en-us/articles/115003481673-Tab-key-is-not-working-on-Mac-Safari>\n\n<https://stackoverflow.com/questions/1848390/safari-ignoring-tabindex>\n"
    }
  ]
}
---
Tab navigation using Safari 13 on MacBook doesn't seem to work on anything other than input fields. On the Edit page, this means that nothing will be given focus unless there are inputs visible on the screen.

**To reproduce:**

1. Navigate to storyEdit.html
2. Press the Tab key

**Expected:**

Focus should move to the first link or button

**Actual:**

\*\*Focus moves to the address bar, and repeated presses of Tab will keep it there

        