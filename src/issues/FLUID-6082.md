---json
{
  "title": "FLUID-6082",
  "summary": "Provide a means for skipping the checkChanges step.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Open",
  "reporter": "Justin Obara",
  "date": "2016-11-21T10:23:34.588-0500",
  "updated": "2016-11-21T10:23:34.588-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Build Scripts",
    "Release"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
[ramonornela](https://github.com/ramonornela) filed a Pull Request for this feature change in the [fluid-publish](https://github.com/fluid-project/fluid-publish) repo:

<https://github.com/fluid-project/fluid-publish/pull/6>

The reason given:

"Skip called Publish.checkchanges() to dev and standard this need in case project alter package.json before of publish"

        