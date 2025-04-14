---json
{
  "title": "FLUID-527",
  "summary": "Modifications to the jquery-ui-tabs sample code",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "David Bolter",
  "date": "2008-04-23T23:29:56.000-0400",
  "updated": "2008-06-23T18:01:05.000-0400",
  "versions": [],
  "fixVersions": [
    "0.4"
  ],
  "components": [
    "Keyboard Accessibility"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-527/fresh-tabs-aria-patch.diff",
      "filename": "fresh-tabs-aria-patch.diff"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-527/jquery-ui-accessible-tabs.js.diff",
      "filename": "jquery-ui-accessible-tabs.js.diff"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-527/jquery-ui-accessible-tabs.js.diff",
      "filename": "jquery-ui-accessible-tabs.js.diff"
    }
  ],
  "comments": [
    {
      "author": "David Bolter",
      "date": "2008-04-23T23:31:21.000-0400",
      "body": "changes the arrow behaviour to perform a select, adds aria labelledby relations between tab and associated panel\n"
    },
    {
      "author": "David Bolter",
      "date": "2008-04-25T12:05:09.000-0400",
      "body": "This updated patch adds aria states:posinset, activedescendant, labelledby; auto-selection of tabs via arrow keys. Todo: move activedescendant to mouse/key common event point (but as is it is rather illustrative of the mouse-keyboard interaction topic)\n\nFYI - I'm done with this issue at least for the near future. Feel free to ping me though.\n"
    },
    {
      "author": "David Bolter",
      "date": "2008-06-04T15:11:18.000-0400",
      "body": "changed \"this\" to \"tab\" (for readability etc) (paired:DB,CC)\n"
    },
    {
      "author": "David Bolter",
      "date": "2008-06-04T15:12:30.000-0400",
      "body": "using each param instead of \"this\" for readability etc (paired:DB,CC)\n"
    },
    {
      "author": "Colin Clark",
      "date": "2008-06-06T22:19:33.000-0400",
      "body": "Thanks so much for your patches, David! I've applied the patch and it works really nicely.\n"
    }
  ]
}
---
Wasn't sure whether to create a task or an improvement. This is basically a place to throw patches that will hopefully help Colin and Eli's workshop demo.

        