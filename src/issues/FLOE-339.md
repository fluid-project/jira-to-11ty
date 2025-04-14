---json
{
  "title": "FLOE-339",
  "summary": "Add speech to indicate when Sticky Keys shift is unlatched due to pressing shift a second time",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Simon Bates",
  "date": "2015-05-14T17:15:18.238-0400",
  "updated": "2015-11-03T12:09:50.740-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "First Discovery"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLOE-312/",
      "key": "FLOE-312",
      "summary": "Add TTS support to keyboard assistance screens"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2015-05-25T17:10:07.485-0400",
      "body": "This looks like a use case which motivates restoring the \"source tracking\" system as suggested in <http://issues.fluidproject.org/browse/FLUID-5490> . With this, it would be possible to apply a source named \"latch\" to the shift key source, and then apply 'includeSource: \"latch\"' to the model listener which provides the spoken message. As it stands, it is awkward to demultiplex the different sources of change to the shift state.\n\nOne approach for finessing this for now could be to add a single event source, \"shiftLatchChange\" which detects the user's long-pressing of shift, and then two add two listeners to this with different priorities - a high priority listener which updates the model state, and then a low priority listener which READS the updated model state and then announces it.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-05-26T10:41:03.986-0400",
      "body": "Submitted a pull request:\\\n<https://github.com/fluid-project/first-discovery/pull/62>\n"
    },
    {
      "author": "Cindy Li",
      "date": "2015-05-26T15:03:46.711-0400",
      "body": "Merged @ 4b81887c85848fb35b327f42aa348c48bd03c2f9\n"
    }
  ]
}
---
Update the self voicing for the Sticky Keys simulation to indicate when shift is turned off.

For FLOE-312 we implemented a spoken message when shift is turned on. We should also add a message when shift is turned off:

"shift is off"

This message should only be spoken when shift is turned off due to pressing shift again without inputting a keypress. Shift is also unlatched when we generate a shifted keypress, but we don't want to speak the "shift is off" message in this case.

        