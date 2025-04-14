---json
{
  "title": "FLUID-5297",
  "summary": "Databinding tests fail in strict mode",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Justin Obara",
  "date": "2014-03-27T12:06:50.432-0400",
  "updated": "2024-07-22T09:33:48.192-0400",
  "versions": [],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Data Binder"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-5284/",
      "key": "FLUID-5284"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2014-04-01T10:07:10.283-0400",
      "body": "Merged pull request ( <https://github.com/fluid-project/infusion/pull/486> ) into the project repo at e5a53bb9c87d8624a0ee72274fdee26cd502aeb3&#x20;\n"
    }
  ]
}
---
If Fluid.js is in strict mode ("use strict"😉 the DataBinding tests fail on the "ApplyHolderChangeRequest - cautious application + invalidation" tests for the "Add array at empty root" test.&#x20;

The issue appears to be caused by root being set to "ADD" in fluid.model.accessImpl. This falls through to the else condition which attempts to assign a value with array notation. In strict mode these are read only, but it seems like an error either way to be assigning values to "ADD" like this.

        