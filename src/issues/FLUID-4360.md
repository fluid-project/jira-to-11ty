---json
{
  "title": "FLUID-4360",
  "summary": "Use of ad hoc deep equivalence function jqUnit.assertDeepEq should be replaced by standard facility in framework",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2011-07-27T16:09:24.889-0400",
  "updated": "2024-07-22T09:41:39.602-0400",
  "versions": [
    "1.3.1"
  ],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "Testing Infrastructure"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-4340/",
      "key": "FLUID-4340",
      "summary": "jqUnit.assertDeepEq has exponential computational time when comparing two trees with a lot of levels"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2011-07-28T13:55:38.750-0400",
      "body": "Pull request <https://github.com/fluid-project/infusion/pull/118> was merged into the project repo at 7c1c7f713861e6abc1c2ac92d46937fa9a1fa79a\n"
    }
  ]
}
---
An "ad hoc" equivalence function was added to our jqUnit integration some time ago. In a recent refresh of the base framework, an implementation was provided that performs better and also provides more readable diagnostics. We should remove our implementation and forward the assertDeepEq function to the base implementation.

        