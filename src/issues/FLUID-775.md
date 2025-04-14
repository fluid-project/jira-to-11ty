---json
{
  "title": "FLUID-775",
  "summary": " Allow user to edit a simple, single piece of text without leaving their context.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "New Feature",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Michelle D'Souza",
  "date": "2008-06-13T08:31:54.000-0400",
  "updated": "2011-02-22T16:27:55.058-0500",
  "versions": [],
  "fixVersions": [
    "0.4"
  ],
  "components": [
    "Inline Edit"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-854/",
      "key": "FLUID-854",
      "summary": "Implement a minimum width to an Inline Edit field"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Allison Bloodworth",
      "date": "2008-06-25T00:32:55.000-0400",
      "body": "change to instructions above:     \\* Hover message appears after hovering for <2 seconds.\\\nAdditional item: Put a (reasonably-sized) min-width on empty fields so that the yellow background shows up on rollover\n"
    },
    {
      "author": "Colin Clark",
      "date": "2008-07-22T23:17:26.000-0400",
      "body": "For the 0.4 release, we have implemented all the features of Story #1, with the exception of the Undo feature.\n\nI've moved the Undo issue into a separate bug, and am resolving this umbrella issue.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-02-22T16:27:55.057-0500",
      "body": "Closing issues that were resolved for 1.0 and earlier releases.&#x20;\n"
    }
  ]
}
---
* &#x20;When the user hovers over the text with the mouse, the text will be highlighted
* The user can Tab to the text and the highlight will also appear
* Hover message appears after hovering for <3 seconds.
* When the user clicks on the text, an edit field appears. Cursor is placed at end of current text.
* Single click selects word, double click selects entire text
* The user can type and press enter to automatically save the text.
* Undo icon appears next to edited field for the remainder of users session.

See the mockups:  	 <http://wiki.fluidproject.org/x/xQAz>&#x20;

dev-iteration39

        