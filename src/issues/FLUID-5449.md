---json
{
  "title": "FLUID-5449",
  "summary": "Update the version number to 2.0-SNAPSHOT",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2014-06-17T12:08:00.791-0400",
  "updated": "2015-06-26T10:19:00.340-0400",
  "versions": [],
  "fixVersions": [
    "1.9"
  ],
  "components": [
    "Release"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-5290/",
      "key": "FLUID-5290",
      "summary": "fluid.version should reflect pre-release state"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2014-06-17T13:45:03.765-0400",
      "body": "Submitted a pull request\\\n<https://github.com/fluid-project/infusion/pull/536>\n"
    },
    {
      "author": "Cindy Li",
      "date": "2014-06-19T14:43:17.454-0400",
      "body": "Merged into the project repo @ 7be53d11b3b7d67ba8eb1ca827801ecf8cca974b\n"
    },
    {
      "author": "Cindy Li",
      "date": "2014-06-19T15:16:03.176-0400",
      "body": "The version number in the package.json file must conform to semver ([http://semver.org](http://semver.org/)) and be parseable by <https://www.npmjs.org/doc/misc/semver.html>\n\nJustin issued another pull request <https://github.com/fluid-project/infusion/pull/537> for it.\n"
    },
    {
      "author": "Cindy Li",
      "date": "2014-06-19T15:16:18.007-0400",
      "body": "Merged into the project repo @ ee38480e66f43313c3a6c8febe4362cba3e89b47\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-06-26T09:51:35.914-0400",
      "body": "Reopening to change the fix version to 1.9\n"
    }
  ]
}
---
Update the following to point at the 2.0 SNAPSHOT release

package.json\
jshintrc\
fluid.js\
all files using the versioned namespace\
README\
Release Notes\
etc.

        