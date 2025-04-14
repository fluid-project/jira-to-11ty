---json
{
  "title": "FLUID-2960",
  "summary": "can only have one level of nesting when using databinding",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2009-06-18T13:59:49.000-0400",
  "updated": "2009-11-13T09:15:55.000-0500",
  "versions": [
    "1.1"
  ],
  "fixVersions": [
    "1.2"
  ],
  "components": [
    "Renderer"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-06-18T14:02:42.000-0400",
      "body": "Changed \"if\" to \"while\" on line 583. This will allow for multiple levels of nesting for databinding\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-11-13T09:15:55.000-0500",
      "body": "Closed as per previous comment\n"
    }
  ]
}
---
can only have one level of nesting when using databinding

The problem lies in line 583 of fluidRenderer.js where "if" should actually be "while"

        