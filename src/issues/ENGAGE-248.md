---json
{
  "title": "ENGAGE-248",
  "summary": "Remove view-related concerns, such as options, cutpoints, and component trees from Kettle-side data feeds.",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Sub-issue",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "Michelle D'Souza",
  "date": "2010-01-18T15:30:40.000-0500",
  "updated": "2010-02-16T11:50:34.000-0500",
  "versions": [
    "0.1"
  ],
  "fixVersions": [
    "0.3b"
  ],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-02-05T15:35:28.000-0500",
      "body": "Bug Parade Engage 0.3&#x20;\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-02-16T11:50:31.000-0500",
      "body": "The specific issues referenced here--Artifact View and Browse services--have been resolved. In general, we've taken a sweep through all our server-side code to ensure that data feeds don't include view-related concerns such as options or cut points.\n"
    }
  ]
}
---
At the moment, a large number of our data feeds on the server mix Model and View-related concerns. For example, ArtifactView's feed returns data along with render cutpoints and component tree. Artifact Browse passes back the model along with various component options.

We should refactor these so that the feed is entirely model-oriented, moving the component tree and options onto the client side.

        