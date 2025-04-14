---json
{
  "title": "FLUID-1767",
  "summary": "Inline edit textarea reacts wrongly on enters",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Nicolaas Matthijs",
  "date": "2008-11-05T10:08:58.000-0500",
  "updated": "2011-02-22T16:27:58.451-0500",
  "versions": [],
  "fixVersions": [
    "0.6"
  ],
  "components": [
    "Inline Edit"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2008-11-07T13:10:34.000-0500",
      "body": "Fixed at revision 5977. There is a new \"submitOnEnter\" property, which if unassigned (the default) will infer from the tag type of the edit view, whether the enter key should be interpreted as a submission or left to propagate as default. If the property is set, it allows the interpretation of Enter to be forced.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-02-22T16:27:58.450-0500",
      "body": "Closing issues that were resolved for 1.0 and earlier releases.&#x20;\n"
    }
  ]
}
---
I created an inline edit field that had to change into a textarea. The html looks like this:

\<div class="inlineEditable">\
\<div id="txt\_aboutme" class="text">\</div>\
\<div class="editContainer">\
\<textarea class="edit">\</textarea>\
\</div>\
\</div>

This works, but if I hit enter while inside the edit mode, it switches back to view mode. This means I am\
unable to put enters inside my textarea, which is the whole points of a textarea.

        