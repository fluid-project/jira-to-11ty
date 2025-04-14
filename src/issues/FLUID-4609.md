---json
{
  "title": "FLUID-4609",
  "summary": "Package the Infusion framework as a node package, suitable for use with node.js and the node package manager (npm)",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Antranig Basman",
  "date": "2012-02-16T23:55:16.077-0500",
  "updated": "2014-07-11T15:02:01.870-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-2962/",
      "key": "FLUID-2962"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2012-03-11T01:31:26.748-0500",
      "body": "A workable although slightly non-standard packaging system - fluid.require(\"package\", require) - has been merged into the core framework over a few recent commits\n"
    }
  ]
}
---
This work follows on from <https://fluidproject.atlassian.net/browse/FLUID-4568#icft=FLUID-4568>, which simplified the framework's dependency profile, so that it is capable of booting up easily in the absence of a working DOM. Becoming a node package is important not only for social currency, but also to enable upcoming GPII work on the preferences server. The initial implementation strategy will be to use an "off-the-shelf" server and routing engine (express, connect, etc.) so we can make quick progress, but to retain access to the Infusion framework to start work on proper abstraction of I/O behind the "DataSource" idiom as well as for model transformation work required for preferences and capabilities matchmaking.&#x20;

Work on "kettle proper", Fluid's server-side engine as ported to node (KETTLE-11) can be pushed out to a later time as we gradually require more capabilities of the IoC framework during request routing and remedy issues with IoC itself (<https://fluidproject.atlassian.net/browse/FLUID-4392#icft=FLUID-4392>)

        