---json
{
  "title": "FLUID-5270",
  "summary": "The target model is not properly transformed when the modelRelay option is defined in the target component",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Cindy Li",
  "date": "2014-02-10T09:42:54.859-0500",
  "updated": "2014-03-03T11:23:45.099-0500",
  "versions": [
    "1.4"
  ],
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
      "date": "2014-02-10T09:48:53.973-0500",
      "body": "Issued a pull request - <https://github.com/fluid-project/infusion/pull/464>, to demonstrate this issue.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2014-02-11T14:16:56.314-0500",
      "body": "Merged into project repo at 3dc55843092610fdd36309280d9c4934659c8659\n"
    }
  ]
}
---
In the new model relay system, the "modelRelay" option could be defined in the either source or target component.&#x20;

However, when "modelRelay" is defined in the target component, the target model is not transformed.

        