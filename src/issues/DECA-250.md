---json
{
  "title": "DECA-250",
  "summary": "Refactor exporter.js to not need to use visSwitcher.js",
  "tags": "DECA",
  "project": {
    "key": "DECA",
    "title": "Decapod"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2012-05-14T14:16:55.862-0400",
  "updated": "2012-07-10T13:50:50.605-0400",
  "versions": [],
  "fixVersions": [
    "0.6"
  ],
  "components": [
    "Export"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2012-07-09T15:15:28.808-0400",
      "body": "Refactored exporter.js to have it's own functions for showing the instructions and status. Removed visSwitcher code as it is no longer used by anything.\n\nThe changes are in my bitbucket repo:\\\n<https://bitbucket.org/jobara/decapod-0.6-ui-iteration4>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2012-07-10T13:50:03.356-0400",
      "body": "Merged into the googlecode repo\n"
    },
    {
      "author": "Justin Obara",
      "date": "2012-07-10T13:50:50.605-0400",
      "body": "Merged into the googlecode repo\n"
    }
  ]
}
---
visSwitcher.js is a strange component, and it's function of hiding/showing elements should be better handled by the export itself or through its use of the renderer. The visSwitcher was already removed from the exportControls and should be removed from Decapod after exporter.js is refactored.

        