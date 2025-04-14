---json
{
  "title": "FLUID-6609",
  "summary": "Example of full page panel prefs editor has broken links to Table of Contents messages",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Ned Zimmerman",
  "date": "2021-03-25T19:02:22.142-0400",
  "updated": "2021-03-29T10:27:20.467-0400",
  "versions": [
    "3.0"
  ],
  "fixVersions": [
    "3.0"
  ],
  "components": [
    "Prefs Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2021-03-29T08:07:24.484-0400",
      "body": "The immediate issue is likely that the [enactor configuration](https://github.com/fluid-project/infusion/blob/4e804fee39403575f893565548124f6e61b00490/examples/framework/preferences/fullPagePanelStyle/index.html#L75-L77) in the example is missing the configuration overrides for its message bundle.\n\nHowever, this demo doesn't really need this specific enactor present at all, so another approach would be to explore keeping the preference but removing the ToC enactor.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2021-03-29T10:27:16.322-0400",
      "body": "Merged PR ( <https://github.com/fluid-project/infusion/pull/1044> ) into the project repo at b8a058a270c4dbc95fc5e25e8a0e4bdfc619f02f\n"
    }
  ]
}
---
There are two 404 errors here: [Preferences Editor: Full page with panel styling (fluidproject.org)](https://build-infusion.fluidproject.org/examples/framework/preferences/fullpagepanelstyle/)

 The problem appears to be with relative URLs:

<https://build-infusion.fluidproject.org/examples/framework/framework/preferences/messages/tableOfContents-enactor.json>

<https://build-infusion.fluidproject.org/examples/framework/framework/preferences/messages/tableOfContents-enactor_en.json>

(Note that both URLS have framework in them twice).

I wasn't able to determine the cause of the problem on a cursory inspection.

        