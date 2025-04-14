---json
{
  "title": "FLUID-6356",
  "summary": "Overview Panel Icons appear broken",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2018-11-29T13:49:41.756-0500",
  "updated": "2018-11-29T14:28:34.403-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Overview Panel"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Cindy Li",
      "date": "2018-11-29T14:28:34.399-0500",
      "body": "[The pull request](https://github.com/fluid-project/infusion/pull/947) has been merged into the project repo at [this commit](https://github.com/fluid-project/infusion/commit/507a1a8ebed99888d5c797b93f7ad8b7c879710f).\n"
    }
  ]
}
---
Steps to reproduce:

1. Open any of the demos, for example the [OverviewPanel demo](https://build.fluidproject.org/infusion/demos/overviewPanel/)
2. notice that the icons are missing

It seems this is the case because the style for the font family references the font with the wrong capitalization in the name.

        