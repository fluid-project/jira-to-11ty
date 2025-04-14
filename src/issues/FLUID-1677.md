---json
{
  "title": "FLUID-1677",
  "summary": "On being supplied markup with no rsf:id or cutpoints, \"baselump is undefined\" message",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2008-10-10T13:23:21.000-0400",
  "updated": "2011-02-22T16:27:59.599-0500",
  "versions": [
    "0.6beta1"
  ],
  "fixVersions": [
    "0.6beta1"
  ],
  "components": [
    "Renderer"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2008-10-10T13:44:05.000-0400",
      "body": "Fixed at revision 5755\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-02-22T16:27:59.598-0500",
      "body": "Closing issues that were resolved for 1.0 and earlier releases.&#x20;\n"
    }
  ]
}
---
If the renderer is supplied markup with no rsf:ids or cutpoints, rendering will fail with a exception "baselump is undefined"

        