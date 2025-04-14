---json
{
  "title": "FLUID-3791",
  "summary": "Labels for Inline Edit \"fields\" should be clickable.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Jonathan Hung",
  "date": "2010-10-12T11:32:13.238-0400",
  "updated": "2014-07-15T14:36:22.229-0400",
  "versions": [
    "1.3",
    "1.4"
  ],
  "fixVersions": [],
  "components": [
    "Inline Edit"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2011-01-11T10:07:55.626-0500",
      "body": "The more general question is:\\\nIs it possible to activate an inline edit component using an additional control (as well as keeping the default behaviour)?\\\nThe example to illustrate this is the label / field form example mentioned in the above bug.\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2014-07-15T14:36:17.547-0400",
      "body": "Not an issue with the component.\n"
    }
  ]
}
---
In implementations where inline editable text has an associated label, the label should be clickable to activate the inline edit field. This is similar to how web forms should behave: clicking on the label should put a focus / edit cursor inside the associated text field.

The interaction makes sense and visually obvious, however how is this interaction expressed properly through markup to maintain accessibility since inline edit implementations are not traditional text fields?

        