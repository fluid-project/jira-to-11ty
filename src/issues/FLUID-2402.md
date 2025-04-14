---json
{
  "title": "FLUID-2402",
  "summary": "API Name Changes",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Justin Obara",
  "date": "2009-03-25T11:35:52.000-0400",
  "updated": "2011-01-21T09:24:14.250-0500",
  "versions": [],
  "fixVersions": [
    "1.0"
  ],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-03-25T11:36:25.000-0400",
      "body": "Clean Up Parade 1.0&#x20;\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2009-03-31T17:50:13.000-0400",
      "body": "repairFromUpload() has been changed to refreshAfterUpload()\n"
    },
    {
      "author": "Colin Clark",
      "date": "2009-04-01T00:28:13.000-0400",
      "body": "I've committed the changes for fluid.keyForValue(), fluid.assembleModel(), and the ChangeApplier-related names.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2009-04-01T00:29:17.000-0400",
      "body": "Name changes are in and backwards compatibility has been preserved where necessary. The four commits to this issue should be code reviewed before closing.\n"
    }
  ]
}
---
API Name Changes

Requires public nomination and discussion before changes can be made.

Here is the list of changes we decided on:

fluid.findKeyInObject() -> fluid.keyForValue()\
uploader.repairFromUpload() -> uploader.refreshAfterUpload()\
fluid.assembleSuperModel() -> fluid.assembleModel()\
DARApplier -> ChangeApplier

        