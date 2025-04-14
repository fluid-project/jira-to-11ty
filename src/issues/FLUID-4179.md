---json
{
  "title": "FLUID-4179",
  "summary": "Component trees which contain \"unexpected\" non-instantiated component material will fail on clear",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Antranig Basman",
  "date": "2011-04-07T15:48:09.931-0400",
  "updated": "2014-03-03T13:11:39.248-0500",
  "versions": [
    "1.3.1"
  ],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "IoC System"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
On discovering a subcomponent which was not instantiated by the current instantiator (and hence, by current implementation, has no path registered in it) will cause a fail in fluid.clearComponent. This manifests particularly early when, on first creation, a component makes an "unexpected component return" through use of the "returnedPath" directive interpreted by "autoInit" components.

        