---json
{
  "title": "SJRK-232",
  "summary": "Ensure site and tests work if hosted from subdirectory",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Do",
  "reporter": "Gregor Moss",
  "date": "2019-02-25T15:30:37.358-0500",
  "updated": "2019-07-09T14:35:43.932-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool Server",
    "Storytelling Tool UI"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Gregor Moss",
      "date": "2019-07-09T14:35:43.928-0400",
      "body": "With the addition of new tests that depend on the server running (<https://fluidproject.atlassian.net/browse/SJRK-237#icft=SJRK-237>) and with the combining of the repositories, this is no longer needed.\n"
    }
  ]
}
---
The site and tests will fail if the site is mounted as a subdirectory on its particular server. I.e. if it is not the root folder of the domain (or subdomain), then things will not work properly.

This may be solved by the efforts of the Architectural Refactoring, so revisit this work then.

        