---json
{
  "title": "SJRK-84",
  "summary": "Implement \"Browse stories\"",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Done",
  "reporter": "Gregor Moss",
  "date": "2018-04-25T17:29:27.366-0400",
  "updated": "2018-05-29T10:30:21.232-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool UI"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
Implement the "Browse stories" functionality in the storytelling tool interface.

This entails:

* Making a UI that lists stories
* Refactoring "uiHolder" into a common 'shell' for any page which can be reused to View, Edit, Browse, etc. stories

        