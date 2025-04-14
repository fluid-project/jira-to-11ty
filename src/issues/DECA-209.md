---json
{
  "title": "DECA-209",
  "summary": "Upgade to latest version of Ocropus",
  "tags": "DECA",
  "project": {
    "key": "DECA",
    "title": "Decapod"
  },
  "type": "Task",
  "priority": "Blocker",
  "status": "Open",
  "reporter": "Justin Obara",
  "date": "2012-01-12T10:20:42.266-0500",
  "updated": "2013-01-21T11:13:40.142-0500",
  "versions": [],
  "fixVersions": [
    "0.8"
  ],
  "components": [
    "genpdf"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2012-09-04T13:30:10.594-0400",
      "body": "Currently Ocropus 0.6 is the latest version\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2013-01-21T11:13:40.142-0500",
      "body": "This may already be done. Please confirm by testing the installation using latest build in the google code repo.\n"
    }
  ]
}
---
We are currently working off of Ocropus 0.4.4, which is now quite out of date. I believe it has even been deprecated. The team at the IUPR should know what the latest version is to use. We will probably need a stable tag from ocropus so that we can update our install scripts. The genpdf script will need to be updated too.

        