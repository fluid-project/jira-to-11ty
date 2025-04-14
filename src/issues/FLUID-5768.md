---json
{
  "title": "FLUID-5768",
  "summary": "Fix broken links on the build.fluidproject.org site",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Justin Obara",
  "date": "2015-09-16T08:27:17.970-0400",
  "updated": "2017-02-27T15:49:12.815-0500",
  "versions": [],
  "fixVersions": [
    "2.0"
  ],
  "components": [
    "Infrastructure",
    "Website"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2015-09-16T08:58:21.065-0400",
      "body": "Submitted a pull request: \\\n<https://github.com/fluid-project/build.fluidproject.org/pull/17>\n"
    },
    {
      "author": "Cindy Li",
      "date": "2015-09-16T11:16:17.877-0400",
      "body": "Merged @ 61ab7bb5e160bc182b29d7323e1e07c2b804d128\n"
    }
  ]
}
---
With recent changes to the Fluid Infusion repository such as <https://github.com/fluid-project/infusion/pull/591>, the links on the build site have become out of date.&#x20;

Giovani discovered the following dead links while upgrading the server that the build site is deployed to:

<http://build.fluidproject.org/infusion/tests/framework-tests/enhancement/html/ProgressiveEnhancement-test.html>

        