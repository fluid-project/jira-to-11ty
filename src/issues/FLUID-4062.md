---json
{
  "title": "FLUID-4062",
  "summary": "Release 1.3.1: Update version numbers",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Michelle D'Souza",
  "reporter": "Anastasia Cheetham",
  "date": "2011-02-16T09:41:45.020-0500",
  "updated": "2011-02-17T09:43:39.672-0500",
  "versions": [],
  "fixVersions": [
    "1.3.1"
  ],
  "components": [
    "Release"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2011-02-16T10:45:15.263-0500",
      "body": "Michelle, I've submitted a pull request for this. It's minor - would you have a moment to finish?\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-02-16T11:28:43.822-0500",
      "body": "Pushed to Infusion project repo at commit 36351c1a0624a130ed7ee42fb203eeaf0bc1a2cf\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2011-02-16T15:49:33.826-0500",
      "body": "I missed the pom.xml file in the image gallery.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2011-02-16T16:08:14.961-0500",
      "body": "MIchelle, could you pull this chance?\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-02-17T09:43:00.186-0500",
      "body": "I pushed the pom.xml update at 876068651a0fd02f9d88\n"
    }
  ]
}
---
For this release, we need to update the version numbers in

* Fluid.js: the "fluid.version" string
* pom.xml
* project.xml

We will NOT be updating the variable "fluid\_1\_3" for this point release.

        