---json
{
  "title": "FLUID-5902",
  "summary": "Update keyboard-a11y demo to make use of new \"indexOf\" and \"dereference\" transforms",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Open",
  "assignee": "Cindy Li",
  "reporter": "Antranig Basman",
  "date": "2016-05-04T20:55:11.804-0400",
  "updated": "2016-05-04T20:55:11.804-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Demos"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
Our keyboard-a11y demo ("five star ranking") currently makes use of a pair of clumsy fluid.transforms.free relays to manage reading and writing the model.

<https://github.com/fluid-project/infusion/blob/master/demos/keyboard-a11y/js/keyboardDemo.js#L84>

These should be updated to use the fluid.transforms.dereference and fluid.transforms.indexOf standard transforms that we recently acquired: \
<https://github.com/fluid-project/infusion/blob/master/src/framework/core/js/ModelTransformationTransforms.js#L629>

Since this is the standard demo that we point new users to who ask for examples of a simple but realistic Infusion app, we should actually do this.

        