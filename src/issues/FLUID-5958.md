---json
{
  "title": "FLUID-5958",
  "summary": "Improve strings to provide templating for all component string",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Open",
  "reporter": "Justin Obara",
  "date": "2016-09-15T09:01:37.234-0400",
  "updated": "2021-07-29T01:47:38.855-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-5957/",
      "key": "FLUID-5957",
      "summary": "Important values should be modelized and passed to string tempting functions"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2016-09-15T09:04:47.206-0400",
      "body": "Perhaps a declarative approach more inline with listeners and invokers would work.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2016-09-15T09:23:57.973-0400",
      "body": "It's a good idea to rationalise our approach. An area called \"templates\" in a suitably graded component is one idea - however, note that we also have a standard model transformation rule <https://github.com/fluid-project/infusion/blob/master/src/framework/core/js/ModelTransformationTransforms.js#L687> which allows users to achieve this in a freeform way - this just requires the designer to have placed the output strings within the model area as well as their input material.\n"
    }
  ]
}
---
Currently the determination for what strings use string templating and what does not is based on the implementation. The specific implementation may be locked, in some cases, within complex functions. It would provide more flexibility to an integrator to provide string templating to all strings. Likely it makes sense to pass in the components model for token values, as the model represents the components state. It may be the case for some components or use cases (e..g non-model components) to extend the set of tokens uses beyond the components model.&#x20;

        