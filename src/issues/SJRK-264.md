---json
{
  "title": "SJRK-264",
  "summary": "Remove \"baseTheme\" from clientConfig values",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Open",
  "reporter": "Gregor Moss",
  "date": "2019-07-29T17:34:01.931-0400",
  "updated": "2020-01-24T13:31:54.938-0500",
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
      "url": "/browse/SJRK-256/",
      "key": "SJRK-256"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Gregor Moss",
      "date": "2020-01-24T13:31:54.938-0500",
      "body": "This would should not include what is in SJRK-256's scope. The aim is to remove this one extra value which, at time of writing, is essentially only used to determine whether to load custom theme files. The work in <https://fluidproject.atlassian.net/browse/SJRK-265#icft=SJRK-265>/<https://fluidproject.atlassian.net/browse/SJRK-230#icft=SJRK-230> will likely affect this.\n\nA quick solve could be to check for truthiness of clientConfig.theme rather than comparing it against a baseTheme value.\n"
    }
  ]
}
---
Remove the "baseTheme" key from the clientConfig values returned by sjrk.storyTelling.server.getClientConfig()

This relates very closely and perhaps could be solved by the work outlined in <https://fluidproject.atlassian.net/browse/SJRK-256#icft=SJRK-256>, and it may remove the need for sjrk.storyTelling.loadCustomThemeFiles()

        