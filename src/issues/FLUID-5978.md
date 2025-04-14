---json
{
  "title": "FLUID-5978",
  "summary": "Implement a pre-publish script to include build distributions for Infusion",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2016-10-04T14:10:53.373-0400",
  "updated": "2019-07-12T09:16:28.626-0400",
  "versions": [],
  "fixVersions": [
    "2.0"
  ],
  "components": [
    "Build Scripts",
    "Infrastructure",
    "Release"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-5579/",
      "key": "FLUID-5579",
      "summary": "Assess the potential for modularising Infusion into one or more modules, and appropriate distribution scheme"
    }
  ],
  "attachments": [],
  "comments": []
}
---
For the Infusion 2.0 release we'd like to improve the use of Infusion, through NPM, for integrators, specifically those making use of UI components.

This will just be a preliminary and potentially temporary approach until a more robust solution is developed ( see: <https://fluidproject.atlassian.net/browse/FLUID-5579#icft=FLUID-5579> ).&#x20;

**This Approach**

Use a pre-publish script to create a "dist" directory containing various pre-built instances of infusion plus a copy of the entire source. Pre-built infusions should include framework only, infusion all,  and no jquery variants of them. May also want to include minified versions as well as source.&#x20;

Structure:

* dist/
  * infusion.js&#x20;
  * ...
  * assets/
    * componets/
    * framework/
    * lib/

        