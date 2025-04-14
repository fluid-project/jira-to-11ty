---json
{
  "title": "FLUID-5292",
  "summary": "Remove 'Version #' from the overviewPanel component",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Simon Bates",
  "reporter": "Jonathan Hung",
  "date": "2014-03-20T11:39:33.766-0400",
  "updated": "2014-04-23T12:59:14.827-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Overview Panel"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-5276/",
      "key": "FLUID-5276"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-5290/",
      "key": "FLUID-5290",
      "summary": "fluid.version should reflect pre-release state"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Simon Bates",
      "date": "2014-03-25T14:31:08.572-0400",
      "body": "Done in commit <https://github.com/simonbates/infusion/commit/7c1c5da48c84e29c9647bee9bb5ca9bee65832af> on branch <https://fluidproject.atlassian.net/browse/FLUID-5276#icft=FLUID-5276>.\n"
    },
    {
      "author": "Simon Bates",
      "date": "2014-04-02T10:56:41.793-0400",
      "body": "Pull request: <https://github.com/fluid-project/infusion/pull/487>\n"
    }
  ]
}
---
Remove the version number (and the associated javascript) from the overviewPanel template. This will be reimplemented later once FLUID-5290 is addressed.

        