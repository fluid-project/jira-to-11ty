---json
{
  "title": "SJRK-225",
  "summary": "In Firefox, spacebar doesn't activate button-down / :active",
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
  "date": "2019-02-15T13:36:45.210-0500",
  "updated": "2022-07-29T00:09:30.459-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool UI"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/SJRK-391/",
      "key": "SJRK-391",
      "summary": "Story Tool button active states malfunctioning with keyboard controls"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Gregor Moss",
      "date": "2020-03-27T17:03:59.907-0400",
      "body": "Reopened after it was automatically closed in error. Issue persists.\n"
    }
  ]
}
---
In Firefox, activating a button using the spacebar does not lead to a \<button> element going into the "down" or ":active" state, which means any active button states are not visible to the user.

Investigate this further and see if it is a bug in the site or something specific to the browser (which should perhaps be brought to the attention of Mozilla)

        