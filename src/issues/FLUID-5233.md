---json
{
  "title": "FLUID-5233",
  "summary": "Document the static environment",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Anastasia Cheetham",
  "date": "2013-12-03T17:13:34.539-0500",
  "updated": "2015-12-14T09:43:30.341-0500",
  "versions": [],
  "fixVersions": [
    "2.0"
  ],
  "components": [
    "Tech. Documentation"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/ILDH-5/",
      "key": "ILDH-5"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2015-06-15T11:05:04.777-0400",
      "body": "Antranig Basman can this be closed after with this pull request <https://github.com/fluid-project/infusion/pull/591>\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2015-06-18T09:50:29.398-0400",
      "body": "I've started a wiki page here to document the static site. It's not complete, but is a start.\\\n<https://wiki.fluidproject.org/display/fluid/Infusion+Documentation+Architecture+and+Process>\n\nNote that upcoming refactoring related to ILDH work may affect this documentation too.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2015-12-14T09:05:20.636-0500",
      "body": "This reference to the \"static environment\" is referring to the Infusion static environment, not the static site generation issue.\n\nAntranig Basman: The pull request you referenced is closed. Is there associated documentation that addresses this issue?\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2015-12-14T09:43:30.339-0500",
      "body": "The static environment ceased to exist when <https://fluidproject.atlassian.net/browse/FLUID-5249#icft=FLUID-5249> was merged in during January\n"
    }
  ]
}
---
We should document the static environment: What it is, why it's there, what's in it, why people might use it, how to use it

        