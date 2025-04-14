---json
{
  "title": "FLUID-6104",
  "summary": "fluid-publish module should use a \"+\" to separate the build metadata",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Justin Obara",
  "date": "2017-01-09T09:54:54.045-0500",
  "updated": "2018-04-06T09:52:42.185-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Build Scripts",
    "Release"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2017-01-18T14:11:58.281-0500",
      "body": "Upon further review it seems that build metadata doesn't affect precedence of builds. I wonder if we'd prefer to keep things as is so that they are ordered. It's not clear if this will be the case with using buildmetada.\n\n<http://semver.org/#spec-item-11>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2018-04-06T09:51:10.805-0400",
      "body": "In doing some further investigation into build metadata while working on <https://fluidproject.atlassian.net/browse/FLUID-6270#icft=FLUID-6270> I found that npm strips out this information. It seems the logic is that because it can't be used to sort versions, as build metadata give equal precedence, it is to be ignored and thus stripped out.\n\nSee:\n\n* <https://github.com/npm/npm/issues/12825>\n* <https://github.com/npm/node-semver/pull/221> (pr to add build metadata to npm-semver, but as of yet has been ignored)\n"
    },
    {
      "author": "Justin Obara",
      "date": "2018-04-06T09:52:42.183-0400",
      "body": "We actually want to use the data and commit has for sorting, so this seems like it would be counter productive. Also, if the build metadata is stripped it will just end up creating a mess of our npm repo.\n"
    }
  ]
}
---
Currently fluid-publish creates dev builds and appends the date and commit hash to the end. This is currently separated by a "." but should be separate by a "+" according to <http://semver.org/#spec-item-10>

        