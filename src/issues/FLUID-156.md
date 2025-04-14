---json
{
  "title": "FLUID-156",
  "summary": "Commits to sandbox area should not be subject to JIRA rules",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "Anastasia Cheetham",
  "reporter": "Antranig Basman",
  "date": "2008-01-04T09:54:13.000-0500",
  "updated": "2009-03-18T10:46:10.000-0400",
  "versions": [
    "0.5beta1"
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
      "author": "Anastasia Cheetham",
      "date": "2008-01-07T13:25:03.000-0500",
      "body": "This makes sense. Unfortunately, the SVN configuration that implements this check is repository-wide, meaning we can't turn it off for the sandbox only, since it exists in the same repository as the main fluid code.\n\nI guess this the case where the NOJIRA preface is appropriate.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-03-18T10:46:10.000-0400",
      "body": "Based on the comments, it would appear, that with this version of svn at least, we are unable to change how this works\n"
    }
  ]
}
---
Commits to the sandbox area of the fluid SVN should not be subject to the rule that a JIRA item number is required in the commit message:

Your log message does not contain a JIRA Issue identifier or 'NOJIRA'... (or bad format used)\
The JIRA Issue identifier or 'NOJIRA' must be the first item on the first line of the log message.

        