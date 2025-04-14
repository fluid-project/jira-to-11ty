---json
{
  "title": "FLUID-4434",
  "summary": "CSS Generator unit tests can't be run on the build server",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Anastasia Cheetham",
  "date": "2011-09-07T16:53:01.603-0400",
  "updated": "2014-03-03T11:20:12.712-0500",
  "versions": [
    "1.4"
  ],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Infrastructure",
    "Infusion Builder"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2011-09-07T16:57:31.645-0400",
      "body": "I think the issue is that the CSSGenerator javascript files are located in the build-scripts directory and are not included in the package that is deployed on the build site. Perhaps the tests should live elsewhere or the build should be modified to include the build-scripts directory.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2013-09-06T13:50:25.067-0400",
      "body": "The cssGenerator tests are in the uiOptions test directory.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-03-03T11:20:12.711-0500",
      "body": "builder.fluidproject.org has been taken down and there are no immediate plans to replace it. Currently all builds are expected to be generated directly from the grunt build scripts.\n\n<http://fluid.2324889.n4.nabble.com/Infusion-Builder-issues-tp8926.html>\n"
    }
  ]
}
---
As of the 1.4 QA period, the CSS Generator unit tests (in the UI Options tests folder) fail when run through the build site.

        