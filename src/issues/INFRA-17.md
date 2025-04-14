---json
{
  "title": "INFRA-17",
  "summary": "Create Atomic Vagrantbox for gpii-preferences",
  "tags": "INFRA",
  "project": {
    "key": "INFRA",
    "title": "Infrastructure"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Resolved",
  "resolution": "Duplicate",
  "assignee": "Giovanni Tirloni",
  "reporter": "Alan Harnum",
  "date": "2015-08-07T14:21:41.760-0400",
  "updated": "2017-01-13T11:32:52.419-0500",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Giovanni Tirloni",
      "date": "2017-01-13T11:06:47.580-0500",
      "body": "It seems this could be addressed by the work being done on the Vagrant plugin. Would it make sense to add this requirement there and close this ticket?\n"
    },
    {
      "author": "Alan Harnum",
      "date": "2017-01-13T11:17:05.557-0500",
      "body": "Yes, this makes sense to me - this was filed a year and a half ago & our thinking has evolved a lot since then.\n"
    }
  ]
}
---
We want to set up a Vagrantbox for preferences server work that minimizes installation and support for new developers. Specifically:

* being able to set up the preferences server along with all of its dependencies (Couche, nginx) in a vagrantbox
* edit from host editor of choice
* push to github codebase
* should only have to run vagrant up / vagrant provision
* Centos7 or Centos Atomic

We're going to look at Atomic first to see what the learning curve looks like.

        