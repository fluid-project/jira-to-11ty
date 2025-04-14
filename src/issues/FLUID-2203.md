---json
{
  "title": "FLUID-2203",
  "summary": "Clicking on the text area, causes the rich-text inline edit to close",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2009-02-06T10:39:17.000-0500",
  "updated": "2009-02-09T08:48:16.000-0500",
  "versions": [
    "0.7"
  ],
  "fixVersions": [
    "0.8"
  ],
  "components": [
    "Inline Edit"
  ],
  "environment": "Opera 9.5 (Mac OS 10.5, Win XP)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2009-02-06T19:26:20.000-0500",
      "body": "Fixed at revision 6443\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2009-02-06T19:29:27.000-0500",
      "body": "There have also been several improvements to the rich text infrastructure in this release.\n\nFirstly, there is a new event, afterInitEdit, which is specific to rich text varieties that have asynchronous initialisation/rendering of the edit view (especially, FCKEditor in lazy mode). This allows developers to defer any behaviour until the native control is certainly available - which it may not be still at the conclusion of afterBeginEdit.\n\nSecondly, there is much improved behaviour on initial focusing - that is, the control is correctly focused and the caret is moved to the end of the editable area on edit, at least, on those browsers which correctly implement the respective rich text control's APIs. This doesn't work on FF2, but it is possible that our hard-won hack in fluid.setCaretToEnd could be brought in to patch up this particular case.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-02-09T08:48:16.000-0500",
      "body": "Verified fix using:\n\nOpera 9.5 (Mac OS 10.5, Win XP)&#x20;\n"
    }
  ]
}
---
Clicking on the text area, causes the rich-text inline edit to close

Steps to reproduce:

1\) Open the rich text inline edit example:\
<http://build.fluidproject.org/fluid/tests/fluid-tests/manual/inline-edit/rich-text-inline-edit.html>

2\) Click on any of the rich text inline edits to open it in edit mode

3\) Attempt to click on the text area to add text

Notice that the rich text inline edit closes

        