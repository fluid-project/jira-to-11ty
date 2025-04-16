---json
{
  "title": "FLUID-6174",
  "summary": "fluid.transforms.valueMapper should support a direct input value",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2017-07-29T08:57:31.357-0400",
  "updated": "2024-07-22T10:35:04.051-0400",
  "versions": [],
  "fixVersions": [
    "3.0"
  ],
  "components": [
    "Model Transformation System"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2017-07-30T19:03:50.926-0400",
      "body": "Thanks, Justin Obara, this report exposes an interesting blunder in the <https://fluidproject.atlassian.net/browse/FLUID-5891#icft=FLUID-5891> re-implementation of the valueMapper. As you can see from the draft format listed in that JIRA, the intention was always to support a top-level \"input\" option but somehow this was never done. This escaped notice since the only major user of the valueMapper is currently the GPII which uses static \"big up front documents\". I imagine if we had ever dusted off the in-progress work on metadata editing by Cindy Li et al this problem would have come to light earlier. We need to have a brief chat with Kasper Galschiot Markus to confirm that our understanding of the issue is correct.\n"
    }
  ]
}
---
Currently the fluid.transforms.valueMapper model transformation only supports input paths. There should be an option to take in an input value directly. In addition to being able to supply the model data directly, it will also allow for supporting nested transformations.

        