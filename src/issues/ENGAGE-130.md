---json
{
  "title": "ENGAGE-130",
  "summary": "navigationList has the incorrect defaults for choosing whether to render a default image or not.",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Justin Obara",
  "date": "2009-10-16T14:38:53.000-0400",
  "updated": "2009-11-03T11:28:15.000-0500",
  "versions": [],
  "fixVersions": [
    "0.1"
  ],
  "components": [
    "Browse"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2009-10-16T14:42:16.000-0400",
      "body": "Bug Parade Engage 0.1\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-10-16T14:48:24.000-0400",
      "body": "Resolved at r8362\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-11-03T11:28:15.000-0500",
      "body": "closed as per previous comment\n"
    }
  ]
}
---
navigationList has the incorrect defaults for choosing whether to render a default image or not.

Currently the default behaviour is to renderer a default image in place of a missing image. Although the original intended behaviour was to not render the img tag at all.&#x20;

This is causing some unwanted behaviour in some of the demo pages, where an empty image is rendered next to the category link. The default should actually be to not render the img tag and instead override the defaults in the browse component for how it uses the navigationList.

        