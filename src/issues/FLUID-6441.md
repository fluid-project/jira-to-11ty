---json
{
  "title": "FLUID-6441",
  "summary": "ResourceLoader should fire onResourcesLoaded even when there are no resources",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2019-12-13T09:21:24.940-0500",
  "updated": "2024-07-22T10:35:03.645-0400",
  "versions": [],
  "fixVersions": [
    "4.0"
  ],
  "components": [
    "ResourceLoader"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
In the refactoring of ResourceLoader for the FLUID-6148 implementation we have had a regression where the onResourcesLoaded event does not fire if there are no resources. This causes a failure in some prefs framework demos, e.g. <https://build.fluidproject.org/infusion/examples/framework/preferences/minimalEditor/> where the message bundle resource has been configured away in favour of a static alternative. See discussion at <http://irc-logs.fluidproject.org/%23fluid-work/%23fluid-work.2019-12-12.log> at 2019-12-12T14:49:03

        