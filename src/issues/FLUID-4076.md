---json
{
  "title": "FLUID-4076",
  "summary": "FluidView Tests, Dead man's blur test failed.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Harris Wong",
  "date": "2011-02-17T14:54:24.443-0500",
  "updated": "2011-02-23T10:05:12.862-0500",
  "versions": [],
  "fixVersions": [
    "1.3.1"
  ],
  "components": [
    "Framework"
  ],
  "environment": "IE8, IE7\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2011-02-18T01:12:12.536-0500",
      "body": "Fixed at revision ce28f7dbd5d21b94ee84e06a4bd4745e4b752c6d. Please consult commentary at <http://www.mail-archive.com/fluid-work@fluidproject.org/msg05878.html> and description on <https://fluidproject.atlassian.net/browse/FLUID-3487#icft=FLUID-3487> for details of why the current DMB implementation is the way it is. It is unfortunately impossible to test reliably without manual testing or \"robot\" simulation, but this implementation is now regularly receiving QA as part of CollectionSpace.\n"
    }
  ]
}
---
Go to <http://build.fluidproject.org/infusion/tests/framework-tests/core/html/FluidView-test.html> with IE8/IE7

Fluid View Tests: Dead man's blur test - nonExcluded component one (1, 2, 3) fails.

        