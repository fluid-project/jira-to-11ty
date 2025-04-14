---json
{
  "title": "FLUID-1869",
  "summary": "Remove dependency on fluid-scroller",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Jacob Farber",
  "date": "2008-11-28T12:30:51.000-0500",
  "updated": "2011-01-27T19:18:28.160-0500",
  "versions": [],
  "fixVersions": [
    "1.3.1"
  ],
  "components": [
    "Uploader"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Jacob Farber",
      "date": "2009-06-05T16:10:35.000-0400",
      "body": "This should be more of a configuration option\n"
    },
    {
      "author": "Colin Clark",
      "date": "2011-01-27T19:18:10.588-0500",
      "body": "This issue was resolved at r10479 by removing the Scroller component altogether and hooking up scrollability using IoC, so that it can be easily replaced.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2011-01-27T19:18:28.158-0500",
      "body": "Fixed with the removal of the Scroller component\n"
    }
  ]
}
---
If no fluid-scroller container exists, there is an error.

        