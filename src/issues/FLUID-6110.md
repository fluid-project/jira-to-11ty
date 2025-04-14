---json
{
  "title": "FLUID-6110",
  "summary": "Publish stable and in-development versions of the Infusion Docs",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Migrated",
  "reporter": "Justin Obara",
  "date": "2017-01-11T14:07:17.568-0500",
  "updated": "2022-03-14T13:30:02.052-0400",
  "versions": [],
  "fixVersions": [
    "5.0"
  ],
  "components": [
    "Infrastructure",
    "Tech. Documentation"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2022-03-14T13:30:02.036-0400",
      "body": "Migrated to Infusion Docs [Issue #224](https://github.com/fluid-project/infusion-docs/issues/224)\n"
    }
  ]
}
---
Currently only the in development ( master ) branch is publish. We should implement a means of publishing the latest stable release documentation alongside the in development docs. This will likely mean moving off of GitHub pages and into a self hosted environment.&#x20;

Currently by default docs.fluidproject.org redirects to <http://docs.fluidproject.org/infusion/development/> We'll probably either want to have a landing page where a user can select which version ( stable / dev ) to view or provide some other means of easily navigating between the two.

see: <https://wiki.fluidproject.org/display/fluid/Post+Infusion+2.0+Review+Meeting+Notes>

        