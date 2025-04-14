---json
{
  "title": "FLUID-4383",
  "summary": "Relative urls in the generated uio themes are incorrect",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Justin Obara",
  "date": "2011-07-29T12:20:49.384-0400",
  "updated": "2013-10-04T09:57:32.073-0400",
  "versions": [],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-4395/",
      "key": "FLUID-4395",
      "summary": "Modify the jscssp parser to put urls into the model"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2011-07-29T12:21:44.754-0400",
      "body": "Bug Parade Infusion\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-08-31T13:39:48.747-0400",
      "body": "Pull request <https://github.com/fluid-project/infusion/pull/139> merged into project repo at 18180764a8f36ea8b8bccd23e8a4fe9c07c65106\n"
    }
  ]
}
---
Because the generated style sheets used by UI Options are put in a new location, all of the relative urls are broken ( these are for things like images and etc. that are referenced by the stylesheets).

These paths should be corrected during generation of the stylesheets.

        