---json
{
  "title": "FLUID-3755",
  "summary": "Names stored in fossil record for incremental binding cause collision",
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
  "reporter": "Antranig Basman",
  "date": "2010-09-23T16:03:10.286-0400",
  "updated": "2014-03-03T13:41:14.730-0500",
  "versions": [
    "1.2.1",
    "1.3.1"
  ],
  "fixVersions": [
    "1.3"
  ],
  "components": [
    "Renderer"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2010-09-23T16:51:37.680-0400",
      "body": "Fixed at revision 10040\n"
    },
    {
      "author": "Golam Chowdhury",
      "date": "2011-03-03T16:46:28.240-0500",
      "body": "Changed the \"Affect Version\" to 1.3.1.\n"
    }
  ]
}
---
It "should be possible" to use the renderer for "incremental binding" by passing in the same "fossil record" for repeated rendering passes against related blocks of markup. Although the "id collision avoidance branch" in adjustForID operates to allocate a suitable "finalID", the "submitting name" of the component is still derived from the old ID, causing the binding to overwrite one from a previous rendering pass.

        