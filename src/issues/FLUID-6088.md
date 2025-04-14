---json
{
  "title": "FLUID-6088",
  "summary": "Docs updates for Infusion module API",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2016-11-29T11:26:28.891-0500",
  "updated": "2016-12-01T10:19:59.195-0500",
  "versions": [],
  "fixVersions": [
    "2.0"
  ],
  "components": [
    "Tech. Documentation"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Simon Bates",
      "date": "2016-12-01T09:56:07.565-0500",
      "body": "Merged at <https://github.com/fluid-project/infusion-docs/commit/d2bf3a96e480e13e5c9740b2c3876859aa0552c5>\n"
    }
  ]
}
---
The framework documentation on the node.js API <http://docs.fluidproject.org/infusion/development/NodeAPI.html> contains some out of date and misleading elements - \
i) The use of the obsolete ${module} syntax which has been replaced by %module\
ii) Reference to the dedupe-infusion grunt task which has been disused for some time and replaced by the internal self-deduping algorithm\
iii) others

        