---json
{
  "title": "FLUID-5011",
  "summary": "Update InlineEdit component to modern framework standards",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Antranig Basman",
  "date": "2013-05-06T16:59:28.582-0400",
  "updated": "2014-03-03T11:57:01.502-0500",
  "versions": [
    "1.4"
  ],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Inline Edit"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-4734/",
      "key": "FLUID-4734"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2013-05-30T15:26:45.161-0400",
      "body": "Merged into project repo at c04633d425d0811e6bccfb31c5bb7df0a2410d7f\n"
    }
  ]
}
---
Following the completion of <https://fluidproject.atlassian.net/browse/FLUID-4919#icft=FLUID-4919> which updated the Uploader, Progress, Tooltip and finished the Reorderer update work, InlineEdit is the final production-grade component in Infusion which remains part of the shortly to be deprecated "manual init" component system. A similar update to InlineEdit will allow us to progress to Infusion 1.9, a "last call" release for code which participates in this system, prior to Infusion 2.0 where this system will be removed.

        