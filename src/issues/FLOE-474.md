---json
{
  "title": "FLOE-474",
  "summary": "Sonifier doesn't play identical adjacent values",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Resolved",
  "resolution": "Fixed",
  "assignee": "Alan Harnum",
  "reporter": "Alan Harnum",
  "date": "2016-09-06T15:52:30.832-0400",
  "updated": "2016-09-13T13:01:54.683-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Chart Authoring Tool"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Alan Harnum",
      "date": "2016-09-06T16:00:25.093-0400",
      "body": "Fixed in PR at <https://github.com/fluid-project/chartAuthoring/pull/14>, since it turned out to only require a small change.\n"
    }
  ]
}
---
flock.modelSynth (the synthesizer used in the sonification) works using a changeApplier to trigger sound play. As currently implemented, this means that if adjacent values are identical, any past the first will not play any sound.

This is easy to see via the demo page by entering two or more identical values.

The easiest fix for this is probably to reset the synth models between sound plays around lines 216-217 of sonifier.js

        