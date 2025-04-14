---json
{
  "title": "ENGAGE-209",
  "summary": "Implement a method for storing user data/preferences in a cookie",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2009-12-01T14:00:13.000-0500",
  "updated": "2010-02-05T14:27:42.000-0500",
  "versions": [],
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
      "date": "2010-02-05T14:27:42.000-0500",
      "body": "There is a wrapper around the jquery cookie plugin in the engageClientUtils.js file. which can be used for cookie related tasks.\n"
    }
  ]
}
---
Implement a method for storing user data/preferences in a cookie

Start by using <http://plugins.jquery.com/project/Cookie> , which is mentioned in FLUID-2718

        