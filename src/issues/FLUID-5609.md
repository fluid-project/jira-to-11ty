---json
{
  "title": "FLUID-5609",
  "summary": "Separate infusion docs into sections and give each their own table of contents",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jonathan Hung",
  "reporter": "Jonathan Hung",
  "date": "2015-03-31T11:21:03.416-0400",
  "updated": "2015-04-23T11:38:07.925-0400",
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
      "author": "Anastasia Cheetham",
      "date": "2015-04-14T14:17:15.219-0400",
      "body": "Merged at 78a66361c7eafd48f82f6a87bd9b1a58a9db42d1\n"
    }
  ]
}
---
Currently all documentation is lumped together. but it should be split apart into the following three sections: API, Tutorials, and Infusion.

Each section will have their own table of contents navigation in the left sidebar.

Possible approach would be to use separate JSON for the site sections and generate the left side navigation from it.

        