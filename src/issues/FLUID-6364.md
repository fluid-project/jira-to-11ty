---json
{
  "title": "FLUID-6364",
  "summary": "Examine the user experience of setting languages through the localization panel",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Open",
  "reporter": "Cindy Li",
  "date": "2019-01-23T16:16:17.203-0500",
  "updated": "2019-01-23T16:19:21.807-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-6303/",
      "key": "FLUID-6303",
      "summary": "Implement a panel, adjuster and enactor for locale"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-6303/",
      "key": "FLUID-6303"
    }
  ],
  "attachments": [],
  "comments": []
}
---
The implementation of the localization preference adds a localization example to Infusion.

Thoughts from @@Justin Obara:

From our mini design crit there were a lot of view points expressed that made us wonder if the approach taken here is the best. For example there was a mention that usually language happens through a toggle directly visible on the page and/or on a screen before hand, which makes me wonder if a user would ever find it in the panel. We also do have a paradigm at the moment for exposing adjusters outside of the panel. Although I don't think it would be too much work to make that happen. At any rate, I think it warrants more design thought, maybe user testing and/or co-design and a more extensive exploration of how sites currently set language.

See [the origin](https://github.com/fluid-project/infusion/pull/949#issuecomment-455885855).

        