---json
{
  "title": "FLUID-6516",
  "summary": "Allow Nexus model binding to empty model paths",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Philip Tchernavskij",
  "reporter": "Philip Tchernavskij",
  "date": "2020-06-09T15:29:36.834-0400",
  "updated": "2024-07-22T10:35:23.906-0400",
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
The Nexus' WebSocket endpoint /bindModel/ currently has its route specified as "/bindModel/:componentPath/:modelPath". In cases where a model binding needs to address the entirety of a components model, the modelPath segment of the URL is empty, e.g. "/bindModel/some.component.path/". However, requests without the modelPath segment do not trigger the endpoint. The solution to this issue is presumably to add another endpoint and connecting it to the same request handler.

        