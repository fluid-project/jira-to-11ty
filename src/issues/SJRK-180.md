---json
{
  "title": "SJRK-180",
  "summary": "Cannot publish a story with image and audio block simultaneously",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "reporter": "Gregor Moss",
  "date": "2019-01-15T17:32:44.403-0500",
  "updated": "2019-10-11T18:13:24.920-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool Server",
    "Storytelling Tool UI"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Gregor Moss",
      "date": "2019-01-17T17:52:32.535-0500",
      "body": "Unable to reproduce this issue on the iPad Mini iOS 12.1.1 or in Chrome 71 on Windows 10\n"
    },
    {
      "author": "Gregor Moss",
      "date": "2019-10-11T18:13:24.916-0400",
      "body": "Test Sequence 13 in the [Storytelling Tool Manual Testing Grid](https://wiki.fluidproject.org/display/fluid/Storytelling+Tool+Manual+Testing+Grid) is meant to test this exact scenario. In my latest round of testing, and indeed many previous rounds, I have not been able to reproduce this issue. Closing until further notice.\n"
    }
  ]
}
---
When attempting to publish a story containing an image block and an audio block (order not important), it will fail without giving any feedback. In the console, it lists an error 500 with the following message:\
"Cannot read property 'filename' of undefined"

This has also been confirmed with a story containing one video and one image block. One audio and one video seems to be okay, so it is likely related to image and media blocks being posted at the same time.

Reproduction steps used (issue no longer reproducible, see comment below):\
\* Begin a new story

* Add an image block
* Upload or capture an image
* Add an audio block
* Upload or capture an audio file
* Click "Continue"
* Click "Preview My Story"
* Click "Publish My Story"

Expect:

* Story to be published and to navigate to the story view page
* Or, for an error message to be displayed

Actual:

* Nothing happens: user stays on Preview page and no messaging is displayed
* Server returns a 500 with the message "Cannot read property 'filename' of undefined"

        