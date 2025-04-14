---json
{
  "title": "FLUID-6543",
  "summary": "Allow model bindings to be established prior to bound components existing",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "New Feature",
  "priority": "Major",
  "status": "Open",
  "assignee": "Philip Tchernavskij",
  "reporter": "Philip Tchernavskij",
  "date": "2020-08-13T14:11:06.769-0400",
  "updated": "2020-08-13T21:00:26.895-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Nexus"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
One of the Nexus' design goals is that it should be configurable entirely through static, declarative document-like data such as Kettle configs and co-occurrence engine recipes. Therefore all the Nexus mechanisms for modifying and binding to component trees should work independently of the order in which the client or server end comes online, and should be tolerant to either end temporarily going offline.

For model bindings, this means that it should be possible for a client to open a bindModel WebSocket connection to a non-existent component, delaying the "initModel" message until the component is created.&#x20;

This is a continuation of <https://fluidproject.atlassian.net/browse/FLUID-6504#icft=FLUID-6504>, which expanded the model binding API with typed messages and error reporting.

        