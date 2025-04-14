---json
{
  "title": "FLUID-5183",
  "summary": "Builder dependencies for UI Options component don't work",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Anastasia Cheetham",
  "date": "2013-10-18T12:00:09.274-0400",
  "updated": "2013-10-24T08:51:30.983-0400",
  "versions": [],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2013-10-18T13:30:21.435-0400",
      "body": "Submitted a pull request <https://github.com/fluid-project/infusion/pull/420>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2013-10-24T08:51:17.224-0400",
      "body": "Pull request merged into the project repo at 62596e6a85018fb3d4e12561c52ae895318cd9ad\n"
    }
  ]
}
---
The build scripts assume that the JS files listed in the dependencies list are in a "js" subfolder, but the UI Options component JS file is no longer in a subfolder, so it's not being included in the concatenated file.

        