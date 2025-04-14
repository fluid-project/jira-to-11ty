---json
{
  "title": "FLUID-4523",
  "summary": "Infusion builder lacks a decent way switching to use the new infusion release",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Cindy Li",
  "date": "2011-10-14T11:17:54.674-0400",
  "updated": "2014-03-03T11:20:12.012-0500",
  "versions": [
    "1.4"
  ],
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
      "date": "2014-03-03T11:20:12.010-0500",
      "body": "builder.fluidproject.org has been taken down and there are no immediate plans to replace it. Currently all builds are expected to be generated directly from the grunt build scripts.\n\n<http://fluid.2324889.n4.nabble.com/Infusion-Builder-issues-tp8926.html>\n"
    }
  ]
}
---
Once the infusion builder is deployed at the server, the directory and scripts for the deployment are wiped out. At the time that a new infusion release comes out and infusion builder needs to be updated to point to the new release, the only ways are either re-deploying the entire builder or manually replace the infusion and clean up the database.

We need a simpler and more formal way for this task.

        