---json
{
  "title": "ENGAGE-345",
  "summary": "My Collection should implement resource-oriented URLs for collecting/uncollection artifacts",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Task",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Colin Clark",
  "date": "2010-02-08T16:30:05.000-0500",
  "updated": "2014-03-03T14:12:35.838-0500",
  "versions": [
    "0.3b"
  ],
  "fixVersions": [
    "0.3b"
  ],
  "components": [
    "My Collection"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/ENGAGE/ENGAGE-345/ENGAGE-345-a.patch",
      "filename": "ENGAGE-345-a.patch"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/ENGAGE/ENGAGE-345/ENGAGE-345-b.patch",
      "filename": "ENGAGE-345-b.patch"
    }
  ],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2010-02-08T16:30:19.000-0500",
      "body": "Bug Parade Engage 0.3\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-02-08T20:40:09.000-0500",
      "body": "Here's an in-progress patch that includes a new acceptor for the collectionOperations service. I've managed to break Artifact View, so this isn't quite functioning yet, but we're close.\n"
    },
    {
      "author": "Svetoslav Nedkov",
      "date": "2010-02-09T08:31:23.000-0500",
      "body": "A new patch added on top of the \"a\" patch.\n\nChanges to the rendering options for artifact view so that the collect link and status are shown.\\\nChanged resource oriented URL parsing.\\\nChanged My Collection service to properly parse the query parameters.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-02-16T11:57:22.000-0500",
      "body": "This issue was addressed in the myCollection-tryout branch last week. It still needs to be committed to trunk and then reviewed.\n"
    }
  ]
}
---
Previously My Collection's "collectionOperations" service implemented resource oriented URLs by actually changing EngageApp.js. These changes caused other services to break.

In order to implement URLs like this:

/users/\[userId]/artifacts/\[artifactId]

* POST collects the specified artifact
* DELETE uncollections

We should create a custom acceptor that will parse the pathInfo and do the right thing.

        