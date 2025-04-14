---json
{
  "title": "FLUID-6362",
  "summary": "Improve modelRelay docs to explain syntax for broken-out references",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "assignee": "Colin Clark",
  "reporter": "Antranig Basman",
  "date": "2019-01-18T11:09:55.457-0500",
  "updated": "2024-07-19T08:07:05.817-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
The modelRelay docs at <https://docs.fluidproject.org/infusion/development/ModelRelay.html#modelrelayblock-layout> are pretty inadequate in that they don't explain that all of the syntax forms (naturally, minus the ones involving \["\*"] !) listed for modelListeners at <https://docs.fluidproject.org/infusion/development/ChangeApplierAPI.html#the-path-entry-in-a-model-listener-declaration> are usable, and further don't explain clearly that 

i) the "context" member is unquoted by {}

ii) the "segs" segments are implicitly considered to refer into the component's model

        