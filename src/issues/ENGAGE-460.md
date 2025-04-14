---json
{
  "title": "ENGAGE-460",
  "summary": "Create a maintenance branch for the 0.3b line of releases",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Michelle D'Souza",
  "reporter": "Colin Clark",
  "date": "2010-02-25T16:16:32.000-0500",
  "updated": "2014-03-03T13:46:00.900-0500",
  "versions": [
    "0.3b"
  ],
  "fixVersions": [
    "0.3b"
  ],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2010-03-09T14:52:07.000-0500",
      "body": "Since we ended up cutting the 0.3b3 release - the performance enhancements - from trunk, I'm wondering if we can actually delete this branch now.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-03-10T02:34:50.000-0500",
      "body": "This should be fine, since we can branch off the tag if we need to cut another beta release.\n"
    }
  ]
}
---
We're on the verge of a brief period of parallel development, where we'll be working both on performance optimizations of the 0.3b release and on tasks for 0.3 final. We should have a branch specifically for the 0.3b line.

        