---json
{
  "title": "DECA-176",
  "summary": "Upgrade to Infusion 1.4",
  "tags": "DECA",
  "project": {
    "key": "DECA",
    "title": "Decapod"
  },
  "type": "Task",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2011-10-12T13:51:20.230-0400",
  "updated": "2012-01-10T09:22:51.091-0500",
  "versions": [],
  "fixVersions": [
    "0.5a"
  ],
  "components": [
    "Infrastructure"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2011-10-14T15:28:25.160-0400",
      "body": "I've updated to Infusion 1.4 in my clone housed in bitbucket\\\n<https://bitbucket.org/jobara/decapod-ui>\\\n<https://bitbucket.org/jobara/decapod-server>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2012-01-10T09:21:05.916-0500",
      "body": "Upgraded to a custom version of Infusion 1.4\n"
    }
  ]
}
---
Upgrade to the Infusion 1.4 release after it comes out.&#x20;

Currently decapod-ui has a subrepo to pull in a static copy of Infusion. However, we should just switch to using a custom build of Infusion that only contains the components we need.

        