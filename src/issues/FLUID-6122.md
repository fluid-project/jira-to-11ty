---json
{
  "title": "FLUID-6122",
  "summary": "Reduce priority of a couple of overly verbose logging sites in the framework",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Antranig Basman",
  "date": "2017-01-31T09:11:46.796-0500",
  "updated": "2017-01-31T10:34:16.932-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Cindy Li",
      "date": "2017-01-31T10:33:57.604-0500",
      "body": "The pull request <https://github.com/fluid-project/infusion/pull/806> has been merged into the project repo master branch at 6aab53afdc5cf14d8cf40fb0b2df00d54acaf330\n"
    }
  ]
}
---
The framework performs overly noisy logging in a couple of cases - \
i) updating a grade definition\
ii) dispatching to a "this"-ist listener\
we should bump these down to the "trace" priority, as well as providing a guard around the log statement notifying on every listener firing

        