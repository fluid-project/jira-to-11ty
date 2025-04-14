---json
{
  "title": "KETTLE-66",
  "summary": "Provide a standard Kettle middleware wrapper for Multer",
  "tags": "KETTLE",
  "project": {
    "key": "KETTLE",
    "title": "Kettle"
  },
  "type": "New Feature",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Alan Harnum",
  "reporter": "Alan Harnum",
  "date": "2017-12-14T13:13:14.276-0500",
  "updated": "2018-08-16T09:47:52.726-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/SJRK-32/",
      "key": "SJRK-32",
      "summary": "Add file/media upload ability"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Alan Harnum",
      "date": "2018-08-16T09:47:52.719-0400",
      "body": "Merged 2018-08-16\n"
    }
  ]
}
---
After discussion of how to approach <https://issues.fluidproject.org/browse/SJRK-32> with @@Michelle D'Souza, it seemed to make the most sense to do this work in a fork of Kettle with an eye towards the eventual contribution of this to Kettle as a whole, as the capacity to handle file uploads would be a useful core feature for Kettle.

        