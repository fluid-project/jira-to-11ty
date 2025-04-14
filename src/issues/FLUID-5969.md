---json
{
  "title": "FLUID-5969",
  "summary": "Model transformation system is not capable of outputting primitive types",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2016-09-22T22:47:38.812-0400",
  "updated": "2024-07-22T09:24:43.850-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Model Transformation System"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
The <https://fluidproject.atlassian.net/browse/FLUID-5115#icft=FLUID-5115> rewrite of the ChangeApplier system moved it along to what has been named the "holder" system - whereby the level of containment of the model is moved one level higher in the hierarachy. The container of the model, which is in practice always the owning component, is named the "holder" and the member named "model" can be arbitrary rebound, allowing a component's model to consist of primitive values or even `undefined`.

However, the model transformation system was not updated in step. A TODO remains at this line which causes the `target` to always be initialised to an object - <https://github.com/fluid-project/infusion/blob/master/src/framework/core/js/ModelTransformation.js#L614> - this is causing problems in areas such as <https://github.com/GPII/universal/pull/464/files> where a dereference transform is returning {} rather than `undefined`, causing the need for a spurious use of `$.isEmptyObject()` to detect the return value.

        