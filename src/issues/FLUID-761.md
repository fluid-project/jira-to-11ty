---json
{
  "title": "FLUID-761",
  "summary": "Multiple inline edits: various actions in one editor trigger a 'finish' on last editor on page",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Michelle D'Souza",
  "reporter": "Anastasia Cheetham",
  "date": "2008-06-10T17:25:25.000-0400",
  "updated": "2008-06-23T17:34:06.000-0400",
  "versions": [],
  "fixVersions": [
    "0.4"
  ],
  "components": [
    "Inline Edit"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2008-06-11T10:34:51.000-0400",
      "body": "Platform Differences:\n\nFF2 on Mac and Windows: both other editors get the 'finish'\\\nFF3 on Mac (Minefield): only the last editor on page gets the 'finish'\\\nFF3 Windows: both other editors get the 'finish'\\\nIE6 and IE7: both editors get the 'finish'\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2008-06-17T09:39:50.000-0400",
      "body": "This was fixed by removing the click handler on the body.&#x20;\n"
    }
  ]
}
---
To reproduce:

<http://build.fluidproject.org/fluid/tests/fluid-tests/manual/inline-edit/InlineEdit.html>

* Click on the first or second editor
* Try any one of:
* use the mouse to select a chunk of the text in the field
* use the mouse to click once elsewhere in the field
* use the mouse to select a word in the field by double-clicking on it

The last editor on the page will get a 'finish' triggered on it - the text that was inside the hidden input element is copied to the display element.

dev-iteration36

        