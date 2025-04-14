---json
{
  "title": "FLUID-5644",
  "summary": "Larger code blocks in API page tables wrap at table edge and is hard to read",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Migrated",
  "assignee": "Justin Obara",
  "reporter": "Jonathan Hung",
  "date": "2015-04-22T08:41:34.549-0400",
  "updated": "2022-03-14T12:51:11.520-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Tech. Documentation"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-5610/",
      "key": "FLUID-5610",
      "summary": "Implement docs-template according to designs"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2015-04-22T08:42:28.013-0400",
      "body": "Consider fixing <https://fluidproject.atlassian.net/browse/FLUID-5644#icft=FLUID-5644> as part of mobile styling efforts.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2022-03-14T12:51:11.484-0400",
      "body": "Migrated to Infusion Docs [Issue #223](https://github.com/fluid-project/infusion-docs/issues/223)\n"
    }
  ]
}
---
Large code blocks are difficult to read in the Infusion Docs because they wrap oddly at the boundaries of tables and columns.

An alternative to a table should be used to ensure the code blocks render clearly. This will need to be addressed with Mobile layout as well since tables are hard to navigate on a smaller screen.

        