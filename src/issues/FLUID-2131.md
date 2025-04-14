---json
{
  "title": "FLUID-2131",
  "summary": "Cannot check accessible checkboxes with the mouse",
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
  "reporter": "Justin Obara",
  "date": "2009-01-15T15:08:37.000-0500",
  "updated": "2009-01-16T10:42:08.000-0500",
  "versions": [
    "0.6",
    "0.7"
  ],
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
      "author": "Justin Obara",
      "date": "2009-01-16T10:11:19.000-0500",
      "body": "Seems to have broken at r6178\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2009-01-16T10:33:17.000-0500",
      "body": "Have condensed API for fluid.activate to 1-arg, assigning to Colin for further thought - revision 6327\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-01-16T10:42:08.000-0500",
      "body": "Verified fix using:\n\nFF3, FF2, Opera 9.5, Safari 3.1 (Mac OS 10.5)\\\nFF3, IE7 (Win Vista)\n"
    }
  ]
}
---
Cannot check accessible checkboxes with the mouse. It still works with the keyboard

Open the checkbox example from the daily build site:\
<http://build.fluidproject.org/fluid/sample-code/keyboard-a11y/checkboxes/CheckboxExample.html>

        