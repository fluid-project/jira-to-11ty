---json
{
  "title": "FLUID-937",
  "summary": "Text is larger than edit field",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-issue",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Duplicate",
  "reporter": "Daphne Ogle",
  "date": "2008-07-17T18:02:16.000-0400",
  "updated": "2011-01-04T14:13:21.892-0500",
  "versions": [
    "0.4",
    "0.5",
    "0.6beta1",
    "0.6",
    "0.7",
    "0.8",
    "1.0",
    "1.1",
    "1.1.1",
    "1.2"
  ],
  "fixVersions": [],
  "components": [
    "Inline Edit"
  ],
  "environment": "Mac Firefox\n",
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-1528/",
      "key": "FLUID-1528"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-885/",
      "key": "FLUID-885",
      "summary": "Font styling displayed differently in edit vs non-edit mode"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2008-07-21T16:41:24.000-0400",
      "body": "This has been rehoused as part of an \"umbrella issue\" on size changes in components.\n\nRight now, the component \"attempts\" to size itself based on its size when in non-editable mode, which sort of falls between the stools - the size chosen is generally \"sensible\", but fails to achieve either \"seethe-free layout\" when in a table eg. (because it adds a little extra padding to accommodate the editable view) but also fails to achieve \"full visibility\", since if for example the font chosen for the editable view is larger than that in the non-edit view (which is the case in the \"announcements\" sample, the edit view exceeds even the \"extra padded\" length of the non-edit view.&#x20;\n\nWe should probably choose which of these objectives (or possibly even both!) we want to go for. Should the edit view simply be \"overlayed\" on top of the non-edit view, or should we do some more CSS magic etc. to make sure that we can either allow extra space \"up front\" to prevent seethe, or should we just try harder to measure the size of the editable view \"just before\" it is slapped into the document so that we are at least sure it is big enough to display some particular piece of text?\n"
    },
    {
      "author": "Daphne Ogle",
      "date": "2008-07-21T19:05:15.000-0400",
      "body": "Where is font size controlled for edit?  Is that something the component sets or is it done by the application? &#x20;\n\nI think it's generally good practice for the display and edit mode to be the same size so users can see how it will look on display while editing.  This gets much more complicated with the component since I'm sure it doesn't have anything to say about display size.  So by following the display size we are tied to the design choice of the integrating app (assuming we do control the edit font size).\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-10-31T08:58:12.000-0400",
      "body": "design-watched\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2011-01-04T14:13:21.890-0500",
      "body": "Duplicate of <https://fluidproject.atlassian.net/browse/FLUID-1528#icft=FLUID-1528>.\n"
    }
  ]
}
---
This doesn't happen in Safari.

When edit mode is initiated, the text is larger than the text field so the user can't see all the text they are editing.   We should calculate the text field size based on the size of the text in edit mode and then add some cushion on the end.

        