---json
{
  "title": "ENGAGE-519",
  "summary": "Remove unnecessary options from cabinet",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2010-03-17T12:22:31.000-0400",
  "updated": "2014-03-03T13:44:48.325-0500",
  "versions": [],
  "fixVersions": [
    "0.3"
  ],
  "components": [
    "Cabinet"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-03-19T10:01:28.000-0400",
      "body": "Removed the preventEventFireOnInit option from the cabinet, and now no longer fire events on init ever. Also removed the now unnecessary toggleVisibility function as this has been switched to be handled by css\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-03-24T10:10:45.000-0400",
      "body": "Assigned to Antranig for review\n"
    },
    {
      "author": "Antranig Basman",
      "date": "2010-03-25T08:59:51.000-0400",
      "body": "Good changes which removed redundant utility as well as unclear initialisation workflow.\n"
    }
  ]
}
---
Remove unnecessary options from cabinet

The one in question is the option to prevent the firing of events on initialization. These events should never fire on initialization

        