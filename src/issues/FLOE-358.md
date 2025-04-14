---json
{
  "title": "FLOE-358",
  "summary": "Remove programmatical tab orders",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Cindy Li",
  "date": "2015-05-28T11:14:02.498-0400",
  "updated": "2015-11-03T12:42:55.838-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "First Discovery"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2015-05-28T13:18:51.572-0400",
      "body": "Merged pull request ( <https://github.com/fluid-project/first-discovery/pull/70> ) into the project repo at b4f50f8645bc0375f4e9a5ca807225f59867ff17\n"
    }
  ]
}
---
When landing on a new prefs screen, keyboard focus is on 'next' button, so everything is 'behind' you in the focus order\
⁃    tab once gets to mute button\
⁃    it takes another 7 tabs (in Safari) or 14 tabs (in Chrome)  to get to the control itself

So, we'd like to try removing programmatically controlled tab orders and just use the natural document tab order flow.

        