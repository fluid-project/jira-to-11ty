---json
{
  "title": "FLUID-1290",
  "summary": "OSDPL Accessibility: investigate convention for skip to main content links",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jonathan Hung",
  "reporter": "Jonathan Hung",
  "date": "2008-08-21T13:51:42.000-0400",
  "updated": "2009-01-20T13:52:14.000-0500",
  "versions": [
    "0.4"
  ],
  "fixVersions": [],
  "components": [
    "OSDPL"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2009-01-20T13:50:24.000-0500",
      "body": "From Mike Elledge:\n\n\"I think it could be disorienting since it is not conventional behavior. Also, we would be assuming that the person would be going to the main content on the page, and not something else, such as subnavigation, or related content, for example.\n\nThe one exception that comes to mind is if someone is clicking on a link to continue reading an article (\"Rest of article about Fluid project\", which unfortunately is usually titled \"More\"), in which case it should take them to the article itself, preferably at the point where the article continues from the previous page. That's also why ending content with a partial sentence (\"Fluid has been in operation for...\") has never made sense to me.\"\n"
    }
  ]
}
---
Investigate convention for skip to main content links, and make that link visible if that's what's advocated.

Talk to Mike Elledge about this.

        