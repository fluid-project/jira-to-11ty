---json
{
  "title": "FLUID-5620",
  "summary": "Some content in Infusion Docs does not validate",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Migrated",
  "reporter": "Jonathan Hung",
  "date": "2015-04-14T13:58:15.842-0400",
  "updated": "2022-03-14T09:00:41.984-0400",
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
      "author": "Justin Obara",
      "date": "2022-03-14T09:00:41.932-0400",
      "body": "Migrated to Infusion-Docs [Issues #222](https://github.com/fluid-project/infusion-docs/issues/222)\n"
    }
  ]
}
---
The docpad generated HTML output for the Infusion Docs does not validate. Some pages have issues like missing closing tags / improper closing tags and duplicate IDs on a page.

Run the HTML content through the w3c validator and fix any problems.

        