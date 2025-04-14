---json
{
  "title": "FLUID-5823",
  "summary": "Rework docs template project so that all users of it are not required to be forks",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "Jonathan Hung",
  "reporter": "Antranig Basman",
  "date": "2015-12-01T15:35:04.263-0500",
  "updated": "2024-07-23T10:45:33.697-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Docs platform"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2024-07-23T10:45:33.489-0400",
      "body": "This iteration of the docs platform is no longer in use. We’ve switched to using 11ty. [Trivet](https://github.com/fluid-project/trivet) is one replacement and can be used as a template for other projects.\n"
    }
  ]
}
---
Our docs platform should not work according to the "every docs project is a fork of the template project" model. This will create maintenance chaos for our users who should not be expected to be skilled in resolving git conflicts, as well as making it impossible to write sensible npm packaging for our projects, etc.

This was originally reported on the docs-first-discovery first pull at <https://github.com/GPII/docs-first-discovery/pull/1#discussion_r45901523> - we agreed to let this pull in on the basis of getting some sensible docs up, but we need to rework the way we use our template project. It should be a standard npm dependency like any other.

        