---json
{
  "title": "FLUID-5786",
  "summary": "Rename Infusion's development prerelease version string from \"SNAPSHOT\" to \"dev\"",
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
  "reporter": "Colin Clark",
  "date": "2015-10-06T15:22:15.717-0400",
  "updated": "2016-07-08T09:03:05.977-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Build Scripts"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2015-10-06T15:24:27.510-0400",
      "body": "see [http://semver.org](http://semver.org/) point 10 for build metadata in the version number.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-10-06T15:24:57.890-0400",
      "body": "git rev-parse --verify --short HEAD\n\ncan be used to get the short form of the SHA commit hash\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-10-06T15:31:59.511-0400",
      "body": "Submitted a pull request:\\\n<https://github.com/fluid-project/infusion/pull/641>\n"
    }
  ]
}
---
Semver's convention for naming releases goes like this:

Major.Minor.Patch-prerelease+buildMetadata

Currently, we use the prerelease version string of "SNAPSHOT," which is a relic from our days using Maven for building Java software. Being hip, edgy, modern developers, we can probably use something a bit more succinct and descriptive instead.

Let's change our development prerelease version to "dev" instead.

        