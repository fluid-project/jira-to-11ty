---json
{
  "title": "FLUID-5945",
  "summary": "Tag, package and post the release for the Infusion 2.0 release",
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
  "date": "2016-08-19T08:38:05.817-0400",
  "updated": "2016-12-08T16:06:00.437-0500",
  "versions": [],
  "fixVersions": [
    "2.0"
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
      "date": "2016-12-08T16:06:00.435-0500",
      "body": "Builds of Infusion are included on the Infusion 2.0 release page on GitHub and a version is published to NPM.\n\nsee:&#x20;\n\n* <https://github.com/fluid-project/infusion/releases/tag/infusion-2.0>\n* <https://www.npmjs.com/package/infusion>\n"
    }
  ]
}
---
* use fluid-publish node module to create the git tag and publish an npm release.
* post zip files to [github release page](https://github.com/fluid-project/infusion/releases)

        