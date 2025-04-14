---json
{
  "title": "SJRK-157",
  "summary": "storyEdit page tests fail if cookie missing or not English",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Do",
  "reporter": "Gregor Moss",
  "date": "2018-06-27T11:24:26.064-0400",
  "updated": "2018-06-28T10:20:07.901-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool UI"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/SJRK-150/",
      "key": "SJRK-150",
      "summary": "Update Edit page tests to work in any language"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Gregor Moss",
      "date": "2018-06-27T11:26:40.602-0400",
      "body": "This is effectively a duplicate of <https://fluidproject.atlassian.net/browse/SJRK-150#icft=SJRK-150>\n"
    }
  ]
}
---
The tests for sjrk.storyTelling.page.storyEdit will fail if either:

* the cookie with language preferences is missing, or
* the cookie is present and the language is not English

Ensure the tests are set up such that they will pass, either by making sure the preference is there and set to English, or by adjusting precisely what is tested.

        