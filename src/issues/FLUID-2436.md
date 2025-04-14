---json
{
  "title": "FLUID-2436",
  "summary": "Enter doesn't activate save: using IE",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Justin Obara",
  "date": "2009-04-01T11:11:29.000-0400",
  "updated": "2014-07-09T09:46:05.859-0400",
  "versions": [
    "1.0",
    "1.1",
    "1.1.1",
    "1.1.2",
    "1.2",
    "1.3"
  ],
  "fixVersions": [],
  "components": [
    "Demos",
    "Inline Edit"
  ],
  "environment": "IE 7  (Win Vista)\\\nIE 6, IE 7 (Win XP)\\\nIE 8 Win 7 unaffected.\n",
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-3082/",
      "key": "FLUID-3082"
    },
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-3087/",
      "key": "FLUID-3087"
    },
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-4472/",
      "key": "FLUID-4472"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-3267/",
      "key": "FLUID-3267"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-05-07T13:19:08.550-0400",
      "body": "a11y issue\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2011-01-06T16:00:11.498-0500",
      "body": "Tested with Infusion 1.3\\\nDoes not appear to be an issue with IE8 in Win7.\\\nStill appears to be an issue with IE6 in WinXP.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-07-09T09:46:05.851-0400",
      "body": "This doesn't seem to be an issue with IE 11. The older versions of IE listed in the environments are no longer supported.\n"
    }
  ]
}
---
Enter doesn't activate save

Steps to reproduce:

1\) Open the Rich Text Inline Editor example\
<http://build.fluidproject.org/infusion/demos/inlineEdit/rich/demo.html>

2\) Open one of the CK Editor of TinyMCE editors.

3\) Modify some of the text.

4\) Tap the 'tab' key until the 'save' button has focus.

5\) Tap the 'enter' key

Notice that a new line is placed into the editor instead of activating the 'save' button. The 'space' key will activate the save, also if you shift-tab back around to the 'save' button, the 'enter' key will work

        