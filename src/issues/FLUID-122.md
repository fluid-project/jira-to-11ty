---json
{
  "title": "FLUID-122",
  "summary": "viewsvn service for Fluid svn, together with links from outgoing mail",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "Anastasia Cheetham",
  "reporter": "Antranig Basman",
  "date": "2007-11-20T13:03:58.000-0500",
  "updated": "2011-01-20T08:51:06.949-0500",
  "versions": [
    "0.1",
    "0.3",
    "0.4beta1",
    "0.4"
  ],
  "fixVersions": [],
  "components": [
    "Infrastructure"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2011-01-20T08:51:06.946-0500",
      "body": "We're in the process to moving our code to github which has good support built in for view code, diffs, and etc.\n"
    }
  ]
}
---
The Sakai SVN has a service named "viewsvn" which allows direct linking and browsing of SVN commits - for example&#x20;

<http://source.sakaiproject.org/viewsvn/?view=rev&rev=38492>

This is an extremely useful view which lets contributors "keep on top of" changes from the outgoing email list. It would be helpful if the Fluid SVN could support this service as well.

        