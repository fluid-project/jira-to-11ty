---json
{
  "title": "FLUID-6705",
  "summary": "Increasing line spacing pushes the sliding panel tab down",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2021-12-16T10:03:22.647-0500",
  "updated": "2021-12-16T10:37:55.066-0500",
  "versions": [],
  "fixVersions": [
    "4.0"
  ],
  "components": [
    "Prefs Framework",
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Cindy Li",
      "date": "2021-12-16T10:37:51.076-0500",
      "body": "[The pull request](https://github.com/fluid-project/infusion/pull/1068) that fixes this issue has been merged at [this commit](https://github.com/fluid-project/infusion/commit/0104629aa6f3980617801aec12a8ff0ab874024b).\n"
    }
  ]
}
---
Steps to reproduce:

1. Open the [UIO demo](https://build-infusion.fluidproject.org/demos/uioptions/)
2. Open the prefs editor
3. Adjust the line spacing preference
4. Notice that the sliding panel tab is pushed down the page.

The line spacing should not affect the prefs editor container and should probably just be set to a fixed line-height.

        