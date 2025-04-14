---json
{
  "title": "FLUID-2728",
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
  "assignee": "Anastasia Cheetham",
  "reporter": "Justin Obara",
  "date": "2009-05-14T10:26:19.000-0400",
  "updated": "2011-01-13T16:54:19.038-0500",
  "versions": [],
  "fixVersions": [
    "1.1"
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
      "date": "2009-05-14T10:26:30.000-0400",
      "body": "Bug Parade 1.1 release&#x20;\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2009-05-25T13:06:08.000-0400",
      "body": "Currently, the only use of debugMode=true for the Renderer is in a manual test file, which should be left as it.\n\nRegarding fluid.fail(): <https://fluidproject.atlassian.net/browse/FLUID-1404#icft=FLUID-1404> says:\\\n\"...change it to a throw() for the release only, then change it back so we can debug easily...\"\\\nThe code in SVN right now actually already has the call to message.fail() commented out, and an error is thrown. It looks like we made this change for the last release, and never changed it back.\n\nSo nothing actually needs to be done for this JIRA.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2009-05-25T13:07:11.000-0400",
      "body": "Already done - see earlier comment.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-01-13T16:50:10.587-0500",
      "body": "Reopening these issues in order to change the component to Release.&#x20;\n"
    }
  ]
}
---
Update fluid.fail() to throw an error, turn off debug mode for the renderer, etc.&#x20;

        