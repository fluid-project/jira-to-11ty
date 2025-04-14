---json
{
  "title": "FLUID-5275",
  "summary": "The infusion licence file should not be stripped from a custom build",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2014-02-12T16:30:59.533-0500",
  "updated": "2014-02-19T10:40:04.495-0500",
  "versions": [],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Build Scripts"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2014-02-18T07:43:10.607-0500",
      "body": "Comment about location of 3rd party licences in build from the list.\\\n<http://fluid.2324889.n4.nabble.com/Where-license-files-should-reside-in-the-infusion-build-td8917.html>\n"
    },
    {
      "author": "Cindy Li",
      "date": "2014-02-18T09:15:09.844-0500",
      "body": "A pull request has been issued: <https://github.com/fluid-project/infusion/pull/470>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-02-19T10:40:01.302-0500",
      "body": "Merged pull request ( <https://github.com/fluid-project/infusion/pull/470> ) into the project repo at a0b955e15268f7e59f465fecb776cca38c4d8b61\n"
    }
  ]
}
---
Currently a custom build only copies over the directories that are referenced in the dependencies. However, we should also copy over these files: README.md, ReleaseNotes.txt, Infusion-LICENSE.txt

        