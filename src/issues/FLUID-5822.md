---json
{
  "title": "FLUID-5822",
  "summary": "Remove requirement to \"dedupe\" multiple infusions within a module tree",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2015-11-30T12:44:11.123-0500",
  "updated": "2017-03-01T20:46:03.251-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-6140/",
      "key": "FLUID-6140"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2016-01-13T10:42:42.307-0500",
      "body": "Reopened since only the 1.9.x version of this pull has been merged\n"
    },
    {
      "author": "Justin Obara",
      "date": "2016-01-15T11:59:54.362-0500",
      "body": "Merged pull request ( <https://github.com/fluid-project/infusion/pull/654> ) into the project repo at 4e1b8c9a64665c67232901d2e57531926ec7247f  and 2f38c09d733925441f0ff2e6636f8886da8af5ea\n"
    }
  ]
}
---
Shower time of recent weeks has suggested that it ought to be possible to eliminate the requirement to "dedupe" multiple instances of Infusion from a module tree, by means of some semi-ingenious behaviour at module load time. Scribbling on pieces of paper suggests that issuing node's "resolve" algorithm for the directory 3 levels in the hierarchy above the current Infusion's root should pick up any infusion resolvable by outer scoped modules. If we find such a n Infusion, we can just assign it to module.exports and return - and the same algorithm will cascade hierarchically. If we find no such infusion, we must be the highest, and proceed with normal initialisation.

        