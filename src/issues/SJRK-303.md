---json
{
  "title": "SJRK-303",
  "summary": "Add tests for each available theme",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Open",
  "reporter": "Gregor Moss",
  "date": "2019-10-02T15:49:57.445-0400",
  "updated": "2019-10-02T15:49:57.548-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool Server",
    "Storytelling Tool UI"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/SJRK-122/",
      "key": "SJRK-122"
    }
  ],
  "attachments": [],
  "comments": []
}
---
Ensure every theme available in the project is being tested via automated testing. This may require the use of something to coordinate server config changes and reloading the browser tests (see SJRK-122), or it may be possible by mocking the clientConfig server response and rerunning some or all browser tests for each theme.

        