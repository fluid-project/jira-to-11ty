---json
{
  "title": "FLUID-2167",
  "summary": "keyboard-a11y unit test 16.6 fails",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2009-01-28T09:18:14.000-0500",
  "updated": "2009-01-28T12:13:24.000-0500",
  "versions": [],
  "fixVersions": [
    "0.8"
  ],
  "components": [
    "Keyboard Accessibility"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2009-01-28T11:45:13.000-0500",
      "body": "Test fixed at revision 6357 - apologies\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-01-28T12:13:24.000-0500",
      "body": "Verified fix using:\n\nFF3 (Mac OS 10.5)\\\nIE7 (Win XP)\n"
    }
  ]
}
---
keyboard-a11y unit test 16.6 fails

<http://build.fluidproject.org/fluid/tests/jquery-tests/keyboard-a11y-tests.html>

Appears to have started with r6327

        