---json
{
  "title": "FLUID-229",
  "summary": "Build script should concat minified files",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jonathan Hung",
  "reporter": "Jonathan Hung",
  "date": "2008-02-11T12:38:38.000-0500",
  "updated": "2008-03-05T14:52:07.000-0500",
  "versions": [
    "0.1"
  ],
  "fixVersions": [
    "0.3"
  ],
  "components": [
    "Infrastructure"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2008-02-13T14:31:25.000-0500",
      "body": "The ant script now produces a Fluid-all-min.js file which is a minified concatenated version of all Fluid component code.\n\nStill to do:\\\nRemove other minified files as they are no longer needed in the distribution.\n"
    }
  ]
}
---
Minified files should be concatenated to improve performance. However order in which files are concatenated matters due to dependencies.

A list of dependencies and the order of these dependencies should probably be in a .properties file.

        