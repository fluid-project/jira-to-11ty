---json
{
  "title": "FLUID-4315",
  "summary": "Image gallery demo: fix the failing nightly/hourly builds",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Cindy Li",
  "reporter": "Cindy Li",
  "date": "2011-06-28T15:20:05.470-0400",
  "updated": "2011-09-27T10:18:57.448-0400",
  "versions": [],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "Uploader"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Cindy Li",
      "date": "2011-06-28T15:31:10.202-0400",
      "body": "A pull request is sent: <https://github.com/fluid-project/build-scripts/pull/1>\n\nWaiting for code review.\n"
    },
    {
      "author": "Cindy Li",
      "date": "2011-06-28T15:31:45.289-0400",
      "body": "Bug Parade Infusion\n"
    },
    {
      "author": "Cindy Li",
      "date": "2011-09-27T10:18:37.241-0400",
      "body": "Colin merged into \"build-scripts\" project repo @ 86afb471067d58cdc16e6e4989e59b18adf57399\n"
    },
    {
      "author": "Cindy Li",
      "date": "2011-09-27T10:18:57.389-0400",
      "body": "Issue closed.\n"
    }
  ]
}
---
The continuum nightly and hourly builds for the image gallery demo are failing with error:

fatal: destination path 'infusion' already exists and is not an empty directory.

        