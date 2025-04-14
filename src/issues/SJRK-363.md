---json
{
  "title": "SJRK-363",
  "summary": "Reorganize CI jobs",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Open",
  "assignee": "Giovanni Tirloni",
  "reporter": "Giovanni Tirloni",
  "date": "2020-06-15T11:06:09.777-0400",
  "updated": "2020-06-15T11:06:15.722-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
The master branch currently has job definitions for all the other branches. When the master branch is merged into the other branches, those branches also have CI jobs for all other branches. This doesn't cause problems but seems to be causing some confusion while working with PR and forks.

Tasks include:\
1\) Remove from the master branch the CI jobs that are not for the master branch\
2\) Move the non-master branch CI jobs to their respective branches

        