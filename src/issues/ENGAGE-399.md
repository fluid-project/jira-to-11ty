---json
{
  "title": "ENGAGE-399",
  "summary": "On the daily build or using a standalone servlet container, exceptions are thrown upon loading My Collection, both from the home screen and from Artifact View",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jess Mitchell",
  "reporter": "Colin Clark",
  "date": "2010-02-17T15:54:08.000-0500",
  "updated": "2010-02-17T16:56:19.000-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "My Collection"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2010-02-17T15:54:31.000-0500",
      "body": "Bug Parade Engage 0.3\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-02-17T16:08:57.000-0500",
      "body": "I resolved this issue at r9424 by using relative URLs instead of absolute URLs. This also enabled me to simplify some code in ArtifactCollectView\\.js\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2010-02-17T16:56:19.000-0500",
      "body": "This change looks good - and suggests some similar fixes I will need to make in Guestbook.\n"
    }
  ]
}
---
It appears that user documents are not being correctly created or fetched, causing My Collection to throw an error on load, complaining that user.collection is undefined.

I've traced this down to the fact that both user.js and ArtifactCollectView create hard-baked URLs that don't work with a standalone servlet container. This should be fixed.

        