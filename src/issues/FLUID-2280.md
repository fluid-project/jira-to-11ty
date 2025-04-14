---json
{
  "title": "FLUID-2280",
  "summary": "Create new progress indicators using Fluid Infusion components",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2009-02-20T15:54:56.000-0500",
  "updated": "2011-01-05T11:47:50.922-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Wiki"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-04-09T10:17:33.000-0400",
      "body": "re-write using fss containers instead of a table. This should help with the problem that arises when the table can't shrink any further and becomes out of sync with the progress bars\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-04-20T12:35:21.000-0400",
      "body": "Allow users to specify how much of the container the progress bars fill. Currently it is fixed at 80%\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-04-20T14:18:41.000-0400",
      "body": "Allow the long name to be optional and replaced by the short name if it isn't specified\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-04-20T14:21:00.000-0400",
      "body": "Allow it to use a single template to generate multiple component progress indicators on the same page.&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-04-20T14:21:42.000-0400",
      "body": "Add an optional title feature, to style and specify a title. Particularly useful when there are multiple progress indicators sharing a template on the same page.\n"
    },
    {
      "author": "Mike Lam",
      "date": "2011-01-05T11:47:50.919-0500",
      "body": "Infusion progress bar now used for upload progress indication\n"
    }
  ]
}
---
Create new progress indicators using Fluid Infusion components

Probably making use of the progress bar from uploader and the renderer

        