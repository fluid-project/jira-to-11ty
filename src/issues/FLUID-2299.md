---json
{
  "title": "FLUID-2299",
  "summary": "Remove definitions and references to keyboard-a11y keycodes in favour of jQuery UI core definitions",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Antranig Basman",
  "date": "2009-03-01T01:01:40.000-0500",
  "updated": "2011-01-30T11:58:21.456-0500",
  "versions": [
    "0.8"
  ],
  "fixVersions": [
    "1.0"
  ],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-03-17T11:13:09.000-0400",
      "body": "Bug Parade 1.0 release&#x20;\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2009-03-24T16:25:56.000-0400",
      "body": "Fixed at revision 6830. Please note that since jquery.keyboard-a11y makes references during its initialisation to keycodes defined in ui.core.js, the core file must now be included first.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2009-03-25T16:12:00.000-0400",
      "body": "I reviewed the code commits for this issue and tested the changed files. It all looks good.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-03-26T11:25:07.000-0400",
      "body": "Verified fix using:\n\nFF3 (Win Vista)\\\nIE6 (Win XP)\\\nOpera 9.6 (Mac OS 10.5)\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-01-30T11:56:36.182-0500",
      "body": "Reopening these issues to add the frameworkcomponent\n"
    }
  ]
}
---
As of 1.2.6/7 jQuery UI core now includes definitions for numeric keycodes within $.ui.keyCode - we may now remove our own definitions from fluid.a11y.keys and convert references.

        