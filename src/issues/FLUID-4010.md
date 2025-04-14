---json
{
  "title": "FLUID-4010",
  "summary": "Tiny MCE not working with IE9 for Rich Text Inline Edit.",
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
  "reporter": "Mike Lam",
  "date": "2010-12-22T14:48:23.457-0500",
  "updated": "2014-04-02T15:49:30.052-0400",
  "versions": [
    "1.3.1",
    "1.4"
  ],
  "fixVersions": [],
  "components": [
    "Inline Edit"
  ],
  "environment": "IE9 / Win 7\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "John Kremer",
      "date": "2011-02-22T09:47:22.272-0500",
      "body": "Feb 22 - \\\nCan insert some text, but cannot insert link, indent, lists, url, etc - mouse does not work for selecting formatting options at all. \\\nYou can highlight the text with the keyboard (shift and arrow) only. Cannot mouse click off of the highlighted text. \\\nCan bold, italic, underline with keyboard shortcuts only on highlighted text. &#x20;\n\n<http://build.fluidproject.org/infusion/demos/inlineEdit/rich/demo.html>\n"
    },
    {
      "author": "heidi valles",
      "date": "2011-02-23T16:27:16.631-0500",
      "body": "Also after using TMC, 'Edit' link for ckeditor doesn't work. \\\nThere's also a weird bug where undo/redo link text doesn't change until you move pointer off the link.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2014-04-02T15:49:30.051-0400",
      "body": "Tested pre-1.5, working fine now.\n"
    }
  ]
}
---
Tiny MCE not compatible with IE9.    Save button not clickable and the textarea is not always editable.

        