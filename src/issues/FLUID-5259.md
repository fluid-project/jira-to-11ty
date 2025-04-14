---json
{
  "title": "FLUID-5259",
  "summary": "Create a new build.fluidproject.org page hosted on github pages",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Justin Obara",
  "date": "2014-01-24T10:54:00.116-0500",
  "updated": "2014-04-04T15:28:10.903-0400",
  "versions": [],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Demos",
    "Infrastructure",
    "Website"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2014-01-29T15:19:03.167-0500",
      "body": "Merged pull request ( <https://github.com/fluid-project/build.fluidproject.org/pull/8> ) into the project repo at b1d0279a3f366573825b563960f36a3ec3ad6910\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2014-04-04T15:28:10.897-0400",
      "body": "We currently have a landing page on build.fluidproject.org that provides links to our demos.&#x20;\n"
    }
  ]
}
---
We should move the build.fluidproject.org page to be hosted by github pages and move away from continuum as for CI. We need to investigate how to link to our source files (demos, tests, and etc.) that are latest from master. Additionally we need a way to trigger a build for infusion and serve it's products.&#x20;

When we create the github page we should use the build.fluidproject.org custom url to point at it. Additionally we should try to preserve as many URLS as possible, in particular for the metadata demo, exploration tool, text-to-speech demo, and videoPlayer.

        