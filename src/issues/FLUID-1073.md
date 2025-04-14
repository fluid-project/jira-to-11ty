---json
{
  "title": "FLUID-1073",
  "summary": "Create an API style guide for all Fluid components to follow",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "New Feature",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Colin Clark",
  "date": "2008-07-31T16:32:50.000-0400",
  "updated": "2011-02-22T16:27:43.555-0500",
  "versions": [],
  "fixVersions": [
    "0.5"
  ],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-1074/",
      "key": "FLUID-1074"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2008-07-31T16:32:57.000-0400",
      "body": "infusion-05-wishlist\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2008-08-01T11:29:44.000-0400",
      "body": "Style guide now at <http://wiki.fluidproject.org/display/fluid/Fluid+Component+API>\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-02-22T16:27:43.553-0500",
      "body": "Closing issues that were resolved for 1.0 and earlier releases.&#x20;\n"
    }
  ]
}
---
We need to define a clear standard for all components to follow in order to provide a consistent experience for implementers. This API style guide should include:

* Naming conventions for creator functions
* Default argument order and contents for creator functions
* Common names and locations for callbacks and delegate functions

        