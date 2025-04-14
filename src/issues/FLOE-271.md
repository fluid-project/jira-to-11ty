---json
{
  "title": "FLOE-271",
  "summary": "An on/off message should be read when the mute button is toggled",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2015-02-12T16:28:25.593-0500",
  "updated": "2015-11-03T11:22:33.823-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "First Discovery"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2015-02-12T16:31:08.689-0500",
      "body": "Submitted a pull request:\\\n<https://github.com/fluid-project/first-discovery/pull/18>\n"
    },
    {
      "author": "Cindy Li",
      "date": "2015-03-31T14:30:56.274-0400",
      "body": "The pull request has been merged into the master @ 06523a37c00d3055a28c1393a495b4358d212c18\n"
    }
  ]
}
---
When the voice is muted "voice is off" should be spoken. When the voice is unmuted "voice is on" should be spoken. This will serve as an indication to the user that the action was successful.

        