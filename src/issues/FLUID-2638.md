---json
{
  "title": "FLUID-2638",
  "summary": "Invitation style causes Rich Text Inline Edit to misbehave",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "y z",
  "reporter": "Jonathan Hung",
  "date": "2009-04-30T15:57:04.000-0400",
  "updated": "2009-07-31T10:32:36.000-0400",
  "versions": [
    "1.0",
    "1.1"
  ],
  "fixVersions": [
    "1.1.1",
    "1.2"
  ],
  "components": [
    "Inline Edit"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-2638/patch.txt",
      "filename": "patch.txt"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-07-27T16:28:06.000-0400",
      "body": "Bug Parade 1.1.1 release\n"
    },
    {
      "author": "y z",
      "date": "2009-07-30T11:48:03.000-0400",
      "body": "patch fixes the flickering problem:\n\n* added new css class for rich inline edit invitation style (that has no border)\n* added the newly created css class as a default invitation style for richinlineeditors (both tinymce and fck)\n* changed markup for quickstart example for inline edit that fixes changes incorrect \\<span> tags that contain \\<p> tags onto \\<div> tags.\n"
    },
    {
      "author": "y z",
      "date": "2009-07-30T13:04:16.000-0400",
      "body": "changed the name of the css class&#x20;\n"
    },
    {
      "author": "Jacob Farber",
      "date": "2009-07-31T10:00:06.000-0400",
      "body": "I reviewed the code, and everything looks good.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-07-31T10:32:36.000-0400",
      "body": "Verified fix using:\n\nIE 7, FF3 (Win Vista)\\\nSafari 3, Safari 4, Opera 9.6, FF3.5 (Mac OS 10.5)\n"
    }
  ]
}
---
Currently Invitation style in is being over ridden by null if using Rich Text Inline Edit. This means that Invitation styles are not being applied by default regardless of how the user has defined their styles.

Apparently invitation styles was causing flickering when combined with tooltip and therefore invitation is set to null in the API to avoid this. This is an issue since a user should be able to style an invitation for the Rich Text Inline Edit.

        