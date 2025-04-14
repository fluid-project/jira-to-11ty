---json
{
  "title": "SJRK-261",
  "summary": "Review events and switch to model/relay setup where appropriate",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Gregor Moss",
  "date": "2019-07-23T15:32:01.531-0400",
  "updated": "2022-07-29T00:09:30.287-0400",
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
      "date": "2020-03-27T17:04:14.063-0400",
      "body": "Reopened after it was automatically closed in error\n"
    }
  ]
}
---
Review all event and listener use and convert to model values and relays where appropriate (e.g. onVisibilityChanged in storyEdit). This could remove the need for the manageVisibility function, among other things.

        