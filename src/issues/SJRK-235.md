---json
{
  "title": "SJRK-235",
  "summary": "Explore remote database administration solutions",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Open",
  "reporter": "Gregor Moss",
  "date": "2019-03-07T17:06:30.078-0500",
  "updated": "2019-03-07T17:15:14.831-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool Server"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
Investigate potential solutions to enable remote editing and administering of the Storytelling database content, e.g. changing a story's content, altering the author's name, etc.

One such solution would be exposing the Couch port (5984) to the app server container via docker-compose, and then SSH tunneling into the app server and completing whatever work needs doing at that point.

We may eventually want to create an HTTP endpoint, similar to the story deletion one, to allow for editing of a story and protected by Basic Authentication.

        