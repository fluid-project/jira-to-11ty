---json
{
  "title": "FLUID-5701",
  "summary": "Implement backwards compatibility for fluid.prefs.enactors name change",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Justin Obara",
  "date": "2015-06-29T10:13:08.137-0400",
  "updated": "2024-07-23T09:47:37.263-0400",
  "versions": [],
  "fixVersions": [
    "1.9"
  ],
  "components": [
    "Prefs Framework",
    "UIEnhancer"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2024-07-23T09:47:37.263-0400",
      "body": "It doesn’t seem necessary to do this anymore now that we’re well passed Infusion 2.\n"
    }
  ]
}
---
fluid.prefs.enactors was changed to fluid.prefs.enactor after the 1.5 release. However, this can be considered as a backwards compatibility breaking api change. We should provide a grade or grades that essentially map fluid.prefs.enactors to fluid.prefs.enactor so that end users won't have to be affected by the change.&#x20;

Note: fluid.prefs.enactors will still be deprecated and not available in the 2.0 release.

        