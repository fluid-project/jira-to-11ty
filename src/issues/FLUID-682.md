---json
{
  "title": "FLUID-682",
  "summary": "Add the ability to create a source distribution to the Ant build scripts",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Colin Clark",
  "date": "2008-05-30T18:00:19.000-0400",
  "updated": "2008-06-05T11:18:56.000-0400",
  "versions": [
    "0.3"
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
      "author": "Colin Clark",
      "date": "2008-05-30T18:35:52.000-0400",
      "body": "I've committed changes to the build script that will create a separate source distribution and zip file\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2008-06-05T11:18:56.000-0400",
      "body": "I've tested the source distribution and it's fine.\n"
    }
  ]
}
---
Infusion users have commented on the fact that we don't currently distribute the source code for our releases in an unminified form. We should add new targets to the build script to create a parallel, unminified source bundle.

        