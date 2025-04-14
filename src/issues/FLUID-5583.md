---json
{
  "title": "FLUID-5583",
  "summary": "IoC testing framework \"event\" fixture doesn't accept single-element \"args\" value",
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
  "date": "2014-12-20T13:40:45.915-0500",
  "updated": "2017-02-27T15:49:12.150-0500",
  "versions": [],
  "fixVersions": [
    "2.0"
  ],
  "components": [
    "IoC Testing Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
<https://fluidproject.atlassian.net/browse/FLUID-5496#icft=FLUID-5496> is incompletely implemented - this fixture doesn't accept a single object as the value of "args" which is supported everywhere else in the framework - for example, the following fixture is invalid:

{\
event: "{decisionRequest}.events.onComplete",\
listener: "gpii.test.cloudBased.oauth2.verifyDecisionResponse",\
args: "{decisionRequest}"\
}

and the args must be provided within an array.

        