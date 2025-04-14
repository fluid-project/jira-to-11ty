---json
{
  "title": "STUDIO-26",
  "summary": "Customize CKEditor toolbar",
  "tags": "STUDIO",
  "project": {
    "key": "STUDIO",
    "title": "Fluid Studios"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Cindy Li",
  "reporter": "Cindy Li",
  "date": "2011-12-09T17:46:36.599-0500",
  "updated": "2014-03-03T13:02:04.024-0500",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2011-12-12T10:11:31.567-0500",
      "body": "The CKEditor toolbar can be customized through the admin interface. Colin has done this on the live site.&#x20;\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-12-12T10:33:16.844-0500",
      "body": "Cindy made a good point that if we modify the config file that we include in the repo then fresh installs will be easier.&#x20;\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-12-12T13:55:07.087-0500",
      "body": "Merged into project repo at 7d6ed414fbf61735c69aa5b88da2526ceca81d36\n"
    }
  ]
}
---
The CKEditor toolbar should be customized in line with <http://dev.studios.fluidproject.org/?p=24>

Since the CKEditor plugin needs to go through the installation process due to the fact that this process inserts some data into DB and we currently don't have a good solution to dump out the data we need. So the proposed solution is:

1\. Save the original CKEditor plugin zip file with the original wordpress in the branch "wordpress"\
2\. Save CKEditor plugin zip file that has been modified for fluid studio which contains the customized toolbar in "development" and "master"(production) branches

        