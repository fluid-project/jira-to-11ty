---json
{
  "title": "FLUID-6568",
  "summary": "Ensure that build commands work with CI tests",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Ned Zimmerman",
  "reporter": "Ned Zimmerman",
  "date": "2020-10-29T07:36:32.018-0400",
  "updated": "2024-07-22T10:35:25.422-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Infusion Builder"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2020-10-29T08:45:50.506-0400",
      "body": "That's a good point. I wonder if we can combine this with CD for deploying to the build site?\n"
    },
    {
      "author": "Ned Zimmerman",
      "date": "2020-10-29T09:12:06.602-0400",
      "body": "Probably, although I think it makes sense to get the CI task in place ASAP and then figure out where to deploy, etc.\n"
    }
  ]
}
---
In the wake of FLUID-6496, it would be good to add a simple CI task which installs dependencies and runs `npm run buildDists` to ensure the Infusion can be built without errors.

        