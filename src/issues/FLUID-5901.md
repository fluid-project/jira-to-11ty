---json
{
  "title": "FLUID-5901",
  "summary": "jqUnit.assertDeepEq will compare all primitive values as equal",
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
  "date": "2016-05-03T21:28:39.845-0400",
  "updated": "2016-05-04T16:32:44.778-0400",
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
      "author": "Cindy Li",
      "date": "2016-05-04T16:32:38.802-0400",
      "body": "The pull request <https://github.com/fluid-project/infusion/pull/709> has been merged into the project repo master branch at 35d924eafc28ff601c2f6f69123a25d32a360362\n"
    }
  ]
}
---
The algorithm applied by jqUnit.assertDeepEq (ultimately punching through to QUnit.propEqual) will consider all primitive values as equivalent, which is incredibly unhelpful. This caused significant problems with <https://github.com/GPII/windows/pull/59> where this utility was mistakenly used to consider that `true` was equal to `false`. We need to adjust this implementation to give sensible results in these cases.

        