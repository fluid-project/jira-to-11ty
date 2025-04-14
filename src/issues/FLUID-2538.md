---json
{
  "title": "FLUID-2538",
  "summary": "Can't use the enter key to exit a simple text inline edit field: using IE 8",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2009-04-06T12:51:46.000-0400",
  "updated": "2011-01-14T09:53:27.814-0500",
  "versions": [
    "1.0"
  ],
  "fixVersions": [
    "1.1"
  ],
  "components": [
    "Demos",
    "Inline Edit"
  ],
  "environment": "IE 8 (Win Vista)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-06-03T12:30:37.000-0400",
      "body": "Appears to have been fixed, possibly with the update to the quick start example.\n\nTested using:\n\nIE 8 (Win Vista)\n"
    }
  ]
}
---
Can't use the enter key to exit a simple text inline edit field

Steps to reproduce:

1\) Open the inline edit quick start example\
<http://build.fluidproject.org/infusion/standalone-demos/quick-start-examples/inlineEdit/html/InlineEdit.html>

2\) Using the keyboard  navigate to one of the inline edit fields

3\) Use the 'space' or 'enter' key to open it in edit mode

Notice that you are unable to close the inline edit field using the 'enter' key.

        