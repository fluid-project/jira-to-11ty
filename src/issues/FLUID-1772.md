---json
{
  "title": "FLUID-1772",
  "summary": "Inline Edit shouldn't fire modelChanged on init",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-issue",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Anastasia Cheetham",
  "date": "2008-11-05T16:23:54.000-0500",
  "updated": "2009-06-03T13:45:29.000-0400",
  "versions": [
    "0.6beta1"
  ],
  "fixVersions": [
    "0.6"
  ],
  "components": [
    "Inline Edit"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1772/FLUID-1772-initModel.patch",
      "filename": "FLUID-1772-initModel.patch"
    }
  ],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2008-11-06T11:54:19.000-0500",
      "body": "This is a patch that adds an private initModel() function to Inline Edit, ensuring that modelChanged() doesn't get fired upon initialization.\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2008-11-06T14:12:59.000-0500",
      "body": "Fixed at revision 5965\n"
    }
  ]
}
---
dev-iteration46

        