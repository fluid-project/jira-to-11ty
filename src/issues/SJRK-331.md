---json
{
  "title": "SJRK-331",
  "summary": "Orator not working in Edge 44",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Do",
  "reporter": "Gregor Moss",
  "date": "2020-03-19T21:30:17.907-0400",
  "updated": "2020-07-27T16:02:54.714-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool UI"
  ],
  "environment": "Custom-built PC\\\nWindows 10 Pro build 1903\\\nEdge 44.18362.449.0\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2020-03-23T08:36:55.406-0400",
      "body": "Gregor Moss the Orator demo is included in the demos directory of Infusion. If you pull down the branches related to the <https://fluidproject.atlassian.net/browse/FLUID-6145#icft=FLUID-6145> and/or <https://fluidproject.atlassian.net/browse/FLUID-6148#icft=FLUID-6148> PRs, you should be able to test them in Edge. \n"
    },
    {
      "author": "Gregor Moss",
      "date": "2020-07-27T16:02:54.652-0400",
      "body": "Justin Obara has been working on this issue as part of <https://fluidproject.atlassian.net/browse/SJRK-370#icft=SJRK-370> (now that we have error messages to work with), and came across some causes in Infusion proper that would explain this behaviour. These are captured in <https://fluidproject.atlassian.net/browse/FLUID-6533#icft=FLUID-6533> and <https://fluidproject.atlassian.net/browse/FLUID-6535#icft=FLUID-6535>, the first of which has already been addressed in Infusion and will make its way into the Storytelling Tool at some point.\n\nBeyond that, we are planning not to support pre-Chromium Edge in the future (affects versions 44.\\* and earlier), so this may not be resolved for affected versions.\n"
    }
  ]
}
---
The Orator component is not working in Edge 44 (pre-Chromium). The component loads, and the Play button turns into a Pause button as expected, but nothing else happens. No errors are reported in the browser console to indicate what may have gone wrong.

This does not seem to be a problem with the [Orator Demo page](https://build.fluidproject.org/infusion/demos/orator/), nor with older deployed versions of the Storytelling Tool. It's possible this is related to recent updates in Infusion regarding <https://fluidproject.atlassian.net/browse/FLUID-6145#icft=FLUID-6145> and <https://fluidproject.atlassian.net/browse/FLUID-6148#icft=FLUID-6148>, which are used in the current version of the Storytelling Tool. Filing this as a ST bug rather than component, in case the issue lies in the tool rather than the framework.

**To reproduce:**

1. Create a story and go to the Preview step, or publish it, or load a previously-published story
2. Click the Play button on the Orator component

**Expected:**

The Orator will read the story aloud, highlighting words as it goes

**Actual:**

The Play button turns into a Pause button, but nothing else occurs.

        