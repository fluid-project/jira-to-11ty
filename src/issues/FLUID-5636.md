---json
{
  "title": "FLUID-5636",
  "summary": "Styling improvements for Infusion documentation",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Do",
  "reporter": "Anastasia Cheetham",
  "date": "2015-04-20T09:54:13.911-0400",
  "updated": "2022-03-14T12:40:07.344-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Tech. Documentation"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2022-03-14T12:40:07.256-0400",
      "body": "I'm closing this as won't do. In fact it appears that the scrolling has already been addressed. However, the other issues reflect what is potentially larger design decisions and should be considered with a larger redesign of the site when there is time to do that in the future. \n"
    }
  ]
}
---
Antranig made the following styling suggestion for the Infusion documentation:

Styling suggestions - the current top-level categorisation doesn't have a very evident styling. I suggest that

i) The top-level items be moved from the right to the left of the top level pane - especially since we now have UIO there which clutters that area more.\
ii) The active item be given a "tabbed" styling (that is, a background which agrees with the main page background, and a continuous layout) to emphasise that it is the section that the user is currently in.

The other major styling issues I notice are:

a) The "inline code style" with the rounded rectangle is obtrusive and sometimes overlaps items on the next line and/or gets line-wrapped. I think we should do away with that and just have a styling based on font/colour\
b) The navigation for the left pane should have a "scroll-to" so that the currently selected item is always visible. For example, currently navigating to <http://docs.fluidproject.org/infusion/development/PreferencesEditor.html> has the active item scrolled off the bottom of the left pane and so the user will become confused about their location.

        