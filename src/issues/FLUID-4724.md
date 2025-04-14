---json
{
  "title": "FLUID-4724",
  "summary": "ToC leaves gap if on, even when not shown",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Anastasia Cheetham",
  "reporter": "Anastasia Cheetham",
  "date": "2012-06-26T14:43:03.970-0400",
  "updated": "2013-08-16T10:53:05.544-0400",
  "versions": [],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Table of Contents"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2012-06-26T15:46:30.047-0400",
      "body": "This turns out to be fixed by changing the method the demo uses to 'hide' the ToC.\n\nIt would actually be nice if a page could simply leave out the ToC container element if you don't want a ToC, but the framework doesn't like it when you do that; everything falls apart.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2012-06-26T16:09:15.658-0400",
      "body": "Merged into project repo at 6307778bcaaadd538c33f47744482ebb70a9756d\n"
    }
  ]
}
---
In special cases where a Table of Contents is explicitly not desired, turning the ToC preference on in UIO causes a gap to appear on the page where the ToC would be. You can see this on the full-page versions of the UIO demo panels.

        