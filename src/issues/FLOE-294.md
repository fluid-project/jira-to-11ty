---json
{
  "title": "FLOE-294",
  "summary": "Implement the congratulations page",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2015-03-27T09:47:17.948-0400",
  "updated": "2015-11-03T11:28:07.104-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "First Discovery"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2015-04-09T12:44:00.039-0400",
      "body": "Submitted a pull request\\\n<https://github.com/fluid-project/first-discovery/pull/30>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-04-09T12:47:28.918-0400",
      "body": "The close button was removed because there isn't a reliable way to programatically close the browser window/tab.\\\n<https://developer.mozilla.org/en-US/docs/Web/API/Window/close>\n"
    },
    {
      "author": "Cindy Li",
      "date": "2015-04-10T12:21:30.762-0400",
      "body": "The pull request has been merged into the master branch @ 49c33db40d06488736c014fff76816e35cf4627b\n"
    }
  ]
}
---
The congratulations page displays a message indicating that everything was saved. This should come after a user confirms the preferences on the confirmation page.

The close button should close the browser tab.

See wireframes:\
<http://wiki.fluidproject.org/download/attachments/40797428/First%20Discovery%20January%2029%2015%20small.pdf?version=5&modificationDate=1422562380914&api=v2>

        