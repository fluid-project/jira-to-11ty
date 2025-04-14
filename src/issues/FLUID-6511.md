---json
{
  "title": "FLUID-6511",
  "summary": "Revise Nexus endpoints for /components/",
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
  "date": "2020-06-01T16:54:54.209-0400",
  "updated": "2024-07-22T10:35:22.655-0400",
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
This issue combines two small revisions to the Nexus API (more of which are collected at [this wiki page](https://wiki.fluidproject.org/display/fluid/Nexus+API+revisions).

## Add a GET endpoint for /components/path.to.component

Currently, WebSocket model bindings are the only way to get information about a component out of a Nexus "from the outside". The need for this functionality has come up in testing Nexus servers, but it may become necessary in use cases as well, and is nicely symmetrical with the GET endpoint for /defaults/.

## Construct components with PUT rather than POST

Currently, the API endpoint for constructing a component is to send an HTTP POST request to the /components/{desired component path} . The traditional distinction between PUT and POST is that the former puts a resource at a requested location, while the latter determines the final location of the resource and sends it back to the requester. Component construction follows the former case, and should therefore use PUT.

        