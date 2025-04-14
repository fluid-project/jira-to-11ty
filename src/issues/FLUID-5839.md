---json
{
  "title": "FLUID-5839",
  "summary": "Links into code base should be changed to links to API docs",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Migrated",
  "reporter": "Anastasia Cheetham",
  "date": "2016-01-08T16:50:36.183-0500",
  "updated": "2024-08-01T07:43:57.585-0400",
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
      "date": "2024-08-01T07:43:47.644-0400",
      "body": "Migrated to <https://github.com/fluid-project/infusion-docs/issues/296>&#x20;\n"
    }
  ]
}
---
Some of the documentation's references to particular functions are currently links directly into the code base for that function. We now have many functions documented (<http://docs.fluidproject.org/infusion/development/CoreAPI.html>) so we should go through the docs and cross-check any of these references. If there is documentation, link to it. If there is not, consider adding some?

        