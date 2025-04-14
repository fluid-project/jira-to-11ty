---json
{
  "title": "FLUID-3400",
  "summary": "In the infusion builder, alter the deploy script to copy the files from the exported directory.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Laurel Williams",
  "date": "2009-12-02T15:02:43.000-0500",
  "updated": "2014-03-03T11:20:12.895-0500",
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
      "date": "2011-05-17T09:54:33.070-0400",
      "body": "We may not need to worry about this one so much any more if we use a git repo instead. This way we could reset, which will restore the files, or re-clone the repo.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-03-03T11:20:12.893-0500",
      "body": "builder.fluidproject.org has been taken down and there are no immediate plans to replace it. Currently all builds are expected to be generated directly from the grunt build scripts.\n\n<http://fluid.2324889.n4.nabble.com/Infusion-Builder-issues-tp8926.html>\n"
    }
  ]
}
---
The infusion builder deploy script cannot be re-run if you make a mistake with the mysql password or another step. This is because the files have already been moved and are no longer in place to re-deploy. An easy way to solve this would be to copy the files rather than move them.

        