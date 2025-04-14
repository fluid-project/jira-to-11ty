---json
{
  "title": "FLUID-3182",
  "summary": "The InlineEdit demo in the new demo portal has crufty code at the top of it.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-issue",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jacob Farber",
  "reporter": "Colin Clark",
  "date": "2009-09-15T17:37:32.000-0400",
  "updated": "2011-01-14T11:54:51.316-0500",
  "versions": [],
  "fixVersions": [
    "1.1.2"
  ],
  "components": [
    "Inline Edit"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-09-22T10:55:45.000-0400",
      "body": "Bug Parade Infusion 1.1.2&#x20;\n"
    },
    {
      "author": "Jacob Farber",
      "date": "2009-09-22T23:09:04.000-0400",
      "body": "Since we could implement a the function in the integration demo, I figured I could save you the trouble and just delete it from the simple demo.\n"
    },
    {
      "author": "Jacob Farber",
      "date": "2009-09-30T16:46:08.000-0400",
      "body": "I removed the function, awaiting review\n"
    },
    {
      "author": "Colin Clark",
      "date": "2009-10-02T18:39:48.000-0400",
      "body": "I've review Jacob's change and it looks good. +1\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-01-14T11:27:03.034-0500",
      "body": "Reopening these issues in order to add the inline edit component to them.&#x20;\n"
    }
  ]
}
---
The Inline Edit component demo has this code at the top of it:

/\*\*

* Customize the undo subcomponent appearance.
* @param {Object} that
* @param {Object} targetContainer\
  &#x20;    \*/\
  &#x20;   var myUndoRenderer = function (that, targetContainer) {\
  &#x20;       var markup = "\<span class='flc-undo'>" +\
  &#x20;       "\<span class='flc-undo-undoContainer'>\<a href='#' class='flc-undo-undoControl'>\<img src='../../../../integration-demos/sakai/images/undo.png' alt='Undo your edit' title='Undo your edit' style='border:none' />\</a>\</span>" +\
  &#x20;       "\<span class='flc-undo-redoContainer'>\<a href='#' class='flc-undo-redoControl'>\<img src='../../../../integration-demos/sakai/images/redo.png' alt='Redo your edit' title='Redo your edit' style='border:none' />\</a>\</span>" +\
  &#x20;       "\</span>";\
  &#x20;       var markupNode = $(markup);\
  &#x20;       targetContainer.append(markupNode);\
  &#x20;       return markupNode;\
  &#x20;   };&#x20;

This is Eli's fancy undo/redo markup, but this renderer isn't hooked up anywhere. If we want to use it, we should hook it up, otherwise delete it.

        