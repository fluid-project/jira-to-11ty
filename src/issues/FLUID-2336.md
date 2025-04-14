---json
{
  "title": "FLUID-2336",
  "summary": "Code cleanup for release 1.0",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2009-03-12T12:22:46.000-0400",
  "updated": "2011-01-13T16:54:19.660-0500",
  "versions": [],
  "fixVersions": [
    "1.0"
  ],
  "components": [
    "Release"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-03-12T12:26:44.000-0400",
      "body": "Bug Parade 1.0 release\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-03-25T11:15:32.000-0400",
      "body": "Clean Up Parade 1.0\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2009-03-25T12:51:16.000-0400",
      "body": "The ImageReorderer.js file is missing a semicolon on line 130 - a line that was added in the fix for <https://fluidproject.atlassian.net/browse/FLUID-2304#icft=FLUID-2304>.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-01-13T16:50:10.117-0500",
      "body": "Reopening these issues in order to change the component to Release.&#x20;\n"
    }
  ]
}
---
Clean up comments, ensure public APIs are fully commented and JSLint new javascript files. Also make sure that the fluid-all.js contains all of the proper dependencies.

Note that this issue should only be in force before Code Freeze. Commits that alter actual code should not be permitted during Code Freeze.

        