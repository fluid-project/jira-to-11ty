---json
{
  "title": "FLUID-2647",
  "summary": "Modify the build scripts to automate the process of rewriting the URLs in the head of the html pages.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Michelle D'Souza",
  "reporter": "Justin Obara",
  "date": "2009-05-04T15:03:32.000-0400",
  "updated": "2009-05-04T17:08:29.000-0400",
  "versions": [],
  "fixVersions": [
    "1.1"
  ],
  "components": [
    "Infrastructure",
    "Testing Infrastructure"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-05-04T15:10:15.000-0400",
      "body": "Modified the build.js and build.xml files to allow for automated URL rewriting. This will replace the references to the individual js files to a reference to the single js file, which they are concatenated into. (i.e. InfusionAll.js)\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-05-04T15:11:05.000-0400",
      "body": "Michelle, please code review my commit for this issue\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-05-04T17:08:29.000-0400",
      "body": "Michelle reviewed it.\n"
    }
  ]
}
---
Modify the build scripts to automate the process of rewriting the URLs in the head of the html pages, to point to the single js file instead of the individual ones.

This should make the testing of InfusionAll.js easier at release time.

        