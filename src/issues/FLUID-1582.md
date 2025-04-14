---json
{
  "title": "FLUID-1582",
  "summary": "There's no way to determine what version of Fluid is loaded. Provide a user-readable string in the fluid namespace that identifies the version.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "New Feature",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Colin Clark",
  "date": "2008-09-17T16:10:42.000-0400",
  "updated": "2011-02-22T16:27:44.749-0500",
  "versions": [
    "0.1",
    "0.3",
    "0.4beta1",
    "0.4",
    "0.5beta1"
  ],
  "fixVersions": [
    "0.5"
  ],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2011-02-22T16:27:44.746-0500",
      "body": "Closing issues that were resolved for 1.0 and earlier releases.&#x20;\n"
    }
  ]
}
---
We should provide a property on the fluid namespace like this:

fluid.version = "Infusion 0.5";

        