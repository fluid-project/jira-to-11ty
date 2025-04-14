---json
{
  "title": "FLUID-6716",
  "summary": "Remove a few unnecessary DOM utilities",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2022-02-04T08:43:16.580-0500",
  "updated": "2022-02-09T09:52:29.328-0500",
  "versions": [
    "3.0"
  ],
  "fixVersions": [
    "4.0"
  ],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2022-02-09T09:52:29.326-0500",
      "body": "Merged PR ( <https://github.com/fluid-project/infusion/pull/1070> ) into the project repo at 50bdbf8d145ddfd64f3cc865397f8ef03982e443\n"
    }
  ]
}
---
A few utilities in FluidDOMUtilities have become unnecessary over the years as new methods were added to the DOM API.

fluid.dom.isContainer can be replaced by element.contains

fluid.dom.getElementText can be replaced by element.innerText

        