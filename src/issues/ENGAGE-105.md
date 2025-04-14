---json
{
  "title": "ENGAGE-105",
  "summary": "Ensure that there is only a single copy of each of the required Engage component resources (i.e. One artifactView.html file, etc.)",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "y z",
  "reporter": "Colin Clark",
  "date": "2009-10-02T15:25:06.000-0400",
  "updated": "2009-11-10T13:54:01.000-0500",
  "versions": [],
  "fixVersions": [
    "0.1"
  ],
  "components": [
    "Artifact View",
    "Browse"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/ENGAGE-96/",
      "key": "ENGAGE-96",
      "summary": "Kettle is not ablt to mount artifact.html from mounted engage directory."
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2009-10-09T18:35:50.000-0400",
      "body": "This was resolved for both artifact View and Browse by Yura at r8271 as part of the fix to <https://fluidproject.atlassian.net/browse/ENGAGE-96#icft=ENGAGE-96>.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-11-10T13:54:01.000-0500",
      "body": "Closed as per previous comment\n"
    }
  ]
}
---
At the moment, we have two identical versions of artifact.html and browse.html, one inside kettle itself and one inside engage-client. We should consolidate these into single files, located inside engage-client.

        