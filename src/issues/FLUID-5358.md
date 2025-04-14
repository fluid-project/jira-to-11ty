---json
{
  "title": "FLUID-5358",
  "summary": "Enable use of identity transform in model transformations and model relay",
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
  "reporter": "Antranig Basman",
  "date": "2014-05-05T00:02:55.753-0400",
  "updated": "2014-06-25T16:16:10.656-0400",
  "versions": [],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Data Binder",
    "Model Transformation System"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2014-05-14T15:00:43.676-0400",
      "body": "Merged into project repo at 37c3dae2783a58cde413e0dcd894320c3a29b73c\n"
    }
  ]
}
---
Two issues: \
i) Although the model transformation system supports the use of "any function" as a transform rule, it appears that there is a bug in model relay which bombs when finding a rule with nonexistent defaults.\
Although we can use fluid.transform.free this is cumbersome for simple cases - we should fix up the relay pathway.\
ii) Separately, we should have a dedicated "identity" transform supported by the framework, which, naturally, inverts to itself. This is useful to help with consistency in configuration - although naturally this effect can be had by establishing a "direct relay" between the "model" areas of two components, it can be useful in some situations where the space of configuration is "open" wrt to integrators for them to be able to express everything they need within the "modelRelay" block.

This need arose during discussion with cindyli about work on the metadata component in IRC on 2/5/14

<https://botbot.me/freenode/fluid-work/msg/14143822/>

        