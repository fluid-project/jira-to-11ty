---json
{
  "title": "FLUID-6135",
  "summary": "Add code coverage reporting for client-side tests...",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Tony Atkins [RtF]",
  "date": "2017-02-27T11:29:13.590-0500",
  "updated": "2024-07-22T09:17:53.539-0400",
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
      "author": "Tony Atkins [RtF]",
      "date": "2017-05-08T04:06:33.349-0400",
      "body": "<https://github.com/fluid-project/infusion/pull/822>\n"
    },
    {
      "author": "Tony Atkins [RtF]",
      "date": "2018-05-24T03:57:36.502-0400",
      "body": "The linked pull was merged.\n"
    }
  ]
}
---
We have been [reviewing](https://github.com/GPII/gpii-testem/pull/1) the new [gpii-testem](https://www.npmjs.com/package/gpii-testem) package, which provides the ability to instrument and gather code coverage for client-side browser tests using Testem and Istanbul.

Antranig Basman and I discussed submitting a self-contained PR to:

1. Convert the existing testem.json file to work with gpii-testem.
2. Collate node and browser test coverage into a single report.&#x20;

        