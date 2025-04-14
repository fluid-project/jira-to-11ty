---json
{
  "title": "INFRA-83",
  "summary": "Enforce correct domain for JIRA/Wiki",
  "tags": "INFRA",
  "project": {
    "key": "INFRA",
    "title": "Infrastructure"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Resolved",
  "resolution": "Won't Fix",
  "assignee": "Giovanni Tirloni",
  "reporter": "Giovanni Tirloni",
  "date": "2016-06-16T09:36:58.870-0400",
  "updated": "2016-08-22T10:13:00.693-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Giovanni Tirloni",
      "date": "2016-08-22T10:13:00.691-0400",
      "body": "UoT deleted the old DNS names that were pointing to us. No other links seem to be pointing to our servers so this is a non-issue for the time being.\n"
    }
  ]
}
---
There are some old DNS records at utoronto.ca that point to IP addresses in our network. This causes URLs like this to work: <https://project.courses.utoronto.ca/browse/GPII-1826>

We need to add a rule to nginx redirecting everything to use the proper domain name, so Google slowly updates its records and visitors are not confused anymore.

E.g. if $host != issues.fluidproject.org then redirect to issues.fluidproject.org

This should be done for the following websites:\
issues.fluidproject.org\
issues.gpii.net\
wiki.fluidproject.org

        