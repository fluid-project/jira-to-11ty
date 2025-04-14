---json
{
  "title": "SJRK-102",
  "summary": "The storyTelling-page component should load the necessary markup for its subcomponents",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Improvement",
  "priority": "Blocker",
  "status": "Open",
  "resolution": "Fixed",
  "reporter": "Alan Harnum",
  "date": "2018-05-31T14:40:28.655-0400",
  "updated": "2018-07-17T12:20:58.460-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool UI"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/SJRK-105/",
      "key": "SJRK-105"
    }
  ],
  "attachments": [],
  "comments": []
}
---
Right now, a large block of markup needs to be included on the HTML page for sjrk.storyTelling.page (the "master" component that has various UI-based subcomponents like the editor, menu, etc).

It would be more appropriate to include another template-loading subcomponent that renders that markup first, rather than needing to have it hard-coded on the HTML page.

        