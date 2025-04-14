---json
{
  "title": "FLOE-318",
  "summary": "Add a speech rate enactor to the FD tool",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Task",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Anastasia Cheetham",
  "date": "2015-04-30T16:32:16.677-0400",
  "updated": "2015-11-03T12:01:49.791-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "First Discovery"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-5670/",
      "key": "FLUID-5670",
      "summary": "Move utterance options into the model"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2015-05-12T13:58:25.433-0400",
      "body": "Keep in mind that when the rate is adjusted on the fly, the TTS should re-read something at the new rate, and the 'something' should be long enough for the user to determine if they like the new speed.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-05-25T12:42:51.862-0400",
      "body": "Submitted a pull request:\\\n<https://github.com/fluid-project/first-discovery/pull/59>\n"
    },
    {
      "author": "Cindy Li",
      "date": "2015-05-25T15:10:02.988-0400",
      "body": "Merged @ 244eacad0742f95848da505c925bf86085b54611\n"
    }
  ]
}
---

        