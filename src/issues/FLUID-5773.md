---json
{
  "title": "FLUID-5773",
  "summary": "Create a handlebars helper which parses external links and appends the appropriate styling, target, etc to it",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "Jonathan Hung",
  "reporter": "Jonathan Hung",
  "date": "2015-09-25T08:30:28.137-0400",
  "updated": "2024-07-31T14:20:15.878-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Docs platform"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2015-12-14T13:40:03.824-0500",
      "body": "We can use the Markdown plugin and override it's renderer for links.  To do this, we may want to use marked.setOptions() and override the link renderer.\n\nSee:\\\n<https://github.com/chjj/marked#Options>\\\n<https://github.com/chjj/marked#renderer>\n"
    },
    {
      "author": "Simon Bates",
      "date": "2015-12-14T16:17:59.937-0500",
      "body": "It looks like we should be able to set options for Marked using the docpad-plugin-marked `markedOptions`:\n\n<https://github.com/docpad/docpad-plugin-marked/#marked-options>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2024-07-31T14:20:07.803-0400",
      "body": "I believe this was related to our old docs platform which was redesigned after moving to 11ty.\n"
    }
  ]
}
---
Create a helper function in Handlebars which parses a document for external links and adds the following to it automatically: target="\_blank" class="link-external"

This makes it easier for content authors and ensures external links all look and behave the same way.

        