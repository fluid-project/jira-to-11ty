---json
{
  "title": "FLUID-6562",
  "summary": "Update references pointing at the \"master\" branch to now point at \"main\" in Infusion-Docs",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2020-10-22T17:07:52.041-0400",
  "updated": "2020-10-23T11:12:30.967-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Tech. Documentation"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-6561/",
      "key": "FLUID-6561",
      "summary": "Update references pointing at the \"master\" branch to now point at \"main\""
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Cindy Li",
      "date": "2020-10-23T11:12:26.669-0400",
      "body": "[The pull request](https://github.com/fluid-project/infusion-docs/pull/188) that does the update has been merged into the project repo main branch at [this commit](https://github.com/fluid-project/infusion-docs/commit/c300786742732e452d0179846ff20aa510a4e8f4).\n"
    }
  ]
}
---
The community has decided to rename the "master" branch of our repos to "main". We'll need to make the change to update the default branch name in GitHub, rebase all the PRs against it, and update any references in the code base that mention "master".

see:

* <https://lists.idrc.ocad.ca/pipermail/fluid-work/2020-October/011268.html>
* <https://github.com/github/renaming>

        