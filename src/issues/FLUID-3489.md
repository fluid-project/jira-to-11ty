---json
{
  "title": "FLUID-3489",
  "summary": "fluid.model.setBeanValue() doesn't handle new nested paths properly",
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
  "reporter": "Anastasia Cheetham",
  "date": "2010-02-01T14:18:58.000-0500",
  "updated": "2011-01-20T15:17:19.650-0500",
  "versions": [
    "1.1.2"
  ],
  "fixVersions": [
    "1.2"
  ],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2010-02-01T21:02:59.000-0500",
      "body": "Fixed at revision 9222\n"
    }
  ]
}
---
The new implementation of fluid.model.getPenultimate() causes fluid.model.setBeanValue() to not properly handle creating new lower-level fields in an empty model. So

var model = {};\
fluid.model.setBeanValue(model, "fields.title", "new title");

doesn't work.

        