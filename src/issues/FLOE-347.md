---json
{
  "title": "FLOE-347",
  "summary": "Disable speech rate panel if speak text turned off",
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
  "date": "2015-05-22T07:31:05.585-0400",
  "updated": "2015-11-03T13:10:11.396-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "First Discovery"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLOE-317/",
      "key": "FLOE-317",
      "summary": "Add a speech rate panel to the FD tool"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2015-05-22T13:57:29.796-0400",
      "body": "Submitted a pull request:\\\n<https://github.com/fluid-project/first-discovery/pull/56>\n"
    },
    {
      "author": "Cindy Li",
      "date": "2015-05-25T10:40:26.873-0400",
      "body": "The pull request has been merged into the master branch @ c771914a2963b3abbcf3dd751a9bc38a2ff2f1df\n"
    }
  ]
}
---
If the speak text preference is disabled, the speech rate panel should be disabled.

The panel adjuster should be replaced by a messaging saying:

"If you want to use this option,\
turn on “speak text aloud” on the previous screen. Press the back button to get there or select the “turn voice ON”\
button above."

<http://wiki.fluidproject.org/download/attachments/40797428/FD%20tool%20for%20May%202015%20workshop%20v3.pdf?version=2&modificationDate=1432147626947>

        