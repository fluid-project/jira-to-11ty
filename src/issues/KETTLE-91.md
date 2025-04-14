---json
{
  "title": "KETTLE-91",
  "summary": "Update references, in Kettle, pointing at the \"master\" branch to now point at \"main\"",
  "tags": "KETTLE",
  "project": {
    "key": "KETTLE",
    "title": "Kettle"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Resolved",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2020-10-26T09:57:57.795-0400",
  "updated": "2020-10-26T10:15:32.448-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
The community has decided to rename the "master" branch of our repos to "main". We'll need to make the change to update the default branch name in GitHub, rebase all the PRs against it, and update any references in the code base that mention "master".

see:

* <https://lists.idrc.ocad.ca/pipermail/fluid-work/2020-October/011268.html>
* <https://github.com/github/renaming>

        