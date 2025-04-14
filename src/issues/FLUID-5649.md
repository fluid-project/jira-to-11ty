---json
{
  "title": "FLUID-5649",
  "summary": "Some infusion docs use tables for non-tabular information - there are better ways to do this",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Migrated",
  "reporter": "Jonathan Hung",
  "date": "2015-04-23T13:39:59.928-0400",
  "updated": "2024-07-31T15:56:15.969-0400",
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
      "date": "2015-04-23T13:40:52.317-0400",
      "body": "This is related because it deals with tables in the infusion docs.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2024-07-31T15:56:08.328-0400",
      "body": "Migrated to <https://github.com/fluid-project/infusion-docs/issues/277>&#x20;\n"
    }
  ]
}
---
Some infusion docs use HTML tables to format non-tabular data. For example: <http://docs.fluidproject.org/infusion/development/ComponentConfigurationOptions.html>

Instead of using a table, we should consider using headers and paragraphs instead.

        