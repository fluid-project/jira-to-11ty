---json
{
  "title": "FLUID-2138",
  "summary": "OSDPL Accessibility: Left Sidebar is too long.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jonathan Hung",
  "reporter": "Jonathan Hung",
  "date": "2009-01-16T14:00:50.000-0500",
  "updated": "2009-02-18T15:33:09.000-0500",
  "versions": [
    "0.6"
  ],
  "fixVersions": [
    "0.8"
  ],
  "components": [
    "OSDPL"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-2133/",
      "key": "FLUID-2133",
      "summary": "OSDPL Accessibility - Combine FAQs into a single link in Navigation"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2009-02-18T15:30:58.000-0500",
      "body": "iteration27\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2009-02-18T15:33:09.000-0500",
      "body": "With a new layout, the left sidebar is now significantly condensed.\n"
    }
  ]
}
---
The left sidebar takes too long to tab through, read on a screen reader, and to mentally process. We should trim this down some more if possible.

Suggestion:

* remove License, and Copyright links since they're already found in the footer.
* FAQs to be combined. <https://fluidproject.atlassian.net/browse/FLUID-2133#icft=FLUID-2133>

        