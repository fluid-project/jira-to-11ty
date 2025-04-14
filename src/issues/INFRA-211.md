---json
{
  "title": "INFRA-211",
  "summary": "CI infusion-docs is failing",
  "tags": "INFRA",
  "project": {
    "key": "INFRA",
    "title": "Infrastructure"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Resolved",
  "resolution": "Fixed",
  "assignee": "Alan Harnum",
  "reporter": "Giovanni Tirloni",
  "date": "2018-08-27T13:47:59.263-0400",
  "updated": "2018-09-17T14:43:29.330-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-6324/",
      "key": "FLUID-6324",
      "summary": "docpad - Cannot load plugins"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Giovanni Tirloni",
      "date": "2018-08-27T13:49:30.141-0400",
      "body": "Automating this so the workflow doesn't depend on a human deploying to the 'deploy' branch depends on fixing <https://fluidproject.atlassian.net/browse/FLUID-6324#icft=FLUID-6324>.\n"
    },
    {
      "author": "Alan Harnum",
      "date": "2018-09-17T14:43:22.610-0400",
      "body": "Rolled this back to using the gh-pages branch. I'm not sure if the deploy branch was deleted or never actually created.\n"
    }
  ]
}
---
deploy branch seems to be missing

```
[EnvInject] - Loading node environment variables.
Building on master in workspace /var/lib/jenkins/workspace/website-docs.fluidproject.org
Wiping out workspace first.
Cloning the remote Git repository
Cloning repository https://github.com/fluid-project/infusion-docs.git
 > git init /var/lib/jenkins/workspace/website-docs.fluidproject.org # timeout=10
Fetching upstream changes from https://github.com/fluid-project/infusion-docs.git
 > git --version # timeout=10
 > git fetch --tags --progress https://github.com/fluid-project/infusion-docs.git +refs/heads/*:refs/remotes/origin/*
 > git config remote.origin.url https://github.com/fluid-project/infusion-docs.git # timeout=10
 > git config --add remote.origin.fetch +refs/heads/*:refs/remotes/origin/* # timeout=10
 > git config remote.origin.url https://github.com/fluid-project/infusion-docs.git # timeout=10
Fetching upstream changes from https://github.com/fluid-project/infusion-docs.git
 > git fetch --tags --progress https://github.com/fluid-project/infusion-docs.git +refs/heads/*:refs/remotes/origin/*
 > git rev-parse origin/deploy^{commit} # timeout=10
 > git rev-parse deploy^{commit} # timeout=10
ERROR: Couldn't find any revision to build. Verify the repository and branch configuration for this job.
```

        