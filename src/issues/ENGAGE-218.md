---json
{
  "title": "ENGAGE-218",
  "summary": "Build scripts are broken due to the refactoring in FLUID-3407",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Michelle D'Souza",
  "reporter": "Michelle D'Souza",
  "date": "2009-12-16T12:34:14.000-0500",
  "updated": "2014-03-03T14:17:26.888-0500",
  "versions": [],
  "fixVersions": [],
  "components": [],
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
      "date": "2009-12-16T12:34:47.000-0500",
      "body": "The refactoring in FLUID-3407 caused this bug\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2009-12-27T18:42:10.000-0500",
      "body": "It appears that the build scripts are broken due to moving the definition of 'base-dir' out of the build.xml file and into the build.properties file.\n"
    }
  ]
}
---

        