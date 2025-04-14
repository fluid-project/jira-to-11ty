---json
{
  "title": "FLUID-5692",
  "summary": "Refactor the shared docpad code into a new documentation repository",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jonathan Hung",
  "reporter": "Jonathan Hung",
  "date": "2015-06-17T21:59:07.416-0400",
  "updated": "2016-07-08T08:46:52.234-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Infrastructure",
    "Website"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
The docpad installation currently being used for Fluid Infusion Docs can be refactored into a new project of just shared components. This way it will be easier to create derivative sites (like the Inclusive Learning Design Handbook).

This new repository will include:

* docpad.js which contains shared helper functions
* document templates
* shared CSS, fonts, and other files
* Infusion's UIO

Once refactored, offspring sites will use node to retrieve the shared components from git.

        