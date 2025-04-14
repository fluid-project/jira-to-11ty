---json
{
  "title": "IDI-73",
  "summary": "Move production code into master, pull production site from master",
  "tags": "IDI",
  "project": {
    "key": "IDI",
    "title": "IDI"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Open",
  "reporter": "Anastasia Cheetham",
  "date": "2012-05-25T10:18:58.838-0400",
  "updated": "2014-07-09T16:36:54.910-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "IDI site"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
Right now, the production IDI site is being manually pulled from the development branch as needed. We would like to set up a more "official" process where the production branch pulls from the master branch whenever master is updated. (Note that the production code is not yet in the master branch)

        