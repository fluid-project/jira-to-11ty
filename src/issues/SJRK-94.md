---json
{
  "title": "SJRK-94",
  "summary": "Adding a block fails the first time",
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
  "date": "2018-05-25T10:01:28.993-0400",
  "updated": "2018-05-25T17:05:45.828-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool UI"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Gregor Moss",
      "date": "2018-05-25T16:03:36.755-0400",
      "body": "The issue seems to be occurring as a result of the page's uiLanguage value being changed when the block add buttons are being clicked. Additionally, something is setting the value to \"undefined\" after the initial creation, and this is likely the root cause of the issue.\n"
    },
    {
      "author": "Gregor Moss",
      "date": "2018-05-25T17:05:45.825-0400",
      "body": "The bug was cause by the page loading the language from the cookie, but if the cookie was not set then it would set the language to \"undefined\", triggering the editor DOM to be redrawn, removing any dynamically added elements before the context change could be registered\n"
    }
  ]
}
---
At the time of filing, in the <https://fluidproject.atlassian.net/browse/SJRK-91#icft=SJRK-91> branch (<https://karisma-stories.floeproject.org/storyEdit.html>), attempting to add a new block for the first time will fail without adding the block. Subsequent attempts to add a block will work just fine.

This does not occur in the "main" <https://fluidproject.atlassian.net/browse/SJRK-49#icft=SJRK-49> branch (<https://stories.floeproject.org/>), so it is something which was added in as part of the rush to get it working for Karisma.

        