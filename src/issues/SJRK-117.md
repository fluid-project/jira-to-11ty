---json
{
  "title": "SJRK-117",
  "summary": "Expand tests for transforms.js",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Task",
  "priority": "Blocker",
  "status": "Open",
  "reporter": "Gregor Moss",
  "date": "2018-05-31T18:27:23.948-0400",
  "updated": "2019-09-12T19:22:04.794-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool UI"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/SJRK-114/",
      "key": "SJRK-114",
      "summary": "Break renderTemplate function into smaller pieces"
    },
    {
      "type": "Related to",
      "url": "/browse/SJRK-118/",
      "key": "SJRK-118",
      "summary": "Consider combining arrayToString and combineTerms transforms"
    }
  ],
  "attachments": [],
  "comments": []
}
---
Ensure there is adequate coverage for tests of transforms.js.

Test for various types of input (null values, etc.), ensure there are tests for all transforms, invokers and functions.

        