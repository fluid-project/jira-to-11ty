---json
{
  "title": "FLUID-781",
  "summary": "Create a more accurate example of using an inline editor",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Michelle D'Souza",
  "reporter": "Michelle D'Souza",
  "date": "2008-06-17T10:27:11.000-0400",
  "updated": "2008-08-28T12:53:38.000-0400",
  "versions": [
    "0.4"
  ],
  "fixVersions": [
    "0.5beta1"
  ],
  "components": [
    "Inline Edit"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-1088/",
      "key": "FLUID-1088",
      "summary": "Component:  Create wireframe for inline edit in section info"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-08-28T12:53:38.000-0400",
      "body": "There is a new example of inline edit, which also contains undo/redo functionality. (<http://build.fluidproject.org/fluid/sample-code/inline-edit/section-info/section-info.html>)\n"
    }
  ]
}
---
Currently, the main example for inline editing is based on the Sakai Announcements tool. This isn't a particularly good example, since editing announcements involves several pieces of text simultaneously. This is a very different type of interaction from the one we've currently got.

We should show a more suitable context for our current style of inline editing, along with realistic markup.

Here are the Inline Edit wireframes and mockups: <http://wiki.fluidproject.org/x/xQAz>

        