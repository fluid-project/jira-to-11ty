---json
{
  "title": "FLUID-259",
  "summary": "Test keyboard mapping in every browser and screenreader",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jonathan Hung",
  "reporter": "Anastasia Cheetham",
  "date": "2008-02-19T12:56:49.000-0500",
  "updated": "2008-03-19T15:48:55.000-0400",
  "versions": [
    "0.1"
  ],
  "fixVersions": [
    "0.3"
  ],
  "components": [
    "Reorderer"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-89/",
      "key": "FLUID-89",
      "summary": "Key strokes for navigation and drag-and-drop conflict with browser/OS/AT defined keystrokes."
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-161/",
      "key": "FLUID-161",
      "summary": "Keystrokes for navigation and moving orderables should be configurable."
    }
  ],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-259/AT Examination.xls",
      "filename": "AT Examination.xls"
    }
  ],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2008-03-18T12:20:24.000-0400",
      "body": "A spreadsheet outlining the effects of different keyboard mappings using JAWS, Window Eyes, and a web browser.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2008-03-19T14:36:32.000-0400",
      "body": "Through much trial and error we've determined that the i, j, k and m keys work with the modifier CTRL in IE6, IE7, FF2 and FF3 with Jaws and Window-Eyes. Not ideal key strokes as they are non-intuitive but they do work.\n"
    }
  ]
}
---
The use of Ctrl+Arrow needs to be tested in all browsers and with all screen readers to ensure that it functions everywhere. If not, we need to choose (and test) an alternative key mapping.

        