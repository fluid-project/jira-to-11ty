---json
{
  "title": "FLUID-2880",
  "summary": "Refactor Pager to create separate DataTable and Pager components, rationalise options structure",
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
  "reporter": "Antranig Basman",
  "date": "2009-06-01T15:12:37.000-0400",
  "updated": "2014-03-03T14:30:24.159-0500",
  "versions": [
    "1.4"
  ],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Pager"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-4035/",
      "key": "FLUID-4035",
      "summary": "Update the Pager to use IoC"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2013-07-22T21:12:58.858-0400",
      "body": "Merged into trunk at revision acf4633\n"
    }
  ]
}
---
The design of the Pager component has proliferated and also spread beyond its original scope. This needs to be tidied up, reflecting results of breeze chat of 3rd week May, to create 2 separate components, and also rationalise which options are kept at top level and which as subcomponents.

The upcoming IoC framework (see <http://wiki.fluidproject.org/display/fluid/IoC+Speculations>) should help in simplifying internal lines of communication during this work.

        