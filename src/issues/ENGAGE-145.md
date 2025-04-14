---json
{
  "title": "ENGAGE-145",
  "summary": "Default tombstone infomation is displayed instead of not being displayed at all.",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Sub-issue",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "y z",
  "date": "2009-10-21T12:48:40.000-0400",
  "updated": "2010-02-12T14:21:36.000-0500",
  "versions": [
    "0.1"
  ],
  "fixVersions": [
    "0.3b"
  ],
  "components": [
    "Artifact View"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/ENGAGE-149/",
      "key": "ENGAGE-149"
    },
    {
      "type": "Related to",
      "url": "/browse/ENGAGE-160/",
      "key": "ENGAGE-160"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-02-05T14:12:29.000-0500",
      "body": "Bug Parade Engage 0.3\n"
    },
    {
      "author": "y z",
      "date": "2010-02-11T15:35:57.000-0500",
      "body": "This bug is fixed with commit r9364 by Colin.\n"
    },
    {
      "author": "y z",
      "date": "2010-02-11T15:36:18.000-0500",
      "body": "This bug is fixed with commit r9364 by Colin.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-02-12T14:21:36.000-0500",
      "body": "I reviewed and committed Yura's patch with a completely reworked Artifact View. It fixes this issue.\n"
    }
  ]
}
---
In case some of the tombstone information unavailable, no text should be displayed at all.&#x20;

Go to: <http://build.fluidproject.org:8095/engage/artifacts/view.html?mmi&1984.077.0021> and notice "Here goes a longer artifact provenance!"

        