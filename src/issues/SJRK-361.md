---json
{
  "title": "SJRK-361",
  "summary": "Pin Docker version",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Giovanni Tirloni",
  "date": "2020-06-02T16:28:53.811-0400",
  "updated": "2020-06-08T09:44:49.721-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Cindy Li",
      "date": "2020-06-03T10:52:15.851-0400",
      "body": "[The pull request](https://github.com/fluid-project/sjrk-story-telling/pull/78) has been merged into the project repo master branch at [this commit](https://github.com/fluid-project/sjrk-story-telling/commit/c69026fe9cf476595b2d9f1a214f3e30f9d8ed14).\n"
    },
    {
      "author": "Cindy Li",
      "date": "2020-06-08T09:44:49.721-0400",
      "body": "[The pull request for the \"stories-aihec-production\" branch](https://github.com/fluid-project/sjrk-story-telling/pull/79) has been merged at [this commit](https://github.com/fluid-project/sjrk-story-telling/commit/b11a9241a5ac9c9c4cdbf0f0a6130ab3db532a02).\n\n[The pull request for the \"stories-cities-production\" branch](https://github.com/fluid-project/sjrk-story-telling/pull/80) has been merged at [this commit](https://github.com/fluid-project/sjrk-story-telling/commit/af3e5f0d82265e106891253f1c81da5b98c6f6e9).\n\n[The pull request for the \"stories-floe-production\" branch](https://github.com/fluid-project/sjrk-story-telling/pull/81) has been merged at [this commit](https://github.com/fluid-project/sjrk-story-telling/commit/b84b3ba3e05e4db30250e4e7c305fee291e29314).\n\n[The pull request for the \"stories-karisma-production\" branch](https://github.com/fluid-project/sjrk-story-telling/pull/82) has been merged at [this commit](https://github.com/fluid-project/sjrk-story-telling/commit/f98b8194758c71c0316d55be4ac0d4d3cf8f2b2f).\n\n[The pull request for the \"stories-sojustrepairit-production\" branch](https://github.com/fluid-project/sjrk-story-telling/pull/83) has been merged at [this commit](https://github.com/fluid-project/sjrk-story-telling/commit/b2ed8522eea36f51b9480fd8c1ba0c52d529edf2).\n"
    }
  ]
}
---
With GitHub Actions, I cannot force a build without creating a commit. In Jenkins, we'd just push the build button to re-run a job.

That means that whenever there's an update to Node.js, we don't have a way to update the actual containers that are running with the new image because we're using FROM node:10-alpine.

I'm proposing we pin the Node.js version here so every new version requires a PR/commit that will in turn trigger the CI/CD job that will deploy new containers.

I think this will have to be our strategy for Docker images going forward.

        