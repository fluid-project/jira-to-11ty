---json
{
  "title": "ENGAGE-131",
  "summary": "CabinetTests.js is full of cut and pasted logic",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Colin Clark",
  "date": "2009-10-16T18:55:34.000-0400",
  "updated": "2009-11-26T15:01:40.000-0500",
  "versions": [
    "0.1"
  ],
  "fixVersions": [
    "0.3b"
  ],
  "components": [
    "Cabinet"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-11-26T15:01:40.000-0500",
      "body": "Cleaned up at r8749, refactored and was able to remove a few hundred lines of code.\n"
    }
  ]
}
---
I was going through linting CabinetTests.js and noticed that CabinetTests.js has a fair bit of duplicated logic in each test, related to setting up options for the Cabinet. This should be factored out in one place to avoid duplication and reduce the number of lines of code.

        