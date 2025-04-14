---json
{
  "title": "SJRK-218",
  "summary": "Create a Jenkins job to backup stories.floeproject.org host volumes",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Alan Harnum",
  "reporter": "Alan Harnum",
  "date": "2019-02-12T11:48:00.998-0500",
  "updated": "2019-02-13T16:15:46.729-0500",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Alan Harnum",
      "date": "2019-02-13T16:15:46.725-0500",
      "body": "Shell script and Jenkins job created: <https://ci.incd.ca/view/Stacks/job/stack-stories.floeproject.org-backup/>\n"
    }
  ]
}
---
I've been manually making backups of the host volumes directories for the stories.floeproject.org site (running in Docker) before doing deploys.

We should, through creation of a Jenkins job, make it possible for others to perform this process, as it shouldn't require someone with SSH access to the server as a speedbump.

We also discussed making a second Jenkins job to run a cleanup process on the directory so that we avoid accumulating an excessive number of backups.

        