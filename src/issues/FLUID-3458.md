---json
{
  "title": "FLUID-3458",
  "summary": "Setup a cron job to remove temp files.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Laurel Williams",
  "reporter": "Justin Obara",
  "date": "2010-01-04T16:11:19.000-0500",
  "updated": "2010-01-06T12:11:37.000-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Infusion Builder"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3458/FLUID-3458-1.patch.txt",
      "filename": "FLUID-3458-1.patch.txt"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-01-04T16:11:28.000-0500",
      "body": "Bug Parade Builder 1.1.2&#x20;\n"
    },
    {
      "author": "Laurel Williams",
      "date": "2010-01-05T13:01:46.000-0500",
      "body": "This patch alters the deploy script to edit the cleanup.sh to be an executable file. It also changes cleanup.sh to fix the directory names to the newer \"infusionBuilder\" format.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-01-06T12:11:37.000-0500",
      "body": "Committed Laurel's patch (FLUID-3458-1.patch.txt) which changes the buildscripts to make the cleanup script executable and also adjusts the cleanup script to cleanup the proper directory (due to a name change in a previous commit).\n"
    }
  ]
}
---
Install the script (cleanup.sh), which is used to remove the temp files, as a cron on the deploy server.&#x20;

cleanup.sh is located in infusionBuilder-secure/scripts

        