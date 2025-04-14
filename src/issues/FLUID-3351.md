---json
{
  "title": "FLUID-3351",
  "summary": "php tests throwing exceptions",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Laurel Williams",
  "reporter": "Laurel Williams",
  "date": "2009-11-03T14:20:30.000-0500",
  "updated": "2009-12-02T13:38:29.000-0500",
  "versions": [],
  "fixVersions": [
    "1.2"
  ],
  "components": [
    "Infusion Builder"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Laurel Williams",
      "date": "2009-11-04T11:07:05.000-0500",
      "body": "Resolved this by making changes in several php files to fix exceptions.\n"
    }
  ]
}
---
I changed the php.ini on my machine. The new ini file had more error checking warnings displaying and revealed several issues with the tests that are preventing the tests from running. This was not noticed elsewhere because no one else has the capability to run the tests (ie. on the server, etc.). Address the warnings so that the php tests run again without throwing exceptions.

        