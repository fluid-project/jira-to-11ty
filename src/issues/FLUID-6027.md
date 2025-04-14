---json
{
  "title": "FLUID-6027",
  "summary": "VoiceOver reads the Remove Errors button as \"button\"",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2016-11-02T12:27:17.575-0400",
  "updated": "2016-11-03T15:23:03.187-0400",
  "versions": [],
  "fixVersions": [
    "2.0"
  ],
  "components": [
    "Uploader"
  ],
  "environment": "Safari 10 (macOS 10.12)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2016-11-02T12:29:47.961-0400",
      "body": "On inspecting the Remove Errors button it looks like a \"fl-uploader-hidden\" class is added to the \\<span> containing the error button text. However this class applies \"display: none;\" to the element. Using display:none removes the element from the accessibility tree. Rather the \"fl-hidden-accessible\" class from fluid.css should be used instead. This will hide it visually but allow it to be accessed by an AT.\n"
    },
    {
      "author": "Cindy Li",
      "date": "2016-11-03T15:22:56.581-0400",
      "body": "The pull request <https://github.com/fluid-project/infusion/pull/773> has been merged into the master at 0c483584d4ee60f0596aa18350de0a119b6a48bc\n"
    }
  ]
}
---
Steps to reproduce:

1\. Open the [Uploader Demo](http://build.fluidproject.org/infusion/demos/uploader/)\
2\. Enable VoiceOver\
3\. Attempt to add a file larger than 20MB to be uploaded\
4\. Put focus on the Remove Errors button\
Notice that the VoiceOver reports the remove errors button as "button"

        