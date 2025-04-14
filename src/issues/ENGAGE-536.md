---json
{
  "title": "ENGAGE-536",
  "summary": "Update Engage Core to a new jQuery 1.4+ and jQuery UI 1.8+. ",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Task",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "y z",
  "reporter": "y z",
  "date": "2010-03-30T15:06:34.000-0400",
  "updated": "2017-12-22T09:44:29.065-0500",
  "versions": [
    "0.3"
  ],
  "fixVersions": [
    "0.3"
  ],
  "components": [],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-3527/",
      "key": "FLUID-3527",
      "summary": "Upgrade to jQuery 1.4.2 and jQuery UI 1.8"
    }
  ],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/ENGAGE/ENGAGE-536/ENGAGE_JQUERY_core.txt",
      "filename": "ENGAGE_JQUERY_core.txt"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/ENGAGE/ENGAGE-536/ENGAGE_JQUERY_kettle.txt",
      "filename": "ENGAGE_JQUERY_kettle.txt"
    }
  ],
  "comments": [
    {
      "author": "y z",
      "date": "2010-03-30T15:07:59.000-0400",
      "body": "Since engage core depends on the resources from Fluid Infusion it is necessary to update it as well.\n"
    },
    {
      "author": "y z",
      "date": "2010-03-30T15:09:11.000-0400",
      "body": "This is an update to kettle that adds its own older version of jquery, compatible with env.js\n"
    },
    {
      "author": "y z",
      "date": "2010-03-30T16:11:44.000-0400",
      "body": "Also fixes broken artifact view, updates mycollection unit tests\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2010-04-07T14:49:24.000-0400",
      "body": "I reviewed the changes and they look good.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2017-12-22T09:44:29.063-0500",
      "body": "The repository has been archived.\n"
    }
  ]
}
---
Update Engage Core to a new jQuery 1.4+ and jQuery UI 1.8+. Update Kettle to use it's own older version of jQuery that is compatible with env.js

        