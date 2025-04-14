---json
{
  "title": "FLUID-141",
  "summary": "Create Maven repository for development and release artifacts",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Anastasia Cheetham",
  "reporter": "Anastasia Cheetham",
  "date": "2007-12-03T14:33:36.000-0500",
  "updated": "2011-01-20T09:26:21.441-0500",
  "versions": [
    "0.1",
    "0.3",
    "0.4beta1",
    "0.4"
  ],
  "fixVersions": [],
  "components": [
    "Infrastructure"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2009-03-25T10:55:10.000-0400",
      "body": "Eric Dalquist is setting us up a Nexus account, so that we can use the jasig repository for this. We'll have to test our pom files...\n"
    },
    {
      "author": "Colin Clark",
      "date": "2011-01-20T09:26:09.526-0500",
      "body": "A Maven repository, hosted by Jasig, was created for Fluid years ago. This one is sufficiently fixed. 🙂\n"
    }
  ]
}
---
We need one or two public maven repositories for development (snapshot) and release (e.g. 0.1) artifacts, so that users don't have to download and build source code if they don't want to.

        