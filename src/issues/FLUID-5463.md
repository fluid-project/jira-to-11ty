---json
{
  "title": "FLUID-5463",
  "summary": "ReleaseNotes are missing from the build",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2014-07-09T08:59:51.660-0400",
  "updated": "2015-06-26T10:15:09.591-0400",
  "versions": [
    "1.5"
  ],
  "fixVersions": [
    "1.5.1",
    "1.9"
  ],
  "components": [
    "Release"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2014-07-09T09:08:32.792-0400",
      "body": "Submitted pull requests:\n\n1.5.1: <https://github.com/fluid-project/infusion/pull/542>\n\n2.0: <https://github.com/fluid-project/infusion/pull/541>\n"
    },
    {
      "author": "Cindy Li",
      "date": "2014-07-09T09:25:43.277-0400",
      "body": "The pull request for the master branch (<https://github.com/fluid-project/infusion/pull/541>) has been merged into the project repo @ 05965312ac8cad2db1d396d9d1267b7066c8ad7f\n"
    },
    {
      "author": "Cindy Li",
      "date": "2014-07-09T11:13:04.774-0400",
      "body": "The pull request for the infusion-1.5.x branch (<https://github.com/fluid-project/infusion/pull/542>) has been merged into the project repo @ 3779908f18af7d297784f490c8b3c6f6a5777051\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-06-26T09:51:28.824-0400",
      "body": "Reopening to change the fix version to 1.9\n"
    }
  ]
}
---
The release notes were converted from a .txt to a .md file; however, the build scripts are explicitly looking for a .txt file. This is preventing them from being added to the build. We should at least fix the build scripts to look for the correct file, and if possible, make it more robust.

        