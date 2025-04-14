---json
{
  "title": "FLOE-317",
  "summary": "Add a speech rate panel to the FD tool",
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
  "date": "2015-04-30T16:31:44.435-0400",
  "updated": "2015-11-03T13:10:10.988-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "First Discovery"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLOE-347/",
      "key": "FLOE-347"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2015-05-12T13:58:11.600-0400",
      "body": "Keep in mind that when the rate is adjusted on the fly, the TTS should re-read something at the new rate, and the 'something' should be long enough for the user to determine if they like the new speed.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-05-21T15:58:22.866-0400",
      "body": "Submitted a pull request:\\\n<https://github.com/fluid-project/first-discovery/pull/54>\n"
    },
    {
      "author": "Cindy Li",
      "date": "2015-05-22T13:04:43.430-0400",
      "body": "The pull request has been merged into the master branch @ b9a53cfaba077ac2c4524bd2d8800b9f219987d0\n"
    }
  ]
}
---
This should be a range adjuster. Hopefully, we can re-use something from the PMT.

        