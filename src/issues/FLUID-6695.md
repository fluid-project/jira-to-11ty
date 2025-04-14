---json
{
  "title": "FLUID-6695",
  "summary": "Rationalise exception stripping code",
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
  "date": "2021-10-27T11:35:42.586-0400",
  "updated": "2021-10-27T16:30:55.507-0400",
  "versions": [
    "3.0"
  ],
  "fixVersions": [
    "4.0"
  ],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2021-10-27T16:30:55.503-0400",
      "body": "Merged PR ( <https://github.com/fluid-project/infusion/pull/1063> ) into the project repo at 8b958bf3c8f645a70692083b8c8541bf28fae1b0\n"
    }
  ]
}
---
Our exception decoding code in FluidDebugging.js is more than 10 years old and includes branches for numerous defunct browsers - in addition to, as with FLUID-6482, not coping with modern browsers like Safari - we should take the opportunity to strip it back, as well as not actually throwing the exception which is not necessary any more, and is a debugging hazard

        