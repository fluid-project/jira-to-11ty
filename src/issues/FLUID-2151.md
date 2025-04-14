---json
{
  "title": "FLUID-2151",
  "summary": "Fix UI Options Tests & Fix Integration of UI Options with Sakai Mock-up",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jacob Farber",
  "reporter": "Michelle D'Souza",
  "date": "2009-01-21T08:27:53.000-0500",
  "updated": "2011-01-18T12:30:34.548-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Jacob Farber",
      "date": "2009-01-21T10:20:41.000-0500",
      "body": "Updated core selectors and CSS\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-01-22T13:30:31.000-0500",
      "body": "Verified fix using:\n\nFF2, FF3, Opera 9.5, Safari 3 (Mac OS 10.5)\\\nFF2, FF3, IE6, IE7, Opera 9.5 (Win XP)\\\nFF3, IE7 (Win Vista)\n"
    }
  ]
}
---
Several of the unit tests for UI Options have broken recently - they were working for the 0.7 release. \
The integration of UI Options into the Sakai mockup has also broken recently. Likely the two things are related.

        