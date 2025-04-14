---json
{
  "title": "SJRK-441",
  "summary": "Consider moving image rotation to its own middleware",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Open",
  "reporter": "Gregor Moss",
  "date": "2020-12-13T21:18:16.699-0500",
  "updated": "2020-12-14T14:38:14.671-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool Server"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Gregor Moss",
      "date": "2020-12-14T14:38:14.671-0500",
      "body": "Consider doing this work and <https://fluidproject.atlassian.net/browse/SJRK-416#icft=SJRK-416> at the same time\n"
    }
  ]
}
---
Consider moving the code that handles rotating images to their correct orientation to its own middleware

The code in question can be found here:\
<https://github.com/fluid-project/sjrk-story-telling/blob/c52e54e2aed53540cae12718dba3c48e520a0eb4/src/server/requestHandlers.js#L240-L248>

        