---json
{
  "title": "FLUID-5099",
  "summary": "fluid.addSourceGuardedListener will not trigger a listener if the model path and renderer selector are the same",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2013-07-22T14:18:05.987-0400",
  "updated": "2013-08-15T11:10:31.434-0400",
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
      "author": "Justin Obara",
      "date": "2013-08-15T11:10:20.276-0400",
      "body": "Was fixed with the work for <https://fluidproject.atlassian.net/browse/FLUID-4907#icft=FLUID-4907> at eaf41aa06eb9c398fff816542afaca4348f98c83\n"
    }
  ]
}
---
When using fluid.addSourceGuardedListener with a renderer component. If the model path, and the render selector are the same, it will think the sources are identical and will prevent the listener from firing. This is because the source is set as the node.id which happens to be the selector.&#x20;

This was found while working on FLUID-4907 where the panels communicate with the enactors through a model relay.

<https://github.com/jobara/infusion/blob/FLUID-4907/src/webapp/components/uiOptions/js/Panels.js#L115-L135>

<https://github.com/jobara/infusion/blob/FLUID-4907/src/webapp/components/uiOptions/js/ModelRelay.js>

The path in the external model is set to "textFont" but this is also the selector used to render the input.

        