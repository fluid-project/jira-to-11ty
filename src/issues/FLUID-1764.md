---json
{
  "title": "FLUID-1764",
  "summary": "UNDO: need to attach a custom event to Undo based on events in Inline Edit",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "Eli Cochran",
  "reporter": "Eli Cochran",
  "date": "2008-10-31T16:56:01.000-0400",
  "updated": "2011-02-22T16:27:47.854-0500",
  "versions": [
    "0.6beta1",
    "0.6",
    "0.7",
    "0.8"
  ],
  "fixVersions": [
    "0.8"
  ],
  "components": [
    "Inline Edit"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-1703/",
      "key": "FLUID-1703"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2009-01-22T15:42:02.000-0500",
      "body": "Eli, could you comment on this issue and determine whether you still need more functionality from the InlineEdit/Undo combo? Cheers.\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2009-05-05T11:31:46.000-0400",
      "body": "While not fixed. I did find a work around by attaching events to the elements themselves. Perhaps there is a better way to do it but this will do.&#x20;\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2009-05-05T11:32:39.000-0400",
      "body": "sorry should not have resolved fixed. reopening to resolve will not fix\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2009-05-05T11:32:55.000-0400",
      "body": "should have been \"Won't fix\"\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-02-22T16:27:47.852-0500",
      "body": "Closing issues that were resolved for 1.0 and earlier releases.&#x20;\n"
    }
  ]
}
---
I'm attempting to implement the following scenario for InlineEdit and finding that I'm missing some hooks to do it.&#x20;

While actually editing an inlineEditable item, hide the Undo/Redo links for that item. \[The reason for this is two fold: 1) Reduce clutter. 2) Undo and Redo are ambiguous while actually editing.]&#x20;

I should like, at the time that I specify the fluid.undoDecorator as a componentDecorator for inlineEdit, to be able to specify which inlineEdit events I want Undo to listen to and what I want to fire when the event happens.&#x20;

        