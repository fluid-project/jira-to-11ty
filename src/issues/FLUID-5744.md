---json
{
  "title": "FLUID-5744",
  "summary": "Provide a means to run the framework unit tests in Node.js",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Open",
  "reporter": "Colin Clark",
  "date": "2015-08-17T16:53:47.496-0400",
  "updated": "2021-07-29T01:30:16.224-0400",
  "versions": [
    "1.9",
    "2.0",
    "3.0"
  ],
  "fixVersions": [
    "5.0"
  ],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-5986/",
      "key": "FLUID-5986",
      "summary": "VM-based tests should run the basic node tests as well as the browser tests"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2015-08-20T22:06:27.420-0400",
      "body": "We should probably just fold the thing called node-jqUnit into the framework image - this will eliminate boggle about whether it has Infusion as a dependency or not. Although it only depends on a very small part of the framework, I think there is little prospect of our turning that part of the framework into a \"micromodule\" any time soon.\n"
    },
    {
      "author": "Alan Harnum",
      "date": "2016-10-21T11:43:08.625-0400",
      "body": "The <https://fluidproject.atlassian.net/browse/FLUID-5986#icft=FLUID-5986> PR discussion at <https://github.com/fluid-project/infusion/pull/767#discussion_r84359182> has some relevance to this issue.\n"
    }
  ]
}
---
We support the use of the core, non-view portions of the Infusion framework in Node.js, and hope to publish a npm module for Infusion soon.

However, there is currently no way to run the Infusion framework unit test suite in Node.js (or at least the subset of them that are Node.js-friendly).

jqUnit and node-jqunit does enable tests to run in both environments with a little bit of work. We should create a new test runner file that aggregates and runs all appropriate tests in Node.js

        