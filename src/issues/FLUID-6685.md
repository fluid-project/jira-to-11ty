---json
{
  "title": "FLUID-6685",
  "summary": "Update Codecov GitHub Action to v2",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2021-10-13T12:45:01.011-0400",
  "updated": "2021-10-20T15:06:12.539-0400",
  "versions": [],
  "fixVersions": [
    "4.0"
  ],
  "components": [
    "Build Scripts"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Cindy Li",
      "date": "2021-10-20T15:06:08.958-0400",
      "body": "[The pull request](https://github.com/fluid-project/infusion/pull/1061) is merged at [this commit](https://github.com/fluid-project/infusion/commit/9cb44e822c8a4269567c6578f2754ce40279e521).\n"
    }
  ]
}
---
The existing CodeCov bash uploader is deprecated and will be sunset in Feb 2022. 

<https://about.codecov.io/blog/codecov-uploader-deprecation-plan/>

We'll need to update the GitHub action to the latest current version (v2).

<https://github.com/marketplace/actions/codecov>

Until it is updated we will see intermittent downtime and a loss of new coverage checks as of Feb 2022

        