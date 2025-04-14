---json
{
  "title": "FLUID-3077",
  "summary": "Text inside inline editor is being lost after canceling the text edit.",
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
  "reporter": "y z",
  "date": "2009-08-05T15:37:30.000-0400",
  "updated": "2009-08-07T15:01:43.000-0400",
  "versions": [
    "1.1.1",
    "1.2"
  ],
  "fixVersions": [
    "1.1.1",
    "1.2"
  ],
  "components": [
    "Inline Edit"
  ],
  "environment": "FF3.1\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-08-06T13:49:28.000-0400",
      "body": "Bug Parade 1.1.1 release&#x20;\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2009-08-07T12:51:46.000-0400",
      "body": "Two issues - \\\nFirstly, issuing \"cancel\" would cause a corruption of the \"isEditing\" state, since it is listening for the presence of afterFinishEdit which is not fired.\\\nSecondly, an obscure Firefox issue requires that updates to a control which has received the escape key must be processed outside the event stack - since an apparently unpreventable effect of the Escape key is to restore the field to its initial value when the event returns. It may be that this is actually the **effect** of the preventDefault processing trying to defeat the natural default behaviour of clearing the field. In any case, this is required.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-08-07T15:01:43.000-0400",
      "body": "Verified fix using:\n\nFF2, FF3, FF3.5, Opera 9.6, Safari 3.2, Safari 4 (Mac OS 10.5)\\\nFF3, IE7, IE8 (Win Vista)\n"
    }
  ]
}
---
Steps to reproduce:

* Go to quick start example page for inline editors: <http://build.fluidproject.org/infusion/standalone-demos/quick-start-examples/inlineEdit/html/InlineEdit.html>
* Click on the simple inline editor to edit.\
  1\)
* Remove all the text and press Escape.
* Click anywhere in the browser and notice that text now says "Click here to edit" instead of the original text.\
  or 2)&#x20;
* Edit(add/remove) some text from the text field and press Escape.
* Click anywhere in the browser and notice that text now has the changes saved instead of just the original text.

        