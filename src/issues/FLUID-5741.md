---json
{
  "title": "FLUID-5741",
  "summary": "Replace references to Infusion 2.0 with 1.9 in the infusion-docs 1.9.x branch",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Migrated",
  "reporter": "Colin Clark",
  "date": "2015-08-12T14:38:57.451-0400",
  "updated": "2024-07-31T16:23:34.838-0400",
  "versions": [
    "1.9"
  ],
  "fixVersions": [
    "1.9"
  ],
  "components": [
    "Tech. Documentation"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-5739/",
      "key": "FLUID-5739",
      "summary": "Decrement the Infusion version number in the 1.9.x branch"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2024-07-31T16:23:34.667-0400",
      "body": "Migrated to <https://github.com/fluid-project/infusion-docs/issues/289>&#x20;\n"
    }
  ]
}
---
The 1.9.x branch of the infusion-docs repository still makes reference to Infusion 2.0. We should update it to refer to 1.9 instead, and to remove any "overly futuristic" references such as the "Component Grade Changes" on this page: <http://docs.fluidproject.org/infusion/development/APIChangesFrom1_5To2_0.html>

        