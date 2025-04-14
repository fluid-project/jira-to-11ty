---json
{
  "title": "FLUID-6718",
  "summary": "build scripts do not produce minified bundles",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Not A Bug",
  "assignee": "Colin Clark",
  "reporter": "Tony Atkins [RtF]",
  "date": "2022-02-15T07:30:18.727-0500",
  "updated": "2024-07-17T08:06:32.293-0400",
  "versions": [
    "4.0"
  ],
  "fixVersions": [],
  "components": [
    "Build Scripts"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Tony Atkins [RtF]",
      "date": "2022-02-15T07:37:18.524-0500",
      "body": "In reviewing with Antranig, seems like post <https://fluidproject.atlassian.net/browse/FLUID-6594#icft=FLUID-6594> intentionally updated to only produce minified bundles, which took over the main names.\n"
    }
  ]
}
---
In working with 4.0.0 for the first time in a downstream project, I noticed that the tests failed because they were trying to use infusion-all.min.js.  That no longer appears to be part of the npm package.

        