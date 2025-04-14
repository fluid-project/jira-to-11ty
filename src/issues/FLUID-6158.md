---json
{
  "title": "FLUID-6158",
  "summary": "Extract setModel and applyModelChanges functions from NexusWebSocketBoundComponent to general Infusion usage",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Simon Bates",
  "reporter": "Alan Harnum",
  "date": "2017-05-17T14:44:35.319-0400",
  "updated": "2018-02-16T13:37:08.646-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Data Binder"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Simon Bates",
      "date": "2017-06-12T16:12:12.678-0400",
      "body": "Pull request: <https://github.com/fluid-project/infusion/pull/830>\n\n \n"
    },
    {
      "author": "Simon Bates",
      "date": "2017-06-12T17:07:27.761-0400",
      "body": "Documentation pull request: <https://github.com/fluid-project/infusion-docs/pull/122>\n\n \n"
    },
    {
      "author": "Simon Bates",
      "date": "2017-07-13T15:34:39.581-0400",
      "body": "The code pull request has been merged:\n\n<https://github.com/fluid-project/infusion/commit/b3de71f688a3533a62fd32e4c3ba9283d41f3cda>\n\n \n"
    },
    {
      "author": "Simon Bates",
      "date": "2018-02-16T13:35:12.915-0500",
      "body": "The documentation pull request has been merged also.\n"
    }
  ]
}
---
It has been identified that the NexusWebSocketBoundComponent has some useful functionality that should be extracted into Infusion core.

The relevant functions are at <https://github.com/simonbates/nexus-client/blob/master/src/NexusWebSocketBoundComponent.js#L144-L193> - their moral purpose is to calculate the changes necessary to bring one model into consistency with another model.

Signature and function name of the extracted functionality will be as follows:

fluid.modelPairToChanges(value, oldValue, path) -> \[Array of ChangeRequest]

The return value can then be passed to fluid.fireChanges or otherwise used.

        