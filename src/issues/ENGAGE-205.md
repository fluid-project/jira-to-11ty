---json
{
  "title": "ENGAGE-205",
  "summary": "Create a component for the Artifact Comments",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "New Feature",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Duplicate",
  "assignee": "joan garcia",
  "reporter": "joan garcia",
  "date": "2009-11-26T12:44:48.000-0500",
  "updated": "2010-02-08T17:24:42.000-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Artifact View",
    "Kettle"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "joan garcia",
      "date": "2009-11-26T12:53:54.000-0500",
      "body": "Second doubt: business rule for \"Report abuse\" button ?\n"
    },
    {
      "author": "James Yoon",
      "date": "2009-11-26T14:08:14.000-0500",
      "body": "\"Report abuse\" functionality hasn't been fully fleshed out, but the idea scaffold is as follows:\n\n* User taps \"Report abuse\" for a comment\n* List of reported comments abuse on museum moderator/administrator's side would update to include said comment\n* At this list, moderator should be able to see all the abuse-flagged comments, and delete/hide comments as necessary\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2010-02-02T10:19:02.000-0500",
      "body": "mccord-pilot\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-02-08T17:24:37.000-0500",
      "body": "This issue is covered by a number of newer and more specific JIRA issues.\n"
    }
  ]
}
---
Create a component to handle the artifact view comments.

* Expected business rules:
* getCommentsList.
* post a comment.
* delete a comment.
* report abuse.

First doubt:

* how do i know that a post is mine (ME mark in comments list) ?

        