---json
{
  "title": "FLUID-6140",
  "summary": "Infusion self-deduping fails when infusion appears as a dependency of a tool used by infusion",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2017-03-01T20:45:45.519-0500",
  "updated": "2017-04-10T11:54:11.707-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-6139/",
      "key": "FLUID-6139"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-5822/",
      "key": "FLUID-5822",
      "summary": "Remove requirement to \"dedupe\" multiple infusions within a module tree"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Cindy Li",
      "date": "2017-04-10T11:54:02.414-0400",
      "body": "[The pull request](https://github.com/fluid-project/infusion/pull/820) has been merged into the project repo master branch at 5e835f6114ab60444ff65d5bcc7c5b0f8bb28873\n"
    }
  ]
}
---
A further pathological possibility has emerged for our "auto-self-deduping implementation" originally delivered for <https://fluidproject.atlassian.net/browse/FLUID-5822#icft=FLUID-5822>. FLUID-6139 shows work where infusion is being used as a dependency of one of its own devDependencies - in particular, the work to apply gpii-testem as an automated solution for running browser-based tests in testem together with istanbul coverage.

This case defeats our existing already rather tortured logic, because in this case, the "original infusion" (the one whose dev tools are now executing) is not loadable by the plain node require system at all - since it is not hosted in a directory named node\_modules. This is the main use case for the "pre-inspection" system that was originally delivered to allow GPII universal test cases to run from an isolated checkout for <https://issues.gpii.net/browse/GPII-2151> - that is, the ability to issue, for example, fluid.require("%universal") rather than failing to run require("universal").

Unfortunately in this case we are completely hoist by our own petard since it would be impossible to run fluid.require("%infusion") before infusion itself has already successfully loaded. We will need to convolute our self-deduping logic yet further by applying a portion of the "pre-inspection" algorithm to defer to any such infusion that has already loaded from a higher path in the filesystem.

        