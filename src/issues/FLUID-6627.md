---json
{
  "title": "FLUID-6627",
  "summary": "Remove UrlUtilities.js from the prefs framework",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2021-06-08T05:36:14.663-0400",
  "updated": "2021-06-08T08:38:26.846-0400",
  "versions": [
    "2.0"
  ],
  "fixVersions": [
    "3.0"
  ],
  "components": [
    "Prefs Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2021-06-08T08:32:45.150-0400",
      "body": "Merged PR ( <https://github.com/fluid-project/infusion/pull/1051> ) into the project repo at 67608bf0830445459732909f94a602c16b6603fd\n"
    }
  ]
}
---
The contents of UrlUtilities.js seem not to have been used for about 10 years and in any case have been redundant for about half that time as a result of the standardisation of the <https://url.spec.whatwg.org/> API - we should take the opportunity before release to clean up our image by deleting it

        