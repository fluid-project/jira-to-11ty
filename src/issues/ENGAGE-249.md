---json
{
  "title": "ENGAGE-249",
  "summary": "Artifact View's related artifacts list accidentally binds its container to the whole page, rather than the correct element",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Michelle D'Souza",
  "reporter": "Michelle D'Souza",
  "date": "2010-01-18T16:18:37.000-0500",
  "updated": "2010-01-18T16:22:52.000-0500",
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
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2010-01-18T16:19:26.000-0500",
      "body": "Fixed at r9025\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2010-01-18T16:19:52.000-0500",
      "body": "Thanks to Antranig for catching this one while reviewing our code.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2010-01-18T16:22:52.000-0500",
      "body": "I see this as fixed 🙂\n"
    }
  ]
}
---
There is a typo at line 99 of the Artifact View component (artifact.js), which spells "relatedArtifacts" as "realtedArtifacts." This causes the related artifacts subcomponent (a NavList) to bind itself to the Artifact View's overall container, rather than constraining it to the correct DOM node. This is a one-line fix.

        