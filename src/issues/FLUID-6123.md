---json
{
  "title": "FLUID-6123",
  "summary": "Reference to a nonexistent grade as a parent should not silently succeed",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2017-01-31T16:00:08.962-0500",
  "updated": "2024-06-30T18:16:12.986-0400",
  "versions": [
    "3.0"
  ],
  "fixVersions": [
    "6.0"
  ],
  "components": [
    "IoC System"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2017-03-01T19:04:05.773-0500",
      "body": "Some more keywords to help searches find this issue: missing grade error blank undefined\n"
    }
  ]
}
---
A very long-standing behaviour in the framework is that a reference to a nonexistent parent grade is treated as equivalent to a reference to an empty grade. This is behaviour designed in an era where this kind of "permissiveness" was felt to be helpful to the user, but in practice this has simply led to long strings of hard-to-diagnose failures when crucial implementation grades are not loaded.

Fixing this would represent a massive breaking change in the framework's semantic, and should happen together when we make such sweeping changes as those in FLUID-4982 or FLUID-5750

        