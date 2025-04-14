---json
{
  "title": "FLUID-4735",
  "summary": "Update all Infusion components to be graded",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Justin Obara",
  "date": "2012-07-25T12:13:47.218-0400",
  "updated": "2012-07-26T08:37:24.325-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Inline Edit",
    "Pager",
    "Reorderer",
    "Tooltip",
    "Uploader"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2012-07-25T14:50:19.200-0400",
      "body": "I've updated various Infusion components to have grades. There were some that did not have standard arguments to match our existing grades, in these cases, no grade was added.\\\n<https://github.com/fluid-project/infusion/pull/228>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2012-07-26T08:37:19.455-0400",
      "body": "Merged into project repo at 67da204bedfb2094252d5d4590e5ad725439cd90 by Antranig\n"
    }
  ]
}
---
Update all of the Infusion components to be graded. This should be a as straight forward as adding a gradeNames property to the components defaults.

        