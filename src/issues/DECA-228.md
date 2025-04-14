---json
{
  "title": "DECA-228",
  "summary": "Clean up filenames to match heads-down camel case in Decapod",
  "tags": "DECA",
  "project": {
    "key": "DECA",
    "title": "Decapod"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Jonathan Hung",
  "date": "2012-01-27T13:43:35.635-0500",
  "updated": "2012-05-18T14:27:54.230-0400",
  "versions": [],
  "fixVersions": [
    "0.5"
  ],
  "components": [
    "Infrastructure"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2012-05-07T13:36:23.723-0400",
      "body": "There were only a couple of files needing changes after removing the old code from 0.5. These last few changes are in my bitbucket repo <https://bitbucket.org/jobara/decapod-ui-iteration3>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2012-05-18T14:27:48.348-0400",
      "body": "Merged into the project repo\n"
    }
  ]
}
---
Decapod will be using a heads-down filename convention for all Decapod generated files and directories.

Task is to clean up any filenames that may not match this convention.

        