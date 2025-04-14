---json
{
  "title": "FLUID-6747",
  "summary": "Appearance of \"method\" in permittedRequestOptions for DataSource is misleading",
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
  "date": "2022-07-19T11:29:18.459-0400",
  "updated": "2024-07-17T08:02:55.556-0400",
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
Recently @@Cindy Li ran into an issue where she supplied `method: "GET"` as a top-level option in a DataSource - because of the way options merging occurs in the rather ad hoc code in fluid.dataSource.URL.prepareRequestOptions and poorly factored into fluid.dataSource.URL.handleHttp this makes the dataSource unusable for writing, since this option then takes precedence over anything supplied as writeMethod.\
We should simply remove "method" from the permittedRequestOptions since the result is going to be undesirable in most cases.

        