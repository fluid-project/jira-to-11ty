---json
{
  "title": "IDI-35",
  "summary": "Finalize and implement login/out workflow and affordances",
  "tags": "IDI",
  "project": {
    "key": "IDI",
    "title": "IDI"
  },
  "type": "Task",
  "priority": "Blocker",
  "status": "Reopened",
  "reporter": "Anastasia Cheetham",
  "date": "2012-05-10T11:13:03.789-0400",
  "updated": "2020-02-15T04:04:41.646-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "IDI site"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/IDI-99/",
      "key": "IDI-99",
      "summary": "Add 'book equipment' functionality"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2012-05-15T20:03:48.120-0400",
      "body": "Until there is a need for login (i.e. when infrastructure booking is available), we're disabling the affordance for logging in. A direct link will be provided to institution representatives to allow them to edit their pages\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2013-03-18T14:16:09.742-0400",
      "body": "Logging in will be enabled with the equipment booking functionality (<https://fluidproject.atlassian.net/browse/IDI-99#icft=IDI-99>).\n"
    }
  ]
}
---
We need to decide where users should redirect on login, how to switch from logged in site to admin interface, and how to log out: Designs and implementation

        