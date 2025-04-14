---json
{
  "title": "FLUID-4183",
  "summary": "Input components rendered by the renderer which are not bound to a model will fail when operated",
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
  "date": "2011-04-08T04:51:56.367-0400",
  "updated": "2015-06-09T13:22:48.613-0400",
  "versions": [
    "1.3.1",
    "1.4",
    "1.5"
  ],
  "fixVersions": [],
  "components": [
    "Renderer"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
If the "autoBind" directive is supplied to the renderer, it will erroneously expect that all input components (for example HTML \<input or \<select) which are rendered, even if they are not in fact bound to a model using a valuebinding at rendering time, should expect to write back to the model. This will cause a failure in the applyChange() handler as it looks for a fossil for such a component in the fossil record.

        