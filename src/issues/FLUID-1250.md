---json
{
  "title": "FLUID-1250",
  "summary": "Reorderer - drop marker hide() and show() are too presumptuous",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Jacob Farber",
  "date": "2008-08-20T11:52:45.000-0400",
  "updated": "2011-02-22T16:27:50.764-0500",
  "versions": [
    "0.5beta1"
  ],
  "fixVersions": [
    "0.5"
  ],
  "components": [
    "Reorderer"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2008-09-07T18:42:47.000-0400",
      "body": "Fixed at revision 5478\n"
    },
    {
      "author": "Jacob Farber",
      "date": "2008-09-17T12:28:31.000-0400",
      "body": "Antranig and I exhaustively analyzed what hide() and show() do in action. \\\nIt seems the computed style of an element in creation is fine (for an LI it was display:list-item) yet that gets converted into display:block somwhere before being injected into the DOM and therefore jQuery keeps using display:block, which isnt correct.\n\nThe solution in the meantime is to use $(el).css(\"display\",\"\") to reveal the drop marker until we can figure out how this happens and how to avoid it.\\\nThats my best guess.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-02-22T16:27:50.762-0500",
      "body": "Closing issues that were resolved for 1.0 and earlier releases.&#x20;\n"
    }
  ]
}
---
When manipulating the drop marker, using jQuery's show() method sets the display property to "block", which breaks layouts that require things to be displayed inline.\
An alternative is to not use show() and hide(), rather remove and inject the drop marker as needed, allowing existing CSS declarations handle the display type.

        