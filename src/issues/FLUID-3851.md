---json
{
  "title": "FLUID-3851",
  "summary": "No screen reader feedback when switching between uploader modes",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "Mike Lam",
  "reporter": "Mike Lam",
  "date": "2010-11-18T13:40:39.396-0500",
  "updated": "2011-01-15T15:38:07.599-0500",
  "versions": [],
  "fixVersions": [
    "1.3"
  ],
  "components": [
    "Uploader"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2010-11-18T17:02:46.169-0500",
      "body": "The manual degrade link isn't particularly relevant for users of the HTML 5 version of Uploader. We'll have to reconsider what form it will take in the degraded Flash version of Uploader once we get the full graceful degradation algorithm in place.\n"
    }
  ]
}
---
No screen reader feedback when switching between uploader modes via the 'Switch' link at the top of the uploader page.   We'll want to provide some feedback to update the user that the uploader mode has changed. &#x20;

        