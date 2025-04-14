---json
{
  "title": "FLUID-1693",
  "summary": "Provide user-customizable methods for getting and setting values on the view and edit elements in InlineEdit, allowing support for rich text and non-standard form fields.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Colin Clark",
  "date": "2008-10-20T12:38:48.000-0400",
  "updated": "2011-02-22T16:27:55.661-0500",
  "versions": [],
  "fixVersions": [
    "0.6"
  ],
  "components": [
    "Inline Edit"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-1691/",
      "key": "FLUID-1691",
      "summary": "Add a public cancel method to InlineEdit, allowing people to use Save/Cancel buttons in their markup if desired."
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2008-10-20T12:41:41.000-0400",
      "body": "These two are related because they are both required to support a reasonable rich text version of the inline editor.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2008-11-13T21:40:27.000-0500",
      "body": "Merged into trunk at revision 6031. See the new \"accessor\" pattern which mandates a function member named \"value\" with jQuery.val()/text() etc. semantics. Standard examples are provided in the form of standardAccessor and richTextViewAccessor.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-02-22T16:27:55.659-0500",
      "body": "Closing issues that were resolved for 1.0 and earlier releases.&#x20;\n"
    }
  ]
}
---
At the moment, InlineEdit's implementation assumes two things:

1\. That the text being edited is just plain old text\
2\. That the edit field is a plain old HTML form element that will return the current value by calling the val() method.

We should externalize these assumptions in some form that would allow the user to override them with their own implementations if necessary. This could also lead to us packaging up a version of InlineEdit specifically intended for rich text editors.

        