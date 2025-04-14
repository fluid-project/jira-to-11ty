---json
{
  "title": "FLUID-6480",
  "summary": "Add continuous integration to nexus, nexus-client, nexus-demos, co-occurrence-engine",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Philip Tchernavskij",
  "reporter": "Philip Tchernavskij",
  "date": "2020-03-19T15:15:04.115-0400",
  "updated": "2024-07-22T10:35:13.363-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Nexus",
    "Testing Infrastructure"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
Half of the current Nexus repositories are currently set up with hosted continuous integration using Jenkins. The other half are not. GitHub Actions are a newer alternative that does not require us to host our own server, and is comparatively easier to configure. Therefore, the Nexus maintainers have decided to set up Actions to for building and testing the following repositories:

* `fluid-project/infusion-nexus`
* `fluid-project/infusion-nexus-demos`
* `fluid-project/infusion-nexus-client`
* `fluid-project/co-occurrence engine`

        