---json
{
  "title": "FLUID-5792",
  "summary": "New Git repository request - ci-service",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Giovanni Tirloni",
  "date": "2015-10-20T08:56:36.197-0400",
  "updated": "2015-11-03T13:50:40.372-0500",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2015-11-03T13:33:42.786-0500",
      "body": "Added the git repo <https://github.com/fluid-project/ci-service>\n"
    },
    {
      "author": "Giovanni Tirloni",
      "date": "2015-11-03T13:50:23.694-0500",
      "body": "Thank you, Justin.\n\nThe Jenkins instance running at [https://ci-int.fluidproject.org](https://ci-int.fluidproject.org/) is now updating its job definitions automatically based on commits done to this repository.\n"
    }
  ]
}
---
I would like to create a new repository called "**ci-service**" that would hold configuration data related to our continuous integration service (based on Jenkins).

I don't have access to the Fluid Project organization in GitHub so I will need some help to create this repository, set appropriate permissions and WebHook configuration.

**GitHub users that need write access to the repository:** avtar, waharnum, gtirloni

Please also create a WebHook based on the "GitHub Plugin (Jenkins) with the following URL: <https://ci-int.fluidproject.org/github-webhook>

Alternatively, if these users could be made admins then any of them could carry out the configuration (or future changes) as required.

        