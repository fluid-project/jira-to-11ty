---json
{
  "title": "ENGAGE-543",
  "summary": "Cabinet events should be more fine grained",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Michelle D'Souza",
  "date": "2010-04-08T12:54:34.000-0400",
  "updated": "2017-12-22T09:44:34.007-0500",
  "versions": [
    "0.3"
  ],
  "fixVersions": [],
  "components": [
    "Cabinet"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/ENGAGE-538/",
      "key": "ENGAGE-538"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2017-12-22T09:44:34.005-0500",
      "body": "The repository has been archived.\n"
    }
  ]
}
---
The Cabinet events were changed from 'onOpen' and 'onClose' of a drawer to a general 'modelChanged'. The modelChanged event is likely very useful to many users of the Cabinet but we should also provide more fine grained events.

In the case of ArtifactView, we are currently looking through every drawer, looking at the existing title and the title that we expect based on its state. From this we deduce whether it has changed and modify the title accordingly. If we were simply to get a 'drawer open' or 'drawer change' event we could make our change without having to look through all the drawers.&#x20;

        