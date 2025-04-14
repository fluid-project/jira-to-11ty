---json
{
  "title": "FLUID-2316",
  "summary": "Pager subcomponent fluid.pager.selfRender has no default for 'root'",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Anastasia Cheetham",
  "reporter": "Anastasia Cheetham",
  "date": "2009-03-06T15:33:35.000-0500",
  "updated": "2009-06-03T13:47:41.000-0400",
  "versions": [
    "0.8"
  ],
  "fixVersions": [
    "1.0"
  ],
  "components": [
    "Pager"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
When the Pager is being used with the Renderer, i.e. a bodyRenderer option of "fluid.pager.selfRender" is specified, there is no default selector for the 'root' of the body. The implementor **must** specify it.

It would seem to be more in keeping with general Fluid practices to have a default selector for the root, and allow implementors to override it if they choose.

        