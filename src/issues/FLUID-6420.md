---json
{
  "title": "FLUID-6420",
  "summary": "Split start schema aux schema into separate schema grades",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2019-10-31T11:22:19.179-0400",
  "updated": "2024-07-22T10:35:22.802-0400",
  "versions": [],
  "fixVersions": [
    "4.0"
  ],
  "components": [
    "Prefs Framework",
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2019-10-31T13:34:17.685-0400",
      "body": "In looking into this further, there is a question of how to best make use of the split out auxiliary schema grades. The biggest hurdle is with UIO which makes use of a pre-assembled grade. (See: <https://github.com/fluid-project/infusion/blob/master/src/components/uiOptions/js/UIOptions.js#L19-L21> ). This means that it is already too late to change the preferences by an integrator with a schema. \n\nThis has me thinking though that we might be able to have an invoker as a grade. It would call fluid.prefs.builder and return the assembled grade as a grade name to UIO. Actually this could replace fluid.prefs.create.\n\nWe should also explore the possibility of just replacing fluid.prefs.builder, fluid.prefs.create, and fluid.uiOptions.prefsEditor all with a single component that took care of all of these things. In this case all prefs editors would be created with the same component, but with different configuration for the auxiliary schemas used.\n"
    }
  ]
}
---
Currently the start schema contains a single schema for the base set of preferences. It seems that this isn't always desirable, as it makes it hard to remove preferences. A better solution would be to split the auxiliary schema into individual grade wrapped schemas for each preference. These can then be composed into the set of preferences desired. This would be similar to how the newer preferences are have separate grades that can be merged in.

        