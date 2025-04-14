---json
{
  "title": "FLUID-6396",
  "summary": "Move ChangeApplier over to \"immutable application\" model",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Open",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2019-08-23T08:36:38.945-0400",
  "updated": "2024-07-19T08:03:39.248-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-6536/",
      "key": "FLUID-6536"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-6581/",
      "key": "FLUID-6581"
    }
  ],
  "attachments": [],
  "comments": []
}
---
The current ChangeApplier's idiom for applying updates and relays is highly inefficient in many cases, especially where the meaning of relay rules is to simply share parts of model contents without modification.\
We should move over to a system where model contents are considered immutable as JS objects and any mutation is performed by a shallow "clone to root", and all implicit model relays are operated by reference sharing. This will offer performance characteristics similar to contemporary systems such as redux etc. but it should be noted that this will not necessarily be the best choice for all users - where large models are frequently receiving updates to isolated values we can generate less garbage by updating them in place (although realising these savings would also require reducing the other bookkeeping structures managed by the ChangeApplier.\
This model is described at <https://wiki.fluidproject.org/display/fluid/New+New+Notes+on+the+ChangeApplier> .&#x20;

        