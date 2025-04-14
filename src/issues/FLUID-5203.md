---json
{
  "title": "FLUID-5203",
  "summary": "Prefs Framework's textfieldSlider doesn't support multiple sliders in the same panel",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Anastasia Cheetham",
  "date": "2013-10-31T14:20:20.639-0400",
  "updated": "2013-11-08T11:14:23.244-0500",
  "versions": [],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Prefs Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Cindy Li",
      "date": "2013-11-04T10:15:39.522-0500",
      "body": "Issued the pull request: <https://github.com/fluid-project/infusion/pull/431>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2013-11-08T11:14:23.232-0500",
      "body": "Merged pull request ( <https://github.com/fluid-project/infusion/pull/431> ) into the project repo at 722535cdc902f57bb449e7c3b17d96930a2feefc\n"
    }
  ]
}
---
The textfieldSlider component defined in the prefs framework pulls the range information from its supposed parent panel, using\
range: "{fluid.prefs.panel}.options.range",\
Unfortunately, this won't allow multiple sliders to be present on the same panel.

        