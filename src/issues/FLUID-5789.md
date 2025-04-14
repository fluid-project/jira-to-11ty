---json
{
  "title": "FLUID-5789",
  "summary": "Provide a script for publishing dev version to NPM",
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
  "reporter": "Justin Obara",
  "date": "2015-10-08T10:22:35.554-0400",
  "updated": "2017-02-27T15:49:15.214-0500",
  "versions": [],
  "fixVersions": [
    "2.0"
  ],
  "components": [
    "Build Scripts",
    "Infrastructure",
    "Release"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-5797/",
      "key": "FLUID-5797"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2015-10-15T15:30:00.742-0400",
      "body": "Submitted a pull request:\\\n<https://github.com/fluid-project/fluid-publish/pull/1>\n"
    }
  ]
}
---
For publishing Infusion as an NPM module, it would be useful to provide a script for automating the task. Publishing a release to npm should be as easy as running npm publish, however publishing a dev build will take some more work, which is why the script is needed.

The script should be able to do the following:

1\) Update the package.json to have the correct version number\
2\) publish to NPM\
3\) add the "dev" dist-tag\
4\) clean up package.json (reset to head).

Unfortunately NPM doesn't respect semver's notion of build releases (+buildID). To work around this we will publish dev builds using the following version format.

major.minor.patch-dev.yyyymmddThhmmssZ.shortCommitHash

e.g. 2.0.0-dev.20151007T134312Z.8c33cd4

The date portion is to ensure that the builds are ordered correctly as the commit hash is random. The date format use the ISO8601 format at yyyymmddThhmmssZ where time is in UTC.

Notes:\
To get the shorthand of the commit hash use \
git rev-parse --verify --short HEAD

To get the UNIX timestamp \
git show -s --format=%ct \<mytagname>^{commit}

To convert the timestamp use the javascript Date object but multiply the timestamp by 1000 first. Then you'd need to construct the ISO8601 formatted string from this.

        