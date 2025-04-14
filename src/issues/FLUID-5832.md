---json
{
  "title": "FLUID-5832",
  "summary": "Generate Source Maps When Minifying",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Michelle D'Souza",
  "reporter": "Michelle D'Souza",
  "date": "2015-12-17T12:23:14.058-0500",
  "updated": "2016-07-08T09:06:02.869-0400",
  "versions": [
    "1.5"
  ],
  "fixVersions": [
    "2.0"
  ],
  "components": [
    "Build Scripts"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-5918/",
      "key": "FLUID-5918"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2016-02-03T17:35:04.719-0500",
      "body": "Here is the pull request: <https://github.com/fluid-project/infusion/pull/662>\n"
    }
  ]
}
---
It is important that we uglify our code before we deploy it in order to reduce the size of the file that we send, however, this makes it very difficult to debug and maintain. In order to make the production code more easily debuggable, we should generate source maps along with our uglified code.

Further information in the mailing list thread from November 25, 2015: \
<http://lists.idrc.ocad.ca/pipermail/fluid-work/2015-November/009830.html>

        