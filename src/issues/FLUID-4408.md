---json
{
  "title": "FLUID-4408",
  "summary": "Daily build of infusion builder fails at generating the custom build",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Cindy Li",
  "reporter": "Cindy Li",
  "date": "2011-08-29T16:05:04.510-0400",
  "updated": "2011-08-30T12:26:44.969-0400",
  "versions": [
    "1.3.1"
  ],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "Infusion Builder"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Cindy Li",
      "date": "2011-08-29T16:05:28.166-0400",
      "body": "Bug Parade Infusion\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-08-30T12:26:44.966-0400",
      "body": "Merged pull request <https://github.com/fluid-project/infusion/pull/144> into project repo at d8e638b28e87de46a37cc1c03ec33dd117ae9f96\n"
    }
  ]
}
---
To produce:

1\. go to infusion builder daily build: <http://build.fluidproject.org/infusionBuilder/html/InfusionBuilder.html>\
2\. select any number of module for a custom build\
3\. click "download" button\
4\. the error "Cannot execute build script" appears underneath the "download" button.

        