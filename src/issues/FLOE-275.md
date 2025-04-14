---json
{
  "title": "FLOE-275",
  "summary": "Correct tab order for First Discovery Tool",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2015-02-13T11:49:50.193-0500",
  "updated": "2015-11-03T11:25:33.399-0500",
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
      "date": "2015-02-13T12:21:20.158-0500",
      "body": "Submitted a pull request:\\\n<https://github.com/fluid-project/first-discovery/pull/20>\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2015-02-13T15:39:33.520-0500",
      "body": "This is good for now. We will likely refine this after feedback from Dana and others.\n"
    }
  ]
}
---
The correct tab order should start with the controls in the panel, followed by the back/next navigation buttons, and finish with the mute and help buttons from the top.

For this iteration, using the next/back buttons won't push focus to the panel controls. Although this may be implemented in the future.

<http://wiki.fluidproject.org/display/fluid/%28PGA%29+Keyboard+and+self-voicing+interaction+for+first+discovery+tool>

        