---json
{
  "title": "FLUID-5781",
  "summary": "docpad should not be installed locally via the package.json and npm install",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2015-09-30T14:24:32.419-0400",
  "updated": "2016-07-08T09:02:54.412-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Tech. Documentation"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
Currently the infusion-docs instructions include a requirement to install docpad globally "npm install -g docpad". Additionally docpad is required as a dependency in the package.json file. This causes it to be installed locally via "npm install". However, if the versions don't match, docpad will through an error and not generate any of the output.&#x20;

Only the globally installed instance of docpad is actually needed. The dependency in the package.json should be removed and the documentation updated.

        