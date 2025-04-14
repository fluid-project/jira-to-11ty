---json
{
  "title": "FLUID-5785",
  "summary": "Use partials to separate out sections of the docs-template default layout",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Done",
  "reporter": "Jonathan Hung",
  "date": "2015-10-05T10:35:44.407-0400",
  "updated": "2024-07-23T10:42:48.862-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Docs platform"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2024-07-23T10:42:48.716-0400",
      "body": "This has been addressed in the 11ty version of the [ILDH](https://handbook.floeproject.org/)&#x20;\n"
    }
  ]
}
---
Use partials to refactor reusable parts of the default template. For example, the header, footer, and sidebar can be refactored into partials.

This makes it easier to reuse and maintain layouts.

        