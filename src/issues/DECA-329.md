---json
{
  "title": "DECA-329",
  "summary": "Capture filename prefix should be easily configurable",
  "tags": "DECA",
  "project": {
    "key": "DECA",
    "title": "Decapod"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "reporter": "Jonathan Hung",
  "date": "2012-10-15T10:52:18.553-0400",
  "updated": "2012-12-03T10:49:33.540-0500",
  "versions": [
    "0.7"
  ],
  "fixVersions": [
    "Future"
  ],
  "components": [
    "Capture",
    "Dewarp"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
The administrator should be able to easily change the prefix of Capture filenames to a custom string. Changing the prefix should have an effect on both Capture and Dewarp servers (i.e. one change should affect both).

Currently both Dewarp and Capture have the prefix hard coded independently in each their code base.

        