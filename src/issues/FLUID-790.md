---json
{
  "title": "FLUID-790",
  "summary": "Special labels used for generating content should be unique",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Jonathan Hung",
  "date": "2008-06-22T03:10:43.000-0400",
  "updated": "2011-01-20T10:29:38.770-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Wiki"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-791/",
      "key": "FLUID-791"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Jess Mitchell",
      "date": "2011-01-20T10:29:38.768-0500",
      "body": "Outdated\n"
    }
  ]
}
---
Some pages use Wiki labels to generate its contents.

Using generic words in this special way prevents other pages from using that term. Also, unexpected results may happen if new content is created by a user who is unaware of the use of these labels.

Proposal, keyword labels used in special ways should be prefixed to make them unique. i.e. the "manual" labels used to generate the User Manual can be tagged as "fluid\_user\_manual" instead. etc.

Futuretask

        