---json
{
  "title": "FLUID-6313",
  "summary": "Update gpii-grunt-lint-all in fluid-publish to use simpler configuration of sources ",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Justin Obara",
  "date": "2018-08-01T09:04:34.983-0400",
  "updated": "2024-07-22T10:35:19.305-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
The latest version ( currently 1.0.1-dev.20180801T111658Z.da9c3ba ) has improved the configuration by automatically excluding things like .DS\_Store and ./node\_modules. Fluid-Publish should be updated to use the latest version of gpii-grunt-lint-all and use the simplified configuration in the Gruntfile.

 

Further discussion can be seen in the comments on the [PR for FLUID-6296](https://github.com/fluid-project/infusion/pull/914#issuecomment-409163052)

        