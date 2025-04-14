---json
{
  "title": "FLUID-3721",
  "summary": "IoC system will throw exception on traversing component with \"null\" member at top level",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2010-09-09T02:50:37.117-0400",
  "updated": "2014-03-03T13:41:29.986-0500",
  "versions": [],
  "fixVersions": [
    "1.3"
  ],
  "components": [
    "IoC System"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2010-09-09T02:58:56.618-0400",
      "body": "Fixed at revision 10031\n"
    }
  ]
}
---
Code traversing looking for "typeName" entry is improperly guarded

        