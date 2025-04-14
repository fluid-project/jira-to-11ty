---json
{
  "title": "FLUID-4757",
  "summary": "The Infusion Builder application should use its own build of Infusion, rather than linking to individual files",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "Colin Clark",
  "reporter": "Colin Clark",
  "date": "2012-08-14T12:56:13.982-0400",
  "updated": "2014-03-03T11:20:12.555-0500",
  "versions": [],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Infusion Builder"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2014-03-03T11:20:12.543-0500",
      "body": "builder.fluidproject.org has been taken down and there are no immediate plans to replace it. Currently all builds are expected to be generated directly from the grunt build scripts.\n\n<http://fluid.2324889.n4.nabble.com/Infusion-Builder-issues-tp8926.html>\n"
    }
  ]
}
---
At the moment, the Infusion Builder links to individual files within the Infusion distribution it uses to generate builds. This causes fragility as files and dependencies change within Infusion. Users are typically expected to use their own custom build to avoid problems with these kinds of changes; the Builder should too.

        