---json
{
  "title": "FLUID-6265",
  "summary": "Make test reports available in Buildkite",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Do",
  "assignee": "Giovanni Tirloni",
  "reporter": "Colin Clark",
  "date": "2018-03-26T12:17:46.207-0400",
  "updated": "2018-06-28T11:01:10.518-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Infrastructure"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Giovanni Tirloni",
      "date": "2018-03-26T13:20:14.439-0400",
      "body": "Using the \"build\\_artifacts\" configuration in Buildkite, all files get uploaded individually to Amazon S3.\n\nOpening \\`reports/index.html\\` and then clicking on any link throws an access denied error.&#x20;\n\nI've emailed Buildkite's support team about this.\n"
    },
    {
      "author": "Giovanni Tirloni",
      "date": "2018-05-22T12:30:56.580-0400",
      "body": "It seems like we will need to create a script to act as a BuildKite plugin and upload it to wherever we want.\n"
    },
    {
      "author": "Giovanni Tirloni",
      "date": "2018-06-28T11:01:05.921-0400",
      "body": "No satisfactory solution found. Closing due to changes to be introduced in <https://fluidproject.atlassian.net/browse/FLUID-6282#icft=FLUID-6282>.\n"
    }
  ]
}
---
coverage/\* and reports/\* repository should be uploaded to Buildkite for public inspection (as build artifacts).

        