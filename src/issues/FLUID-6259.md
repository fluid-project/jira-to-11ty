---json
{
  "title": "FLUID-6259",
  "summary": "The build using 'grunt' creates broken demos and examples in the build folder",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Mohamed Shadab",
  "date": "2018-03-10T06:12:56.457-0500",
  "updated": "2024-07-24T12:52:44.906-0400",
  "versions": [
    "3.0"
  ],
  "fixVersions": [],
  "components": [
    "Infusion Builder"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2018-03-12T09:42:00.744-0400",
      "body": "In the past we were removing the build directory as it was initially intended as an intermediary step. However there was a desire to have some of the artifacts from the build available without having to go through the zip. We have since provided all of the generated/built artifacts in the dist directory so we may again be able to just clean out the build directory at the end of a build. \n\n@@Alan Harnum and @@Antranig Basman, do you have any thoughts on this?\n"
    },
    {
      "author": "Justin Obara",
      "date": "2024-07-24T12:52:44.906-0400",
      "body": "Likely fixed after moving off of grunt in favour of npm scripts.\n"
    }
  ]
}
---
Hey,

When you basically run 'grunt' (which takes the target all) the demos and examples in the build folder created in the process do not work as their linked dependencies (the script tags) are pointing to empty locations as there a clean task performed at the end of the build task.

However in the zip file created in the products folder, this is not the case as the files are cleaned post compression.

I have found a quick fix for this issue that is to remove the 'clean:postBuild' task from the build task, which is post compression and will make a Pull Request as soon as someone verifies it is an issue and is not intended for whatsoever reason.

        