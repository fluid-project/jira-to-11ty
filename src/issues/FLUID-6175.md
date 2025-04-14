---json
{
  "title": "FLUID-6175",
  "summary": "Implement a self voicing widget with a play/pause button",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "New Feature",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2017-08-01T09:11:07.957-0400",
  "updated": "2018-07-20T10:45:28.058-0400",
  "versions": [],
  "fixVersions": [
    "3.0"
  ],
  "components": [
    "Self Voicing",
    "Text To Speech"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-5005/",
      "key": "FLUID-5005",
      "summary": "Experiment on a draggable floating menu for UIO text-to-speech "
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-6176/",
      "key": "FLUID-6176"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-6177/",
      "key": "FLUID-6177"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2018-04-05T16:16:48.278-0400",
      "body": "Unicode values for play (U+25B6) and pause (U+2016)\n"
    },
    {
      "author": "Justin Obara",
      "date": "2018-04-19T12:54:02.809-0400",
      "body": "Discussion with @@Antranig Basman in the fluid-work IRC channel about how to add the UI as an enactor.\n\n<https://botbot.me/freenode/fluid-work/2018-04-19/?msg=99166163&page=2>\n\nIn summary we'll port over the fluid.newViewComponent ( <https://github.com/fluid-project/fluid-authoring/blob/FLUID-4884/src/js/ViewComponentSupport.js#L20> ). This will allow it to either use an existing container or render out its own.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2018-07-20T10:45:28.054-0400",
      "body": "Addressed with PR ( <https://github.com/fluid-project/infusion/pull/903> ) for <https://fluidproject.atlassian.net/browse/FLUID-6177#icft=FLUID-6177> merged into the project repo at 272cf702d5bf749172c0ba2015ba00dcceb526b1\n"
    }
  ]
}
---
The self voicing widget should be based off of the designs ( <https://wiki.fluidproject.org/display/fluid/%28Floe%29+UI+Options+Design+Walkthrough%2C+C.1?preview=/32014373/34734324/uio_tts1.jpg> ). At this point it will only include play / pause functionality, and be injected at a fixed location on the page ( similar to ToC ).

The self voicing will read through the entire page, but will be able to pause and resume.

        