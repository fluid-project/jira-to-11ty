---json
{
  "title": "FLUID-3222",
  "summary": "Change Infusion trunk's version number from 1.2 back to 1.1 in preparation for the Infusion 1.1.2 release.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Colin Clark",
  "date": "2009-10-02T14:51:39.000-0400",
  "updated": "2011-01-13T16:54:19.192-0500",
  "versions": [],
  "fixVersions": [
    "1.1.2"
  ],
  "components": [
    "Release"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3222/patch.txt",
      "filename": "patch.txt"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-10-05T08:54:10.000-0400",
      "body": "Bug Parade Infusion 1.1.2&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-10-05T15:30:42.000-0400",
      "body": "reviewed Yura's patch.txt, and have committed it to the repository\n"
    },
    {
      "author": "Jacob Farber",
      "date": "2009-10-05T15:53:45.000-0400",
      "body": "Reviewed, looks good.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2009-10-14T18:33:48.000-0400",
      "body": "This has been completed for Infusion 1.1.2\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-11-03T10:52:35.000-0500",
      "body": "as per previous comment\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-01-13T16:50:10.921-0500",
      "body": "Reopening these issues in order to change the component to Release.&#x20;\n"
    }
  ]
}
---
We're going to cut Infusion 1.1.2 out of trunk instead of the infusion-1.1.x branch. As a result, we need to change the fluid version number in every JavaScript file from fluid\_1\_2 to fluid\_1\_1.

        