---json
{
  "title": "FLUID-6177",
  "summary": "Implement a feature to allow for self voicing selected text",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "New Feature",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2017-08-01T09:20:45.110-0400",
  "updated": "2018-07-20T10:46:02.860-0400",
  "versions": [],
  "fixVersions": [
    "3.0"
  ],
  "components": [
    "Self Voicing"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-6175/",
      "key": "FLUID-6175",
      "summary": "Implement a self voicing widget with a play/pause button"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2018-05-01T16:07:09.103-0400",
      "body": "Can use the \"selectionchange\" event, along with \"window\\.getSelection()\" to know when a user selection has been made and to get the contents of the selection.\n\nsee: <https://developer.mozilla.org/en-US/docs/Web/API/Selection>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2018-07-20T10:46:02.857-0400",
      "body": "PR ( <https://github.com/fluid-project/infusion/pull/903> ) merged into the project repo at 272cf702d5bf749172c0ba2015ba00dcceb526b1\n"
    }
  ]
}
---
Based on designs ( <https://wiki.fluidproject.org/display/fluid/%28Floe%29+UI+Options+Design+Walkthrough%2C+C.1?preview=/32014373/34734325/uio_tts2.jpg> ).

 

When self voicing is enabled, a user should be able to select some text to be self voiced. A play button should appear over the selected text, which can be clicked on to self voice the selection.

        