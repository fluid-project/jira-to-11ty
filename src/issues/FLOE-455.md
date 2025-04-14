---json
{
  "title": "FLOE-455",
  "summary": "Implement initial Learning Dashboard prototype",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Story",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Do",
  "assignee": "Alan Harnum",
  "reporter": "Alan Harnum",
  "date": "2016-06-13T10:13:39.625-0400",
  "updated": "2018-05-08T15:02:05.070-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Learning Dashboard"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLOE-471/",
      "key": "FLOE-471"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Alan Harnum",
      "date": "2018-05-08T15:02:05.069-0400",
      "body": "Closing since new work in starting on this project, being captured in <https://issues.fluidproject.org/projects/MYL3/issues/?filter=allopenissues>\n"
    }
  ]
}
---
This issue consolidates tracking of tasks related to the initial Learning Dashboard implementation.

This is part of the "Preference Exploration and Self-Assessment" work described at <https://wiki.fluidproject.org/display/fluid/%28Floe%29+Preference+Exploration+and+Self-Assessment> on the wiki.

The order of the subtasks below is, roughly, priority order.

For the first prototype the overall implementation approach will be to:

* implement persistence and time-based querying using PouchDB
* create Infusion-based components that are time-aware and persistable via PouchDB
* if possible, simulate per-user authentication and persistence

Some fast prototyping to understand the problem space better is at <https://github.com/waharnum/journal>

Latest visuals: <https://files.inclusivedesign.ca/s/z3XmucgCeA5zuR9#pdfviewer>

        