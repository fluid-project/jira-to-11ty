---json
{
  "title": "FLUID-4059",
  "summary": "Verify that demos are using proper principles like DOM binding, declaring components.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Jonathan Hung",
  "date": "2011-02-11T14:14:34.861-0500",
  "updated": "2016-09-14T11:18:13.004-0400",
  "versions": [
    "1.3",
    "1.5"
  ],
  "fixVersions": [
    "2.0"
  ],
  "components": [
    "Demos"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2015-06-09T10:38:52.508-0400",
      "body": "We have recently updated all the demos, but it would be good to go through and verify that they are all following best practices.\n"
    },
    {
      "author": "Cindy Li",
      "date": "2016-09-14T11:18:09.524-0400",
      "body": "The pull request <https://github.com/fluid-project/infusion/pull/749> has been merged into the project master branch at c8457da92655335c042316b497a8d0bfb1f7c9fc\n"
    }
  ]
}
---
Demos shipped with Infusion and on the demo portal should be eating its own dog food / using good Fluid Infusion principles:

Examples:

* make sure DOM binding is being done properly.
* components are being declared, even for code specific to demos.

Quote Bosmon in the IRC:

"So, for example, I observed that the demo didn't make use of the DOM binder properly, or even define a Fluid component at all\
Which are all things that we would expect that a user of our framework "naturally would do", even if these points didn't illustrate anything relevant to the particular plugin being demoed"

        