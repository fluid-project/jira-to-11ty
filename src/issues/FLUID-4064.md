---json
{
  "title": "FLUID-4064",
  "summary": "Release 1.3.1: Double-check licences and copyrights",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Anastasia Cheetham",
  "date": "2011-02-16T09:46:23.694-0500",
  "updated": "2011-02-22T16:07:53.667-0500",
  "versions": [],
  "fixVersions": [
    "1.3.1"
  ],
  "components": [
    "Release"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2011-02-22T10:23:39.092-0500",
      "body": "A number of LICENSE.txt files don't properly reflect the license under which we've chosen to redistribute third party code with Infusion, in the case of dually-licensed code. We should modify the LICENSE.txt to include only the terms of the license we've chosen, not the others. Files I've noticed:\n\njQuery-LICENSE.txt\\\nfastXmlPull-LICENSE.txt\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-02-22T16:07:53.663-0500",
      "body": "Pushed colin's pull request at efb1eefea2224e2dfccc\n"
    }
  ]
}
---
Ensure all javascript files have a license and up-to-date copyright. Also make sure third-party code is compatibly licensed and a license file is included in the same directory as the code.&#x20;

        