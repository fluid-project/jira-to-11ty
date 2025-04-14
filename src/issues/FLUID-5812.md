---json
{
  "title": "FLUID-5812",
  "summary": "Failures during fluid.clearComponent",
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
  "date": "2015-11-08T14:11:43.985-0500",
  "updated": "2016-07-08T09:05:35.241-0400",
  "versions": [],
  "fixVersions": [
    "2.0"
  ],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
It looks like the V8 engine in node 4 is a little more aggressive than others in reordering iteration to object members, which has shaken loose some bugs in our component clear workflow. There are two bugs - \
i) Clearing a component from its injected site before clearing it from its root site will trigger an error since we do not properly clear "injectedPaths" from the root component.\
ii) Manually injecting a component to some site will trigger an error if it is cleared from its root site, since we still didn't fully take the plunge to move visitComponentChildren over to using instantiator records.

        