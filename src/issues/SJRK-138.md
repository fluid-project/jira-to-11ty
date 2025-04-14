---json
{
  "title": "SJRK-138",
  "summary": "Split handlebars helpers into separate file",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Task",
  "priority": "Blocker",
  "status": "Open",
  "reporter": "Gregor Moss",
  "date": "2018-06-04T17:13:31.461-0400",
  "updated": "2018-07-26T15:29:20.704-0400",
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
      "date": "2018-06-11T17:01:45.830-0400",
      "body": "This requires adding references to this potential new file in 26 html files (mostly tests) in order to get everything working again. Is this worth it at this point? What should this new file be called? Should the helper grade \"paths\" be renamed as well, if they don't live in the same file any more?\n"
    }
  ]
}
---
templateManager.js is getting a bit crowded (at 245 lines).

Split the helper grades and functions out into their own file, along the same lines as the tests. Perhaps templateManagerHelpers.js

        