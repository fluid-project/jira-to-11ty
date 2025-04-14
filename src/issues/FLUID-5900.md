---json
{
  "title": "FLUID-5900",
  "summary": "Factor out universal dataSource definitions from Kettle and fold into core Infusion",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2016-05-03T12:20:36.794-0400",
  "updated": "2024-07-22T10:35:06.606-0400",
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
Kettle includes infrastructure for expressing DataSources which has a reasonably portable core: <https://github.com/amb26/kettle/blob/KETTLE-32/lib/dataSource.js>&#x20;

We should take the common elements of this core which are valid both in the browser and server and factor them into a core element of Infusion. Note that there is a long-mothballed pull request <https://github.com/fluid-project/infusion/pull/566> holding functions for a queued DataSource for <https://fluidproject.atlassian.net/browse/FLUID-5542#icft=FLUID-5542> that will need to be integrated with this work.

        