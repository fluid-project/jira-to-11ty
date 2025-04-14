---json
{
  "title": "ENGAGE-538",
  "summary": "Update all components that use cabinet to a new events api.",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Task",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "y z",
  "reporter": "y z",
  "date": "2010-03-31T11:02:25.000-0400",
  "updated": "2017-12-22T09:44:25.093-0500",
  "versions": [
    "0.3"
  ],
  "fixVersions": [
    "0.3"
  ],
  "components": [
    "Cabinet"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/ENGAGE-543/",
      "key": "ENGAGE-543",
      "summary": "Cabinet events should be more fine grained"
    }
  ],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/ENGAGE/ENGAGE-538/ENGAGE-538.txt",
      "filename": "ENGAGE-538.txt"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-03-31T11:22:00.000-0400",
      "body": "Committed Yura's patch  <https://fluidproject.atlassian.net/browse/ENGAGE-538#icft=ENGAGE-538>.txt , which updates to use the cabinets new single event. It now has to do some work to find out which drawer was changed before updating the header text.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2010-04-08T12:57:47.000-0400",
      "body": "This fix is not very good since it requires the Artifact View to do a lot of extra work to determine which particular drawer has changed state. That, in fact, is Cabinet's business and Cabinet should be changed to have a more informative event that Artifact View can listen to.&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2017-12-22T09:44:25.092-0500",
      "body": "The repository has been archived.\n"
    }
  ]
}
---
Update all components that use cabinet to a new events api.

        