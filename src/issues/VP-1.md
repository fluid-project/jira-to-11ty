---json
{
  "title": "VP-1",
  "summary": "Some controls should be toggle buttons, not checkboxes",
  "tags": "VP",
  "project": {
    "key": "VP",
    "title": "Video Player"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Anastasia Cheetham",
  "date": "2012-01-06T11:47:33.351-0500",
  "updated": "2013-01-28T09:25:20.184-0500",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-4573/",
      "key": "FLUID-4573",
      "summary": "Renderer should handle a toggle button"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2012-01-06T13:52:15.705-0500",
      "body": "We've decided to stick with toggle buttons and manually bind, for now, since implementing the checkboxes proved more trouble than it's worth, and the toggle button is more semantically correct anyway.\n"
    }
  ]
}
---
In order to take advantage of Renderer autobinding, some of the controls for the Video Player are being implemented as checkboxes when they semantically should be toggle buttons. Once toggle buttons are supported by the Renderer (<https://fluidproject.atlassian.net/browse/FLUID-4573#icft=FLUID-4573>), we should switch the implementation.

        