---json
{
  "title": "FLUID-3445",
  "summary": "Selecting items via keyboard does not (un/)highlight until mouseover",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "James Yoon",
  "date": "2009-12-17T13:28:42.000-0500",
  "updated": "2014-03-03T11:20:13.315-0500",
  "versions": [
    "1.4"
  ],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Infusion Builder"
  ],
  "environment": "Safari, Firefox\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-05-07T14:00:13.359-0400",
      "body": "a11y issue\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-03-03T11:20:13.314-0500",
      "body": "builder.fluidproject.org has been taken down and there are no immediate plans to replace it. Currently all builds are expected to be generated directly from the grunt build scripts.\n\n<http://fluid.2324889.n4.nabble.com/Infusion-Builder-issues-tp8926.html>\n"
    }
  ]
}
---
To replicate issue (in Safari 4):

* Tap tab until at a checkboxable item
* Checkbox is highlighted, but title is not (BUG)
* Mouse over the item
* Both checkbox and title are now highlighted
* Tap tab to move to next element
* Title of previous item is still highlighted (BUG)
* Mouse over the previous item
* Title of previous item is now unhighlighted

        