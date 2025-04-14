---json
{
  "title": "FLUID-6550",
  "summary": "Directory structure should more closely match information architecture",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Migrated",
  "reporter": "Jonathan Hung",
  "date": "2020-09-14T13:26:46.355-0400",
  "updated": "2024-08-01T10:15:14.932-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Tech. Documentation"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2020-09-14T13:27:05.358-0400",
      "body": "Something to address after 11ty migration.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2024-08-01T10:15:07.862-0400",
      "body": "Migrated to <https://github.com/fluid-project/infusion-docs/issues/307>&#x20;\n"
    }
  ]
}
---
The directory structure of the documentation should more closely match the information architecture of the deployed site.

The 3 major categories for docs on the website are: Infusion, Tutorials, and Components. The directory structure ideally should mirror this, but currently all documentation reside the same ./src/documents/ directory.

Suggest creation of "Infusion", "Components" and "Tutorials" directories and move relevant documents to them.

Originally from this reported issue: <https://issues.fluidproject.org/browse/FLUID-6489>

        