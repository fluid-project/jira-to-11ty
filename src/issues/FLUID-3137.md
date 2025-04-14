---json
{
  "title": "FLUID-3137",
  "summary": "CustomBuild.html posts to jsonProcessor.php instead of to builder.php",
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
  "date": "2009-08-25T14:26:03.000-0400",
  "updated": "2009-10-22T16:21:39.000-0400",
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
      "date": "2009-08-25T15:04:05.000-0400",
      "body": "resolved this.\n"
    }
  ]
}
---
All php references should be filtered through builder.php to enable code to be hidden from direct hits via the web browser.

        