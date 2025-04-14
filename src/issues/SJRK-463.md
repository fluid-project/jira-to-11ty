---json
{
  "title": "SJRK-463",
  "summary": "Update the docker compose dev config to expose port for https ",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2021-03-16T16:54:24.027-0400",
  "updated": "2021-03-16T17:29:40.750-0400",
  "versions": [
    "0.5"
  ],
  "fixVersions": [
    "0.5.1"
  ],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Cindy Li",
      "date": "2021-03-16T17:29:40.746-0400",
      "body": "[The pull request](https://github.com/fluid-project/sjrk-story-telling/pull/116) for fixing this issue has been merged into the main branch at [this commit](https://github.com/fluid-project/sjrk-story-telling/commit/0d5bb1bf597683fd4550fa06eca1dfbf409a624c).\n"
    }
  ]
}
---
As part of the work on SJRK-455 configuration was added to run the Kettle server with https. However, the docker-compose.dev.yml only exposes port 8081 and not 443 that is needed. The dev docker compse file should expose both ports to make testing/developing locally easier.

        