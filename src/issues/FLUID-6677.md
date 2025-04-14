---json
{
  "title": "FLUID-6677",
  "summary": "Tag, package and post the release for the Infusion 3.0 release",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2021-07-22T09:11:34.739-0400",
  "updated": "2021-08-25T15:27:18.641-0400",
  "versions": [],
  "fixVersions": [
    "3.0"
  ],
  "components": [
    "Release"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2021-07-27T09:15:23.984-0400",
      "body": "Can find merge commits using: \n\ngit log v2.0.0..HEAD --merges --first-parent\n\n \n\nSee: <https://stackoverflow.com/a/52649024>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2021-08-25T15:27:14.031-0400",
      "body": "GitHub release page:\n\n<https://github.com/fluid-project/infusion/releases/tag/v3.0.0>\n"
    }
  ]
}
---
* publish node module to create the git tag and publish an npm release.
* post zip files to [github release page](https://github.com/fluid-project/infusion/releases)

        