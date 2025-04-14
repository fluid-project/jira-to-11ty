---json
{
  "title": "FLUID-6238",
  "summary": "Builds should fail below a particular coverage level...",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Open",
  "assignee": "Colin Clark",
  "reporter": "Tony Atkins [RtF]",
  "date": "2018-01-17T12:12:13.247-0500",
  "updated": "2024-07-22T09:00:15.398-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Build Scripts",
    "Testing Infrastructure"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2020-12-16T08:51:28.791-0500",
      "body": "With <https://fluidproject.atlassian.net/browse/FLUID-6529#icft=FLUID-6529> we added codecov configuration to display code coverage in PR checks and merges to main. These will fail the check status in GitHub if the code coverage drops. This is only handled on GitHub though, and not when run locally.\n"
    }
  ]
}
---
Now that we have overall coverage reporting, we can choose to add a "coverage check" to our "postinstall" steps which will cause "npm test" to fail with an error if the code coverage levels fall below an agreed upon level.

        