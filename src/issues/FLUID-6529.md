---json
{
  "title": "FLUID-6529",
  "summary": "Display code coverage results for master and PRs",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2020-07-14T10:40:55.484-0400",
  "updated": "2020-10-29T14:21:34.023-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Build Scripts",
    "Infrastructure"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2020-07-21T11:27:22.334-0400",
      "body": "Giovanni Tirloni suggested using [https://codecov.io](https://codecov.io/) because it integrates better with GitHub.\n"
    },
    {
      "author": "Cindy Li",
      "date": "2020-10-29T14:21:30.903-0400",
      "body": "[The pull request](https://github.com/fluid-project/infusion/pull/1002) has been merged into the project repo main branch at [this commit](https://github.com/fluid-project/infusion/commit/5734c1232a1ebcbd54c59b157f6e2bced7176719).\n"
    }
  ]
}
---
Currently we use testem to run our node and browser tests; the reports from these are then compiled by NYC to report the code coverage. The results are viewable as a summary on the command line when running all the tests, and in CI logs. More details reports are visible from the reports directory and viewable in a browser, but only for tests run locally. 

We should integrate with a service like [coveralls](https://coveralls.io) to make the results of the code coverage more visible both for PRs and for main. 

        