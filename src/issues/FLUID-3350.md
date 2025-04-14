---json
{
  "title": "FLUID-3350",
  "summary": "php tests are broken since directory restructuring",
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
  "date": "2009-11-03T14:18:34.000-0500",
  "updated": "2009-12-02T13:38:20.000-0500",
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
      "date": "2009-11-04T11:05:46.000-0500",
      "body": "Resolved this by moving the php tests to infusion-builder-secure\n"
    }
  ]
}
---
When the builder directories were re-arranged the relative paths from the php tests to the code that was being tested was changed and broken. This should be rectified.

        