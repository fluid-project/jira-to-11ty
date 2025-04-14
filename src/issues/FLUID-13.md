---json
{
  "title": "FLUID-13",
  "summary": "Fluid JIRA should be linked to SVN commits",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Anastasia Cheetham",
  "reporter": "Antranig Basman",
  "date": "2007-06-28T06:00:49.000-0400",
  "updated": "2007-10-22T15:55:02.000-0400",
  "versions": [],
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
      "date": "2007-08-08T10:38:34.000-0400",
      "body": "Our system admin is adding the SVN plug-in to our JIRA application. Once this is done, the linking work. We should go ahead and add the JIRA key to our SVN commit messages in readiness.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2007-08-10T11:12:55.000-0400",
      "body": "This is now set up. Please record JIRA keys (e.g. \"FLUID-13\") in the SVN commit logs for any related commits.\n"
    }
  ]
}
---
When this is done, an extra tab appears for a resolved issue labelled "Subversion Commits" listing any commits which mention the issue's key in the commit log message. This is some kind of standard module for JIRA - should probably be associated with both contrib and "core" (assuming we someday get/want to get things in there) Sakai repos

        