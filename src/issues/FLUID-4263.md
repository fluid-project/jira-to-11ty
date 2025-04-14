---json
{
  "title": "FLUID-4263",
  "summary": "Add post render event to pager",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Eric Dalquist",
  "date": "2011-05-26T00:14:43.640-0400",
  "updated": "2011-06-01T11:24:16.808-0400",
  "versions": [],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "Pager"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2011-05-31T02:08:52.772-0400",
      "body": "Infusion Bug Parade\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2011-05-31T02:09:24.260-0400",
      "body": "This issue is crucial for use of the pager within uPortal, which is widespread\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-06-01T11:24:16.806-0400",
      "body": "Merged pull request <https://github.com/fluid-project/infusion/pull/59> into the project repo at eab3445b7d2e712afc9bb4318075f58898afe807\n"
    }
  ]
}
---
Add an event to the pager that is fired (and listeners can be bound to) after the markup rendering is complete. This should be called after initial render, sorting and paging.&#x20;

        