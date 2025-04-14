---json
{
  "title": "SJRK-262",
  "summary": "Review usage of DVCM and templateManager in blockUi's",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Open",
  "reporter": "Gregor Moss",
  "date": "2019-07-23T15:34:36.834-0400",
  "updated": "2020-10-05T14:38:00.373-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool UI"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2020-10-05T14:38:00.373-0400",
      "body": "We should review what the dynamic view component manager does and whether it is necessary to keep or refactor.\n"
    }
  ]
}
---
Look into interactions between the dynamicViewComponentManager (DVCM) and blockUi templateManager components and see if there is reloading of the templates or if we can take advantage of caching if it isn’t already happening (which it may)\
Motivation: we don’t need 10 templateManagers for 10 blocks, should consider moving it outside of the dynamic component

        