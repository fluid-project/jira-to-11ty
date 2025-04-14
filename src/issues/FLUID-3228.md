---json
{
  "title": "FLUID-3228",
  "summary": "The source PSD graphics for the FSS images should not be shipped as part of the Infusion release bundle",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Colin Clark",
  "date": "2009-10-05T17:50:53.000-0400",
  "updated": "2010-04-20T14:11:29.000-0400",
  "versions": [
    "0.8",
    "0.8.1",
    "1.0",
    "1.1",
    "1.1.1",
    "1.1.2"
  ],
  "fixVersions": [
    "1.2"
  ],
  "components": [
    "FSS",
    "Infrastructure"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Laurel Williams",
      "date": "2009-10-30T15:54:14.000-0400",
      "body": "I am removing this task from the \"Infusion Builder\" component since it is related to the build but not to the Infusion Builder. Other issues related to the build have been listed under \"Infrastructure\" so I added it there. This is confusing so we may need to clarify where build bugs and tasks belong.\n"
    },
    {
      "author": "Jacob Farber",
      "date": "2010-03-26T12:01:42.000-0400",
      "body": "I think the hardest part of this task is to just find a proper home for all the different files.\\\nOnce that's done, moving them should be simple.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-03-30T16:59:31.000-0400",
      "body": "This was fixed by James and Justin at r9762\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-03-30T17:35:07.000-0400",
      "body": "I reviewed this issue and it has been fixed for Infusion 1.2. I'm sure our download size is much smaller as a result\n"
    }
  ]
}
---
At the moment, we distribute the source PSD images for all the FSS icons and so on. While we certainly do want these to be closely associated with our source code, they don't need to be distributed with an Infusion release.

We should come up with a strategy for how best to do this: perhaps just adding an extra bit of logic to our custom build scripts.

        