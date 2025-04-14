---json
{
  "title": "FLUID-2217",
  "summary": "Rerendering a tree causes an error due to a colliding id.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Michelle D'Souza",
  "reporter": "Michelle D'Souza",
  "date": "2009-02-10T14:31:58.000-0500",
  "updated": "2011-02-22T16:27:56.965-0500",
  "versions": [],
  "fixVersions": [
    "0.8"
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
      "date": "2009-02-11T11:41:38.000-0500",
      "body": "Fixed at revision 6473\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-02-22T16:27:56.964-0500",
      "body": "Closing issues that were resolved for 1.0 and earlier releases.&#x20;\n"
    }
  ]
}
---
This error can be seen by clicking 'reset' in UIOptions. fluid.reRender is called which causes the id collision error.&#x20;

        