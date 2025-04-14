---json
{
  "title": "FLUID-5542",
  "summary": "Implement a datasource wrapper to queue and amalgamate requests.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Pull Request",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2014-10-26T12:40:43.519-0400",
  "updated": "2016-09-16T09:15:15.188-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLOE-227/",
      "key": "FLOE-227"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2014-10-30T14:33:53.207-0400",
      "body": "Issued a pull request <https://github.com/fluid-project/infusion/pull/566>\n"
    }
  ]
}
---
In speaking with Antranig in the fluid-work channel ( <https://botbot.me/freenode/fluid-work/2014-10-02/?tz=America/Toronto> ) it was determined that the improvements for <https://fluidproject.atlassian.net/browse/FLOE-227#icft=FLOE-227> should be made in FluidRequests.js. Additionally will need to have a queue for set and delete as well as a queue for get. Also need a top level option to enable amalgamation or requests where new requests replace a queued one. Will create an empty datasource that only includes comments about how a typical datasource should be constructed.

See comments from <https://github.com/fluid-project/metadata/pull/43>

        