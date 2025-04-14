---json
{
  "title": "FLUID-5941",
  "summary": "In IE11 the sidebar does not appear when expanded",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jonathan Hung",
  "reporter": "Jonathan Hung",
  "date": "2016-08-10T11:47:31.554-0400",
  "updated": "2018-06-07T06:58:41.739-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Tech. Documentation"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2016-08-10T15:18:19.843-0400",
      "body": "Only applied the hot fix for now.\n\nMerged pull request ( <https://github.com/inclusive-design/guide.inclusivedesign.ca/pull/9> ) into the project repo at b81d9c2a3fb892316e3bcbc68a3b53c4356e1745\n"
    }
  ]
}
---
The sidebar remains display:none in the docs-template when the sidebar is expanded. The problem appears to only affects IE11 on Windows.

The root of the issue appears to be the .docs-core-sidebar-expanded .docs-template-topics { display: initial; }

If this is set to display: block instead of initial, it should fix the problem.

        