---json
{
  "title": "FLUID-780",
  "summary": "Implement undo functionality",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "New Feature",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Michelle D'Souza",
  "date": "2008-06-17T10:24:27.000-0400",
  "updated": "2011-02-22T16:27:58.284-0500",
  "versions": [
    "0.4"
  ],
  "fixVersions": [
    "0.5beta1"
  ],
  "components": [
    "Inline Edit"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-958/",
      "key": "FLUID-958",
      "summary": "Create global \"external contract\" for components with respect to \"model state\" and rendering therefrom"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Daphne Ogle",
      "date": "2008-07-22T00:33:53.000-0400",
      "body": "Added details from design storycard\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2008-07-31T14:23:56.000-0400",
      "body": "Work merged in at revision 5312\n"
    },
    {
      "author": "Colin Clark",
      "date": "2008-07-31T17:30:48.000-0400",
      "body": "infusion-05-wishlist\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2008-08-11T13:24:53.000-0400",
      "body": "Still not properly working for multiple editors on the same page. Also needs a way to infuse undoability onto many edits in a single call (a la fluid.inlineEdits()).\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2008-08-11T14:33:40.000-0400",
      "body": "Corrected multiple undo issue with test cases, added ability to create multiple undos in a single operation at revision 5344\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-02-22T16:27:58.283-0500",
      "body": "Closing issues that were resolved for 1.0 and earlier releases.&#x20;\n"
    }
  ]
}
---
Implement Undo functionality and provide an affordance in the form of an icon.

From the storycard:

Details:

* Once an edit is complete, provide user with "undo edit" link (perhaps replaced with icon later)
* The link is persistent until the user goes to another page
* The link undoes the previous edit
* Should be placed close the edited field

Inline Edit Storyboard - <http://wiki.fluidproject.org/x/xQAz>

dev-iteration39

        