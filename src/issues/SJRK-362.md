---json
{
  "title": "SJRK-362",
  "summary": "CI deploy tasks run and fail in forks.",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Giovanni Tirloni",
  "reporter": "Justin Obara",
  "date": "2020-06-15T08:39:39.713-0400",
  "updated": "2020-06-15T11:14:51.935-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2020-06-15T08:40:38.610-0400",
      "body": "@@Gregor Moss I assigned to @@Giovanni Tirloni because it looked like he originally worked on the CI tasks, but pinging you in the comments as well. \n"
    }
  ]
}
---
Currently the [stories.floeproject.org\_\_staging](https://github.com/jobara/sjrk-story-telling/blob/master/.github/workflows/stack_master.yml) CI task is running in forks and attempts to deploy to staging. This fails because the required secrets are not available in the fork. 

Example failing build: <https://github.com/jobara/sjrk-story-telling/runs/772418843?check_suite_focus=true>

I don't know what the purpose of staging is exactly, as it's only run on pushes to master. I'd expect master to actually deploy to production, so not sure if there are other workflow steps. At any rate, it doesn't seem appropriate for forks to be attempting to deploy to staging, and the failing builds are confusing to those working on development. I'd suggest adding a conditional check to only run this task when triggered in the project's repository. 

        