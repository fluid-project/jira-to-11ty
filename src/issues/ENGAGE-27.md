---json
{
  "title": "ENGAGE-27",
  "summary": "Pull data from CouchDB into the artifact view component",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Sub-task",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "y z",
  "reporter": "Michelle D'Souza",
  "date": "2009-07-13T13:16:57.000-0400",
  "updated": "2009-11-03T11:50:57.000-0500",
  "versions": [],
  "fixVersions": [
    "0.1"
  ],
  "components": [
    "Artifact View"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/ENGAGE-36/",
      "key": "ENGAGE-36"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2009-07-13T13:39:50.000-0400",
      "body": "Data for the 'related objects' component will also need to come from CouchDB eventually. Hopefully the work for this issue will be reusable there.&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-09-21T16:41:48.000-0400",
      "body": "Bug Parade Engage 0.1\n"
    },
    {
      "author": "Colin Clark",
      "date": "2009-10-14T16:29:15.000-0400",
      "body": "Yura and Justin have done excellent work on this umbrella issue, and the work is complete for Engage 0.1\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-11-03T11:50:57.000-0500",
      "body": "Closed as per previous comment\n"
    }
  ]
}
---
The artifact view currently uses static data from the file system. For an end to end example, we must be able to pull data from CouchDB.&#x20;

        