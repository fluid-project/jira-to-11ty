---json
{
  "title": "FLUID-78",
  "summary": "Nested floating elements sometimes cause jQuery UI's drag-and-drop to fail",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "Joseph Scheuhammer",
  "reporter": "Joseph Scheuhammer",
  "date": "2007-10-29T16:49:09.000-0400",
  "updated": "2008-04-07T15:45:54.000-0400",
  "versions": [],
  "fixVersions": [
    "0.3"
  ],
  "components": [
    "Reorderer"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2008-04-07T15:45:54.000-0400",
      "body": "This is really an issue with uPortal's old skin CSS. Given that they've done a substantial overhaul on their skin for the 3.0 release, and the fact that we can't possibly work with every type of half-broken styling the world might throw at us, I don't think there's anything here to fix.\n"
    }
  ]
}
---
jQuery UI's drag-and-drop (Sortable) does not work with the "original" uPortal tabbed navigation example.  This is caused by the presence of nested floating elements – see "#tab", "#tab a", and "#tab a span" selectors in "spring\_standard.css".

Although the following url is about the interface.eyecon.ro sortable extension to jQuery, it contains a note about passing a helper css class when the sortable elements have a float style.  The note is just below the table of options:\
<http://interface.eyecon.ro/docs/sort>

This proved relevant to jQuery UI's drag-and-drop.  See the branch FLUID-67 where this helper class technique was implemented successfully.

        