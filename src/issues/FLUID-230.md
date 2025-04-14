---json
{
  "title": "FLUID-230",
  "summary": "Build script should also JSLint files",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jonathan Hung",
  "reporter": "Jonathan Hung",
  "date": "2008-02-11T12:42:54.000-0500",
  "updated": "2008-03-19T13:36:39.000-0400",
  "versions": [
    "0.1"
  ],
  "fixVersions": [
    "0.3"
  ],
  "components": [
    "Infrastructure"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2008-02-14T12:28:47.000-0500",
      "body": "Originally wanted to YUI Compressor to validate the files, but it can't do validation WITHOUT minifying. Therefore went with a JSLint in a separate \"validate\" ant target since it gives us the flexibility to validate without having to minify.\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2008-03-19T13:36:39.000-0400",
      "body": "Ant build script has a 'validate' target which runs JSLint on all JS files found in the webapp/fluid-components/ directory.\n"
    }
  ]
}
---

        