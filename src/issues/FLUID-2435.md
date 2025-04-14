---json
{
  "title": "FLUID-2435",
  "summary": "Simple text inline edit: all text not selected when field activated",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Duplicate",
  "reporter": "Herb Wideman",
  "date": "2009-04-01T10:51:32.000-0400",
  "updated": "2009-04-14T10:31:36.000-0400",
  "versions": [
    "1.0"
  ],
  "fixVersions": [
    "1.1"
  ],
  "components": [
    "Inline Edit"
  ],
  "environment": "XP: FF3, Opera 9.6\n",
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-1612/",
      "key": "FLUID-1612",
      "summary": "Selection of inline edit text field puts caret at the end of editable text instead of highlighting all of the text"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2009-04-07T14:18:13.000-0400",
      "body": "Inline edit has an option that determines whether or not the text is highlighted upon selection. Likely that option is not on in the sakai example.&#x20;\n"
    }
  ]
}
---
On the Sakai test page\
<http://build.fluidproject.org/infusion/integration-demos/sakai/html/inline-edit-announcements.html>\
in simple inline text edit, when you click in an editable field to activate it, or activate it by using the space bar or return key, all text is supposed to be highlighted (selected). No text is being selected however - there is just a cursor insertion. (This does not occur with Bspace test page.)

        