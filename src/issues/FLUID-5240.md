---json
{
  "title": "FLUID-5240",
  "summary": "Allow composite panels to be nested",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Incomplete",
  "reporter": "Justin Obara",
  "date": "2013-12-18T08:47:30.294-0500",
  "updated": "2024-07-22T10:35:13.670-0400",
  "versions": [
    "1.5"
  ],
  "fixVersions": [
    "5.0"
  ],
  "components": [
    "Prefs Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2022-07-07T08:35:19.579-0400",
      "body": "Composite panels as a specific grade type will be abolished in Infusion 5, instead allowing for any freeform component material to act as a panel. As a result there is no specific implementation required for this issue.\n"
    }
  ]
}
---
Composite panels allow for the combining of several individual panels into a single one, which manages rendering and etc. Currently, a composite panel cannot be used as a sub panel. This restriction is due to 1) the need for a preference maps, which a composite panel does not have 2) the consolidated rendering process, where the composite panel manages the rendering of all the sub panels. However, it seems that there is a growing need to support such a thing. In the GPII's PMT, there is a notion of a more/less toggle which is used to hide extra adjusters. It seems reasonable that these extra adjusters should just be some subset of sub panels that are hidden within a composite panel.

        