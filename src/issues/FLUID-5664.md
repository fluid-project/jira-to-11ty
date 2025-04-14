---json
{
  "title": "FLUID-5664",
  "summary": "Renderer component fails to respect rebinding of model reference by new ChangeApplier",
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
  "date": "2015-05-13T10:36:04.293-0400",
  "updated": "2017-02-27T15:49:12.973-0500",
  "versions": [],
  "fixVersions": [
    "2.0"
  ],
  "components": [
    "Framework",
    "Renderer"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2015-08-20T13:46:42.600-0400",
      "body": "Merged into trunk at revision 282f1a318718eed0b0ec060fb8b4ad254417fd7e\n"
    }
  ]
}
---
The new ChangeApplier implementation delivered for FLUID-5115 has the capability of rebinding the JavaScript object reference held at "model" of a component, which was not possible in the original implementation. The implementation of fluid.rendererComponent doesn't react to such rebinding since it closes over the original reference at time of component construction. This will lead to serious errors, including the complaint that the "model is not present" if it was undefined at construction.

        