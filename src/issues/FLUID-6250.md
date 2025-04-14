---json
{
  "title": "FLUID-6250",
  "summary": "fluid-publish should revert package-lock.json on conclusion",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Migrated",
  "assignee": "Justin Obara",
  "reporter": "Antranig Basman",
  "date": "2018-02-22T09:09:51.776-0500",
  "updated": "2024-07-25T11:52:46.691-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "fluid-publish"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Atisaya Jain",
      "date": "2018-03-12T02:31:55.800-0400",
      "body": "Is this issue still open? I would like to work on this.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2018-03-12T09:38:39.150-0400",
      "body": "@@Atisaya Jain I believe this is still open. Please feel free to submit a PR to address it.\n"
    },
    {
      "author": "Atisaya Jain",
      "date": "2018-03-12T17:12:58.655-0400",
      "body": "This might be silly, but I think I am a bit lost here. What does it mean to revert back to content from git? Does it mean that after publishing, fluid-publish should be removed from the package-lock.json and package.json files of the module it has been used to publish? Or does it mean something else?\n\nI would be grateful if you could help me how to approach this issue.\n"
    },
    {
      "author": "Tony Atkins [RtF]",
      "date": "2018-03-13T05:53:37.366-0400",
      "body": "Hi, @@Atisaya Jain. For \"dev\" releases, this package generates a version number (based in part on the date) that is saved to the package.json file. The updated package.json file is committed as part of a new tag. Once this is done, the goal is to leave the current working branch in the same state it was in before the release. We accomplish this by checking out the previous package.json from whatever branch we are working in.\n\nThis ticket covers also reverting the package-lock.json file, as though we had issued the command `git checkout package-lock.json`.\n"
    },
    {
      "author": "Atisaya Jain",
      "date": "2018-03-13T13:20:13.636-0400",
      "body": "Thank you so much for you help, Tony. It cleared a lot of doubts, really.\n\nI have opened a PR [#9](https://github.com/fluid-project/fluid-publish/pull/9) on Github, please review it. And please let me know if any other changes need to be made.\n"
    },
    {
      "author": "Atisaya Jain",
      "date": "2018-03-16T06:48:03.644-0400",
      "body": "@Justin Obara @Tony Atkins I closed the previous PR while trying to rename commits. I am really sorry for this.\n\nPlease review PR [#10](https://github.com/fluid-project/fluid-publish/pull/10) Github and let me know if any changes need to be made.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2024-07-25T11:52:46.691-0400",
      "body": "Migrated to <https://github.com/fluid-project/fluid-publish/issues/22>&#x20;\n"
    }
  ]
}
---
npm version 5, the current LTS version, maintains a package-lock.json file in addition to package.json . The last step of the fluid-publish dev workflow should revert this file to its content from git in addition to the package.json file

        