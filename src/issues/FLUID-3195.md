---json
{
  "title": "FLUID-3195",
  "summary": "Turn off debug mode",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "joan garcia",
  "reporter": "Justin Obara",
  "date": "2009-09-22T09:37:45.000-0400",
  "updated": "2011-01-13T16:54:19.961-0500",
  "versions": [],
  "fixVersions": [
    "1.1.2"
  ],
  "components": [
    "Release"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-09-22T09:40:54.000-0400",
      "body": "Bug Parade Infusion 1.1.2&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-10-05T18:26:42.000-0400",
      "body": "commented out message.fail(). There didn't appear to be any instances of debug mode being used by the renderer.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2009-10-05T18:48:02.000-0400",
      "body": "I've reviewed Justin's commit, tested it, and compared it with similar changes for past releases. It looks good.\n"
    },
    {
      "author": "Jacob Farber",
      "date": "2009-10-06T14:27:59.000-0400",
      "body": "Reviewed by Colin\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-01-13T16:50:10.062-0500",
      "body": "Reopening these issues in order to change the component to Release.&#x20;\n"
    }
  ]
}
---
Update fluid.fail() to throw an error, turn off debug mode for the renderer, etc.&#x20;

        