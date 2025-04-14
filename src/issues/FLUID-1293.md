---json
{
  "title": "FLUID-1293",
  "summary": "OSDPL Stlying: Story teaser block renders story titles too large",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Trivial",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "Jonathan Hung",
  "reporter": "Jonathan Hung",
  "date": "2008-08-21T14:07:27.000-0400",
  "updated": "2008-10-29T10:44:55.000-0400",
  "versions": [
    "0.4"
  ],
  "fixVersions": [],
  "components": [
    "OSDPL"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-1681/",
      "key": "FLUID-1681"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2008-10-14T14:13:16.000-0400",
      "body": "Can be solved by using the Fluid-Clean theme. See this task:\\\n<http://issues.fluidproject.org/browse/FLUID-1681>\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2008-10-21T14:43:01.000-0400",
      "body": "Iteration20\n\nActually this problem was not fixed because the story teaser block was moved from the sidebar to the main content area. This makes the header text fit better in the overall context (whereas it really didn't fit nicely in the sidebar).\n"
    }
  ]
}
---
The Story Teaser block renders story titles using H2 elements. This is problematic for pages that use the Teaser block as it can create a bad header hierarchy.&#x20;

In particular, the Main page uses the Teaser block. To work around this, other text on the page was emphasized with a shaded DIV to create a more natural visual flow.

Task: investigate if it's possible to style the teaser block ourselves. It'd be nice if we can call a PHP method and style that ourselves.

        