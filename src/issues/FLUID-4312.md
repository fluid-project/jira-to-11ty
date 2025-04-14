---json
{
  "title": "FLUID-4312",
  "summary": "Align FSS's fl-tabs and tab component ",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "heidi valles",
  "date": "2011-06-28T12:52:33.769-0400",
  "updated": "2014-04-02T16:40:51.747-0400",
  "versions": [
    "1.3.1"
  ],
  "fixVersions": [],
  "components": [
    "FSS",
    "Tabs"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2014-04-02T16:40:51.746-0400",
      "body": "FSS is deprecated\n"
    }
  ]
}
---
Right now fl-tabs styles a list to look like tabs but doesn't make anything work like tabs

The tabs component makes a list and some panels work like tabs, but doesn't use the fl-tabs classnames

We should try to align these two things cos it's sorta confusing.

        