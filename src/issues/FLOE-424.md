---json
{
  "title": "FLOE-424",
  "summary": "Create a new panel for displaying the server returned GPII token",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Cindy Li",
  "reporter": "Cindy Li",
  "date": "2015-09-28T16:04:09.540-0400",
  "updated": "2015-11-03T13:00:40.386-0500",
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
      "date": "2015-09-30T09:50:36.021-0400",
      "body": "For creating the read only input and textarea, you just need to add a \"readonly\" attribute.\n\n<http://jsfiddle.net/nc23552j/>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-10-05T10:17:22.013-0400",
      "body": "Merged pull request ( <https://github.com/fluid-project/first-discovery/pull/102> ) into the project repo at 9802ac5333b0cbac4a40adbaa9df79c739a8f70b\n"
    }
  ]
}
---
The wireframe for the integration of the first discovery tool and the preferences server: <https://wiki.fluidproject.org/download/attachments/28344554/FD%20tool%20congrats%20and%20token%20copy.pdf?version=2&modificationDate=1442948727163&api=v2>

Implement the last panel that shows the GPII token returned by the preferences server.

        