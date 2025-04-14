---json
{
  "title": "FLUID-1830",
  "summary": "Enable \"lazy\" rendering of edit views for InlineEdit",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "New Feature",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Antranig Basman",
  "date": "2008-11-19T20:26:06.000-0500",
  "updated": "2009-11-13T08:56:53.000-0500",
  "versions": [],
  "fixVersions": [
    "0.7"
  ],
  "components": [
    "Inline Edit"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2009-02-13T22:18:56.000-0500",
      "body": "This was actually implemented for 0.7... or maybe even 0.6.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-11-13T08:56:53.000-0500",
      "body": "Closed as per previous comment\n"
    }
  ]
}
---
Now that we have integration points for arbitrary kinds of "rich text" editors, amongst other kinds of widget, an important affordance would be "lazy" rendering of these edit views, since, especially in the case of FCKEditor, initialisation of the iframe and its massive Christmas tree of decorations is enormously expensive.&#x20;

        