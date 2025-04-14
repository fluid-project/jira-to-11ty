---json
{
  "title": "ENGAGE-96",
  "summary": "Kettle is not ablt to mount artifact.html from mounted engage directory.",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Sub-issue",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "y z",
  "date": "2009-09-24T13:56:18.000-0400",
  "updated": "2009-11-03T11:56:28.000-0500",
  "versions": [
    "0.1"
  ],
  "fixVersions": [],
  "components": [
    "Kettle"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/ENGAGE-105/",
      "key": "ENGAGE-105"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-09-25T15:28:40.000-0400",
      "body": "Bug Parade Engage 0.1&#x20;\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2009-10-05T17:52:46.000-0400",
      "body": "This is now resolved in trunk, please review\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-11-03T11:56:28.000-0500",
      "body": "Closed as per previous comment\n"
    }
  ]
}
---
Need to fix Kettle so it's able to find artifact.html in one of the mounted directories, i.e. engage/components/

        