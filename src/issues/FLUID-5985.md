---json
{
  "title": "FLUID-5985",
  "summary": "Fix trunk-breaking bug introduced by FLUID-5973 in non-browser contexts",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Alan Harnum",
  "reporter": "Alan Harnum",
  "date": "2016-10-20T08:24:20.620-0400",
  "updated": "2024-07-22T09:20:39.054-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-5986/",
      "key": "FLUID-5986"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Alan Harnum",
      "date": "2016-10-20T09:58:04.430-0400",
      "body": "PR: <https://github.com/fluid-project/infusion/pull/766>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2016-10-20T13:49:49.413-0400",
      "body": "Merged PR ( <https://github.com/fluid-project/infusion/pull/766> ) into the project-repo at 68351aadf504e6aee4827468934a1f2e341ffb9c\n"
    }
  ]
}
---
Per Antranig Basman's comment here: <https://github.com/fluid-project/infusion/pull/577#issuecomment-255065212>

The platform detection is functionally assuming Infusion is only run in browser contexts and has the 'navigator' object available. This is obviously not true.

        