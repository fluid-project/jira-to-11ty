---json
{
  "title": "FLUID-5977",
  "summary": "The documentation for UIO integration is not complete",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Alison Chow",
  "reporter": "Jonathan Hung",
  "date": "2016-10-04T09:00:37.425-0400",
  "updated": "2017-01-24T09:59:33.436-0500",
  "versions": [
    "2.0"
  ],
  "fixVersions": [
    "2.0"
  ],
  "components": [
    "Tech. Documentation"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2016-10-04T09:01:36.645-0400",
      "body": "The code snippet contained an error, but I don't recall what it was. It was uncovered when walking through the integration with Lindsay.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2016-10-04T09:13:20.589-0400",
      "body": "Rather than walking through the build process, we can just put up a UIO build on the GitHub release page.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2017-01-24T09:59:33.422-0500",
      "body": "Merged PR ( <https://github.com/fluid-project/infusion-docs/pull/109> ) into the project repo at 4253128866a67fab920fb6e9286a516dcbe2bfb3\n"
    }
  ]
}
---
The documentation for UIO integration is not complete and contains some inaccuracies.\
<http://docs.fluidproject.org/infusion/development/tutorial-userInterfaceOptions/UserInterfaceOptions.html>

Clarity can be improved:\
For example, the section under "Download and install the Infusion library", the steps could be divided into two chunks - building, and copying.

The accuracy of the code snippets should be verified.

        