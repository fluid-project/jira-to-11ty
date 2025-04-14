---json
{
  "title": "FLUID-6168",
  "summary": "Add a way to inject a Table of Contents if container doesn't exist",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Open",
  "reporter": "Jonathan Hung",
  "date": "2017-07-07T12:22:40.540-0400",
  "updated": "2017-07-07T15:56:57.864-0400",
  "versions": [
    "2.0"
  ],
  "fixVersions": [],
  "components": [
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2017-07-07T12:38:32.012-0400",
      "body": "A possible implementation would be to add the ToC to the UIO container at the top when the adjuster is enabled.\n\nThought should be given to how this would appear on mobile as well.\n"
    }
  ]
}
---
If the Table of Contents container does not exist in the document, then the table of contents should be injected into the document.

This will also help avoid the scenario where the ToC adjuster is enabled and does not appear to do anything because the container isn't in the document.

        