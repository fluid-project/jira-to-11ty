---json
{
  "title": "FLUID-5815",
  "summary": "Improve use of \"global fluid\" in source files",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Anastasia Cheetham",
  "date": "2015-11-11T09:25:57.667-0500",
  "updated": "2022-01-31T10:22:53.678-0500",
  "versions": [],
  "fixVersions": [
    "3.0"
  ],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2022-01-31T10:22:53.658-0500",
      "body": "This was removed during the move to eslint\n"
    }
  ]
}
---
In several (but not all) source files, we have the comment\
/\* global fluid \*/

If this is actually necessary, perhaps we could add "fluid" to the globals inside the .jshintrc file instead. If it's not necessary, we could remove it.

        