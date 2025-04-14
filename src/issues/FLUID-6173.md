---json
{
  "title": "FLUID-6173",
  "summary": "Change duplicate button and reset IDs in UIO",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Jonathan Hung",
  "date": "2017-07-28T13:18:19.442-0400",
  "updated": "2017-07-31T11:20:35.963-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2017-07-28T13:21:14.398-0400",
      "body": "the Floe Project website needs to be fixed as well. Currently there are duplicate IDs for the mobile and desktop buttons.\n"
    },
    {
      "author": "Cindy Li",
      "date": "2017-07-31T10:52:14.175-0400",
      "body": "The preferences framework within infusion repo has been fixed with the merge of [this pull request](https://github.com/fluid-project/infusion/pull/839) into the project master branch at 5fdfe2ac61c2a5b45aa3027cb5c8e0f6e0a8df76\n"
    }
  ]
}
---
In UI Options, both the mobile and desktop hide/show and reset buttons have the same ID, which isn't valid markup.

This should be fixed in Infusion so the markup is valid.

        