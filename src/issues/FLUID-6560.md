---json
{
  "title": "FLUID-6560",
  "summary": "Rename \"master\" branch to \"main\" and update related references throughout",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Justin Obara",
  "date": "2020-10-22T10:20:54.267-0400",
  "updated": "2024-07-22T10:35:25.961-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/SJRK-412/",
      "key": "SJRK-412",
      "summary": "Rename \"master\" branch to \"main\""
    }
  ],
  "attachments": [],
  "comments": []
}
---
The community has decided to rename the "master" branch of our repos to "main". We'll need to make the change to update the default branch name in GitHub, rebase all the PRs against it, and update any references in the code base that mention "master".

see:

* <https://lists.idrc.ocad.ca/pipermail/fluid-work/2020-October/011268.html>
* <https://github.com/github/renaming>

        