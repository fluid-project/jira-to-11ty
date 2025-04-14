---json
{
  "title": "FLUID-2514",
  "summary": "Custom build package is incorrect when trying to include some things from a directory and exclude others from the same directory.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "reporter": "Michelle D'Souza",
  "date": "2009-04-03T22:31:54.000-0400",
  "updated": "2024-07-22T11:59:15.750-0400",
  "versions": [
    "1.0",
    "1.1",
    "1.1.1",
    "1.1.2",
    "1.2",
    "1.3",
    "1.4",
    "1.5",
    "2.0"
  ],
  "fixVersions": [],
  "components": [
    "Build Scripts"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2010-02-24T10:44:36.000-0500",
      "body": "Described another way, we have a granularity issue with some of our modules:\n\nIf the all live in the same directory together, they can't be added/removed from a build independently. They form a fully atomic module.\n\nThis can be fixed by moving each jQuery UI widget out into separate directories and creating separate dependency declarations for them.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2024-07-22T11:59:15.580-0400",
      "body": "I believe this has been addressed in our current npm based build system We have separate modules for logical chunks so hopefully this is fully addressed. If any issues our found a new ticket should be opened.\n"
    }
  ]
}
---
There is an issue with excluding things in a certain directory and including others. This is a rare case since most modules are in their own directory. The one example right now where this is a problem is jQueryUICore and jQueryUIWidgets. The MyInfusion.js file is built correctly but the other files related to the module being excluded are copied into the build.&#x20;

        