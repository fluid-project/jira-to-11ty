---json
{
  "title": "FLUID-5004",
  "summary": "Put the build site into a git repo",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Justin Obara",
  "date": "2013-04-30T11:26:10.595-0400",
  "updated": "2013-07-22T08:54:54.513-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Website"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2013-04-30T16:22:06.096-0400",
      "body": "I took the files that were on the server and removed the backups and unused images. This has been pushed up to a new repo in our github space. \\\n<https://github.com/fluid-project/build.fluidproject.org>\n\nWhat's left:\\\n1\\) Decide wether the build site should itself use the built version of Infusion or have a static version, and update as needed.&#x20;\n\nOther:\n\n1\\) Redesign the build site (look and feel)\\\n2\\) Have a staging site and live site.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2013-07-22T08:54:54.156-0400",
      "body": "Merged into the project repo at 2e505839505076418b7b8201de81515039792fa0\n"
    }
  ]
}
---
Currently the resources for the build.fluidproject.org site live solely on the server. It is both hard to update/maintain and for the most part the backups are done manually (the entire server is also backed up automatically). We should move the sites resources into git and github. This will allow us to version the changes and make it easier for the community to maintain. We will also need to update the server from github on each push.

        