---json
{
  "title": "FLUID-2471",
  "summary": "Move jquery.bgiframe.js into the jquery plugins folder",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Michelle D'Souza",
  "reporter": "Michelle D'Souza",
  "date": "2009-04-02T11:33:27.000-0400",
  "updated": "2011-01-21T09:23:24.624-0500",
  "versions": [
    "1.0"
  ],
  "fixVersions": [
    "1.1"
  ],
  "components": [
    "Infrastructure"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-2575/",
      "key": "FLUID-2575"
    }
  ],
  "attachments": [],
  "comments": []
}
---
From the irc channel:&#x20;

jquery.bgiframe.js is currently located in jquery/core/js  It's only used by tests and two examples.  Its current location will cause it to be included in the myInfusion.js file for **all** modules that depend on jQuery core - this means all modules.  It is actually a plugin and should be in the jquery/plugins directory

        