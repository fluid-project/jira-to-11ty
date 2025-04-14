---json
{
  "title": "FLUID-5141",
  "summary": "Remove mention of initDependents() from documentation",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Anastasia Cheetham",
  "reporter": "Anastasia Cheetham",
  "date": "2013-09-19T17:17:00.818-0400",
  "updated": "2014-04-24T16:03:49.748-0400",
  "versions": [],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Tech. Documentation"
  ],
  "environment": "Current docs space: <http://wiki.fluidproject.org/display/docs/Infusion+Documentation>\n",
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
Calls to initDependents() are no longer necessary, and not recommended, so we want to remove all mention of it from the documentation.

        