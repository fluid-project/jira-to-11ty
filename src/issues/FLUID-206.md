---json
{
  "title": "FLUID-206",
  "summary": "Bad javascript in a portlet may break the Reorderer",
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
  "date": "2008-02-06T09:44:29.000-0500",
  "updated": "2008-09-16T09:08:38.000-0400",
  "versions": [
    "0.1",
    "0.3",
    "0.4beta1",
    "0.4"
  ],
  "fixVersions": [
    "0.5"
  ],
  "components": [
    "Reorderer"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-32/",
      "key": "FLUID-32",
      "summary": "Implement a \"shifting\" algorithm for re-ordering elements."
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2008-08-14T21:23:31.000-0400",
      "body": "This is probably, but not certainly caused by the double-evaluation issue to be resolved by <https://fluidproject.atlassian.net/browse/FLUID-32#icft=FLUID-32>\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2008-09-07T18:05:21.000-0400",
      "body": "Drop Manager, Dom Permutation work merged back into trunk at revision 5476\n\nThis should have been resolved as a result of \"script cleansing\" implemented as part of the Permuter.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-09-08T09:19:28.000-0400",
      "body": "Assigning  it to Anastasia to close as she was the reporter\n"
    }
  ]
}
---
The initial version of the uPortal 3 mock-up included javascript related to the Bookmarks portlet that failed because the Bookmarks portlet didn't actually exist. This failure caused moving of the Bookmarks portlet to fail: mouse-based dragging encountered the error, and wouldn't drop the portlet, for example.

We should investigate whether or not this will occur in **any** case of bad javascript within a portlet, or if it was specific to this particular special case.

        