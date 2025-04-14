---json
{
  "title": "FLUID-5116",
  "summary": "Undefined messageResolver at loading discovery tool",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Cindy Li",
  "date": "2013-08-15T16:31:38.244-0400",
  "updated": "2013-10-04T09:07:31.013-0400",
  "versions": [],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2013-08-22T15:46:01.940-0400",
      "body": "Thanks for this careful and good work, cindy - it is a much-needed simplification of the component hierarchy of UIOptions!\n"
    },
    {
      "author": "Justin Obara",
      "date": "2013-10-04T09:07:30.886-0400",
      "body": "Merged into the project repo at 50b253a3e004c598ae7389e5d3b12fe53e679351\n"
    }
  ]
}
---
Jess has this error periodically at loading discovery tool:

TypeError: messageResolver is undefined @ <http://build.fluidproject.org/prefsEditors/src/shared/lib/infusion/MyInfusion.js:29301>"

Although the error occurs at loading discovery tool, it seems resulted from UIO component. By looking into the code, the fat panel sliding panel is created after the rendering of the iframe without considering whether the message resolver has been created by uiOptions.&#x20;

The solution would be creating an aggregate event that listens to both iframe and UIOptions ready events and having the sliding panel created on this aggregate event.

        