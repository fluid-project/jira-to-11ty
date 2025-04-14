---json
{
  "title": "FLUID-3723",
  "summary": "Deprecate Flash 9 and non-IE Flash support",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-task",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Justin Obara",
  "date": "2010-09-09T13:30:10.859-0400",
  "updated": "2010-12-23T15:42:35.521-0500",
  "versions": [],
  "fixVersions": [
    "1.3"
  ],
  "components": [
    "Uploader"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-10-04T14:56:28.376-0400",
      "body": "\"Bug Parade Infusion 1.3\"\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-12-02T13:26:25.379-0500",
      "body": "All Flash 9-specific code was factored out into a separate file at r10310. A prominent note was added to the source code at r10322, resolving this issue from a code perspective. We still need to update the QA plans so that they correctly reflect this change in support.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2010-12-23T15:39:46.931-0500",
      "body": "Please determine if this is done and should be closed or if it should be put into another release.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-12-23T15:42:35.518-0500",
      "body": "This issue was resolved with a comment in the markup and documentation for Infusion 1.3\n"
    }
  ]
}
---
The Uploader currently supports both Flash 9 and 10. With the way Adobe tends to update Flash, the market for Flash 9 users is nearly nil. As a result, we should retain support for Flash 9 for several releases, but make it optional and clearly mark it as deprecated.

Also, since support for the HTML 5 strategy works across all the major browsers except IE, we should not actively support (through our full QA process) the Flash version on non-IE browsers.

        