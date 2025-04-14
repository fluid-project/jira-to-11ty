---json
{
  "title": "FLUID-619",
  "summary": "OSDPL Infrastructure: Put the OSDPL into SVN",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Incomplete",
  "assignee": "Jonathan Hung",
  "reporter": "Jonathan Hung",
  "date": "2008-05-26T16:04:07.000-0400",
  "updated": "2013-04-11T17:45:52.003-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "OSDPL"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Allison Bloodworth",
      "date": "2008-07-16T21:14:00.000-0400",
      "body": "iteration30\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2009-03-20T11:32:45.000-0400",
      "body": "Comparing the Drupal 5.15 factory package to the OSDPL Drupal 5.15 installation, all modifications are isolated to the ./files directory and the ./sites/default directory.\n\nSVN should version control these two directories at minimum.\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2011-01-20T12:55:19.229-0500",
      "body": "Using SVN to version our installation of Drupal is not ideal. The inclusion of a Drupal installation, binaries, and the issue of version controlling a database need to be addressed.\n"
    }
  ]
}
---
Using Etxernals, link to external modules and core Drupal code, and manage any modules not covered by external sources.

        