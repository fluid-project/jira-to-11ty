---json
{
  "title": "FLUID-6652",
  "summary": "Focus moves to the beginning of the single composite panel when conditional adjuster activated",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "reporter": "Justin Obara",
  "date": "2021-07-06T08:08:41.243-0400",
  "updated": "2021-07-06T08:09:45.042-0400",
  "versions": [
    "3.0"
  ],
  "fixVersions": [],
  "components": [
    "Prefs Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2021-07-06T08:09:45.042-0400",
      "body": "This is likely due to the entire panel being re-rendered when the switch is activated; which causes the focus position to be lost.\n"
    }
  ]
}
---
Steps to reproduce:

1. Open the [conditional adjusters - single panel](https://build-infusion.fluidproject.org/examples/framework/preferences/conditionaladjusters-singlepanel/) example
2. Open the prefs editor
3. Using the keyboard, place focus on the "Magnification" switch and activate it
4. Using the keyboard press the "tab" key.
5. Notice that focus starts from the "Speak Text" switch instead of from the "Magnification" switch.

        