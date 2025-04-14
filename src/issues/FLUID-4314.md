---json
{
  "title": "FLUID-4314",
  "summary": "UI Options test page: \"Default\" entry of theme drop-down not legible when other themes selected",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Anastasia Cheetham",
  "date": "2011-06-28T14:56:45.609-0400",
  "updated": "2011-10-14T16:09:51.734-0400",
  "versions": [],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2011-10-14T15:57:02.293-0400",
      "body": "This seems fine as of 1.4\n"
    }
  ]
}
---
The "Some Kind Of News" test page (in the manual tests folder) has a background dark blue background colour defined in its stylesheet, but defaults to the default black foreground colour. Once any other theme is selected from the "Colour and Contrast" UIOptions drop-down, this base theme is applied to the "Default" option, making it virtually impossible to read.

To reproduce:

1\) Visit <http://build.fluidproject.org/infusion/tests/manual-tests/html/SomeKindOfNews.html>\
2\) Pull down the Display Preferences panel and choose one of the high-contrast themes (anythinig other than "Default")\
3\) Pull down the "Colour & Contrast" drop-down again, and see that the first entry is virtually unreadable

The "skon" theme should be adjusted to define suitable foreground and background colours, and use a different technique to accomplish the blue background on the page.

        