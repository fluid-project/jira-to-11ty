---json
{
  "title": "FLUID-3431",
  "summary": "Tests/manual-tests/lib/fckeditor/editor/_source/internals/fcktools_ie.js: is empty in the new Infusion Test build (both minified and not minified)",
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
  "date": "2009-12-15T14:28:37.000-0500",
  "updated": "2011-01-14T11:12:36.655-0500",
  "versions": [],
  "fixVersions": [
    "1.2"
  ],
  "components": [
    "Infrastructure"
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
      "date": "2009-12-16T12:31:44.000-0500",
      "body": "The refactoring in <https://fluidproject.atlassian.net/browse/FLUID-3407#icft=FLUID-3407> caused this bug\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2010-01-06T14:59:58.000-0500",
      "body": "I'm unable to recreate this issue.\n"
    },
    {
      "author": "y z",
      "date": "2010-01-06T16:27:06.000-0500",
      "body": "After testing the build script with the latest version of fluid-all confirmed that the files are now correct for both minified and unminified options.\n"
    }
  ]
}
---
When running build scripts for Infusion testing (ant infusionAllBuilds) Tests/manual-tests/lib/fckeditor/editor/\_source/internals/fcktools\_ie.js: is empty in both minified and not minified versions.

        