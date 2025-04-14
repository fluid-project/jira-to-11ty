---json
{
  "title": "FLOE-348",
  "summary": "Speech rate range is too large; engine stops talking at fast speeds",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Anastasia Cheetham",
  "date": "2015-05-26T08:43:44.746-0400",
  "updated": "2015-11-03T13:08:47.562-0500",
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
      "date": "2015-05-26T11:17:33.953-0400",
      "body": "Submitted a pull request:\\\n<https://github.com/fluid-project/first-discovery/pull/63>\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2015-05-28T11:05:10.242-0400",
      "body": "Merged at 9c4936edb3f79aab5c699f47686710b201f7fb0c\n"
    }
  ]
}
---
The speech rate range is currently the full range that the spec provides, but it doesn't take very much of an increase from the default to cause the speech to stop altogether. To reproduce:

* launch the tool, navigate to the speech rate screen
* increase the rate roughly 10-11 times
* note that the speech stops
* note that the range indicator is still very, very near the bottom, giving the impression that even faster speech is possible.

I suggest we set what appears to be an upper limit as an actual upper limit, so that the maximum is reached before the tts stops talking, and ensure that the indicator shows this as a maximum.

        