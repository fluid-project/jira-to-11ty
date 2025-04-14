---json
{
  "title": "ENGAGE-149",
  "summary": "Artifact view has displays description text \"Description Information\", but instead should be invisible since there is no desctiption available for the artifact.",
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
  "date": "2009-10-21T13:07:52.000-0400",
  "updated": "2010-02-12T14:23:22.000-0500",
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
      "url": "/browse/ENGAGE-145/",
      "key": "ENGAGE-145",
      "summary": "Default tombstone infomation is displayed instead of not being displayed at all."
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
      "date": "2010-02-05T14:12:40.000-0500",
      "body": "Bug Parade Engage 0.3\n"
    },
    {
      "author": "y z",
      "date": "2010-02-11T15:36:57.000-0500",
      "body": "This bug is fixed with commit r9364 by Colin.\n"
    },
    {
      "author": "y z",
      "date": "2010-02-11T15:37:09.000-0500",
      "body": "This bug is fixed with commit r9364 by Colin.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-02-12T14:23:22.000-0500",
      "body": "I reviewed and committed Yura's patch with a completely reworked Artifact View. It fixes this issue.\n"
    }
  ]
}
---
If there is no description available, it must be hidden at all times.

Go to: <http://build.fluidproject.org:8095/engage/artifacts/view.html?mccord&MP-0000.25.1023> and notice "Description Information" instead of hidden description.&#x20;

        