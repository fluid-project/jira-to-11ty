---json
{
  "title": "FLUID-6569",
  "summary": "Use headless versions of browsers for automated tests",
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
  "reporter": "Justin Obara",
  "date": "2020-10-29T15:26:54.025-0400",
  "updated": "2020-10-29T16:44:45.994-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Testing Infrastructure"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Cindy Li",
      "date": "2020-10-29T16:44:42.523-0400",
      "body": "[The pull request](https://github.com/fluid-project/infusion/pull/1029#pullrequestreview-520065089) has been merged into the project repo main branch at [this commit](https://github.com/fluid-project/infusion/commit/2d029def47ab4ed3f0073bb5e8748b1a534d19d9).\n"
    }
  ]
}
---
Currently we have [npm scripts](https://github.com/fluid-project/infusion/blob/b9514a159fb036824729cf8b3736132e2b395304/package.json#L24-L32) for running browser tests through testem. The [configuration](https://github.com/fluid-project/infusion/blob/b9514a159fb036824729cf8b3736132e2b395304/tests/testem.js#L28) should be updated to use the Headless versions of browsers so that they are less disruptive for the development machine. With this we could also remove the vagrant setup that is used as an alternative for running the tests.

        