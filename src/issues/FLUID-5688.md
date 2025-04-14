---json
{
  "title": "FLUID-5688",
  "summary": "Builder docs could clarify the 'create' function",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Won't Do",
  "reporter": "Anastasia Cheetham",
  "date": "2015-06-11T09:56:11.639-0400",
  "updated": "2024-07-23T09:45:47.928-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Tech. Documentation"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2024-07-23T09:45:47.770-0400",
      "body": "`fluid.prefs.create()` has been removed. It was replaced with just a call to `fluid.uiOptions` in Infusion 4.0. See: <https://docs.fluidproject.org/infusion/development/APIChangesFrom3_0To4_0?highlight=fluidprefscreate#instantiation>&#x20;\n"
    }
  ]
}
---
The docs page for the Builder isn't really clear about the fact that the recommended "fluid.prefs.create()" function actually uses the Builder. It seems to present the function as an alternative to the Builder, which is not the case; it's more of a wrapper around the Builder. We should make that clear.

(Also, there's a typo: "However, you'll generallyl want to use the simpler...")

        