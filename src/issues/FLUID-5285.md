---json
{
  "title": "FLUID-5285",
  "summary": "The entire set of relays across the component tree should operate as a single transaction",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "Antranig Basman",
  "reporter": "Cindy Li",
  "date": "2014-03-11T14:54:53.214-0400",
  "updated": "2014-03-11T15:14:12.996-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Cindy Li",
      "date": "2014-03-11T15:04:30.183-0400",
      "body": "Issued a pull request (<https://github.com/amb26/infusion/pull/4>) against Antranig's <https://fluidproject.atlassian.net/browse/FLUID-5282#icft=FLUID-5282> branch (<https://github.com/amb26/infusion/tree/FLUID-5282>) with an unit test to demonstrate this issue.\n"
    },
    {
      "author": "Cindy Li",
      "date": "2014-03-11T15:14:12.987-0400",
      "body": "Using \"\" rather than \"\\*\" as the path for the model listener would fix the issue.\n"
    }
  ]
}
---
In a component tree that only has relay components in a structure of one top and several sub-components. One single change request on either the top or sub components should only be relayed and reflected once at the top rather than relaying across all components.&#x20;

        