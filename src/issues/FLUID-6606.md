---json
{
  "title": "FLUID-6606",
  "summary": "Investigate a method to exempt the preferences pane from currently applied contrast theme without requiring an iframe",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Open",
  "reporter": "Ned Zimmerman",
  "date": "2021-03-24T10:43:29.335-0400",
  "updated": "2022-02-03T10:38:37.447-0500",
  "versions": [],
  "fixVersions": [
    "5.0"
  ],
  "components": [
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-6628/",
      "key": "FLUID-6628"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-6605/",
      "key": "FLUID-6605",
      "summary": "Allow contrast themes to be applied using custom properties only"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2021-10-06T09:37:03.700-0400",
      "body": "Some discussions from the fluid-work matrix channel.\n\n<https://matrix.to/#/!mDigWuPWilYGiEcOCA:matrix.org/$L4cwFVfRdFJAag_csZ1-CSfcr5M9D41l6UV3656z15s?via=matrix.org>\n\nCodepen example: <https://codepen.io/jobara/pen/BaROLEq>\n\nThe gist is that we'd likely need to explicitly style the prefs editor, for all the parts that are affected by preferences. When adding a new preference we'd need to ensure that the base styling is added to the prefs editor as well. \n\nSome other gotchas of CSS custom properties: <https://twitter.com/5t3ph/status/1415114455831175169>\n"
    }
  ]
}
---
Currently, when a user applies a contrast theme, the UIO preference pane retains its default theme until the user has dismissed and reopened the pane. This ensures that the pane's content remains readable in case the applied theme is not. Right now, this is implemented using an iframe. It would be good (perhaps alongside a change like that proposed in FLUID-6605) to explore a way of scoping styles to do this without requiring an iframe, which would reduce much complexity. See: <https://matrix.to/#/!mDigWuPWilYGiEcOCA:matrix.org/$d8jdfqOPfVSkUQw9mfrmZvWTX_J3_6Q-LmAIoIvjGAk?via=matrix.org>

        