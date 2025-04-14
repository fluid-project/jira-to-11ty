---json
{
  "title": "FLUID-27",
  "summary": "Clean up and refactor our JavaScript utilities.",
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
  "reporter": "Joseph Scheuhammer",
  "date": "2007-07-17T11:57:13.000-0400",
  "updated": "2011-01-30T11:58:18.247-0500",
  "versions": [],
  "fixVersions": [
    "0.1"
  ],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Supersedes",
      "url": "/browse/FLUID-8/",
      "key": "FLUID-8",
      "summary": "Lightbox and Fluid architecture needs to be factored properly"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2007-11-15T15:52:39.000-0500",
      "body": "LayoutHandlers were moved from Fluid.js to Reorderer.js. Everything else left in this utilities file is fairly generic and appropriate. We'll revisit this approach by folding all of our code into a single Fluid.js file post-0.1.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-01-30T11:56:37.642-0500",
      "body": "Reopening these issues to add the frameworkcomponent\n"
    }
  ]
}
---

        