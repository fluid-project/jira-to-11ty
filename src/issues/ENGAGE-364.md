---json
{
  "title": "ENGAGE-364",
  "summary": "My Collection's server-side code doesn't correctly return artifact data that can be rendered by the component",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Svetoslav Nedkov",
  "reporter": "Colin Clark",
  "date": "2010-02-09T23:44:26.000-0500",
  "updated": "2014-03-03T14:11:32.398-0500",
  "versions": [
    "0.3b"
  ],
  "fixVersions": [
    "0.3b"
  ],
  "components": [
    "My Collection"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2010-02-09T23:44:38.000-0500",
      "body": "Bug Parade Engage 0.3\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-02-16T11:58:19.000-0500",
      "body": "This issue was addressed last week in the myCollection-tryout branch. This fix still needs to be committed to trunk and reviewed.\n"
    }
  ]
}
---
At the moment, it looks like My Collection's server-side code isn't successfully building up a valid model for the component to render. This might potentially be due to a bug in the by\_id Lucene view in the McCord database. Here's what I'm seeing:

The service correctly reads the user's collections and builds up a query to Lucene to get artifacts matching the artifacts in the user's personal collection. However, it seems that the view is not returning a set of full and valid artifact documents. As a result, when passed to the model mapping code in Engage, a corrupt model is produced with properties that are largely undefined.

        