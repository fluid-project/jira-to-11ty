---json
{
  "title": "FLUID-4148",
  "summary": "Create horizontal list styles for fl-list-menu",
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
  "date": "2011-03-16T16:20:16.293-0400",
  "updated": "2014-04-02T16:40:51.842-0400",
  "versions": [
    "1.3.1"
  ],
  "fixVersions": [],
  "components": [
    "FSS"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2014-04-02T16:40:51.841-0400",
      "body": "FSS is deprecated\n"
    }
  ]
}
---
In fss-layout.css , there's a fl-list-menu style but it only creates vertical lists (even tho the comment says horizontal as well). The only way to make a horizontal list right now is to use fl-tabs.

        