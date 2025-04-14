---json
{
  "title": "FLUID-6203",
  "summary": "Refactor a base grade out of the text size and line spacing adjusters for a textfield stepper adjuster.",
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
  "date": "2017-09-28T13:06:11.043-0400",
  "updated": "2018-03-13T13:26:56.264-0400",
  "versions": [],
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
      "date": "2018-03-13T13:26:49.294-0400",
      "body": "Resolved with <https://fluidproject.atlassian.net/browse/FLUID-6204#icft=FLUID-6204>\n"
    }
  ]
}
---
Currently the text size and line spacing panel components have very similar configuration. It should be possible to refactor a base grade for a generic textfield stepper adjuster out of these. This would be helpful for UIO+ where we need a Character Spacing adjuster which will likely also use a stepper for the adjuster ( [GPII-2429](https://issues.gpii.net/browse/GPII-2429) ).

        