---json
{
  "title": "FLUID-2579",
  "summary": "Rich text inline-edit manual test is broken in the release package",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2009-04-09T16:05:32.000-0400",
  "updated": "2009-04-09T16:47:33.000-0400",
  "versions": [],
  "fixVersions": [
    "1.0"
  ],
  "components": [
    "Inline Edit"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-04-09T16:35:54.000-0400",
      "body": "moved the fckeditor and tiny\\_mce from the top level lib folder to a lib folder in the manual-tests directory\n"
    },
    {
      "author": "Colin Clark",
      "date": "2009-04-09T16:47:33.000-0400",
      "body": "I've reviewed Justin's fix for this issue and it's good. +1\n"
    }
  ]
}
---
Rich text inline-edit manual test is broken in the release package

This is because the fck and tiny mce editors are not included in the release package.

Currently both of those are in the wrong lib folder (the top level one, instead of the lib folder in the tests directory), and as such are being omitted from the build, as there are no declared dependencies on them.

        