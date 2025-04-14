---json
{
  "title": "SJRK-144",
  "summary": "Create a basic asset pipeline for minifying and compiling Javascript dependencies",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Improvement",
  "priority": "Critical",
  "status": "Open",
  "resolution": "Fixed",
  "reporter": "Alan Harnum",
  "date": "2018-06-06T14:11:32.869-0400",
  "updated": "2018-07-17T09:54:16.184-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool Server"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/SJRK-152/",
      "key": "SJRK-152"
    }
  ],
  "attachments": [],
  "comments": []
}
---
Currently, the server project links many, many individual Javascript files. This impacts performance significantly.

Part of the process of "production" mode should be to build a minified single-file Javascript file that can be linked from the UI, using a Grunt task.

        