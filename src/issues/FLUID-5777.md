---json
{
  "title": "FLUID-5777",
  "summary": "Improve the way the hide show topics ribbon behaves",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Jonathan Hung",
  "date": "2015-09-25T09:04:05.641-0400",
  "updated": "2024-07-23T10:33:08.399-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Docs platform"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2024-07-23T10:33:08.247-0400",
      "body": "The old docs platform is no longer being used and the design with the topics side bar has changed.\n"
    }
  ]
}
---
The hide/show Topics ribbon can be improved in a number of ways:

* When viewing in mobile, the Topics ribbon should collapse to just the menu icon.
* The "topics" flag is a collapse/uncollapse toggle, but there's nothing to indicate status, or even "activatability". Perhaps something like a chevron-style arrow that switches back and for between left-facing and right-facing?
* Duplicate headers in top nav and in the sidebar can be confusing

        