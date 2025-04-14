---json
{
  "title": "FLUID-3432",
  "summary": "New minified build has all files included in components/uiOptions/html/UIOptions.html and  components/uploader/html/Uploader.html when the old one includes InfusionAll.js",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Michelle D'Souza",
  "reporter": "y z",
  "date": "2009-12-15T14:31:32.000-0500",
  "updated": "2011-01-14T11:11:26.137-0500",
  "versions": [],
  "fixVersions": [
    "1.2"
  ],
  "components": [
    "Infrastructure",
    "Infusion Builder"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-3407/",
      "key": "FLUID-3407",
      "summary": "Refactor the Infusion Ant build scripts to avoid the need for minifying during each build."
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2009-12-16T12:32:58.000-0500",
      "body": "The refactoring in <https://fluidproject.atlassian.net/browse/FLUID-3407#icft=FLUID-3407> caused this bug\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2010-01-07T12:38:55.000-0500",
      "body": "I'm unable to recreate this issue.\n"
    },
    {
      "author": "y z",
      "date": "2010-01-07T16:13:19.000-0500",
      "body": "After testing the build script with freshly checked out version of fluid-all the problem is fixed.\n"
    }
  ]
}
---
When running Infusion Test new build script minified version has all files included in components/uiOptions/html/UIOptions.html and  components/uploader/html/Uploader.html when the old one includes InfusionAll.js

        