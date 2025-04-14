---json
{
  "title": "FLUID-5005",
  "summary": "Experiment on a draggable floating menu for UIO text-to-speech ",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Open",
  "reporter": "Cindy Li",
  "date": "2013-04-30T15:42:48.105-0400",
  "updated": "2021-07-29T01:39:37.743-0400",
  "versions": [],
  "fixVersions": [
    "5.0"
  ],
  "components": [
    "Prefs Framework",
    "Self Voicing"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-6175/",
      "key": "FLUID-6175"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Cindy Li",
      "date": "2013-04-30T15:46:08.857-0400",
      "body": "I've started the implementation @ <https://github.com/cindyli/infusion/tree/FLUID-5005>\n\nThe text-to-speech menu in this branch has these features:\n\n1\\. A draggable floating menu;\\\n2\\. Auto-scroll into users' view when the page scrolls;\\\n3\\. Works with touch screens;\\\n4\\. Clicking on \"settings\" button pops settings menu. Clicking on anywhere else on the page, except the menu itself, closes the menu.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-06-15T10:21:50.291-0400",
      "body": "@@Cindy Li is the experimentation for this complete?\n"
    },
    {
      "author": "Cindy Li",
      "date": "2015-06-15T10:36:04.610-0400",
      "body": "@@Justin Obara, only the features described above were experimented in the specified branch, which doesn't yet have actual designed menu items and functionalities.\n"
    }
  ]
}
---
Text to speech design: <http://wiki.fluidproject.org/display/fluid/%28Floe%29+UI+Options+Design+Walkthrough%2C+C.1#%28Floe%29UIOptionsDesignWalkthrough,C.1-TexttoSpeech>

The draggable floating menu to experiment is the one that contains the play/pause etc. buttons.&#x20;

        