---json
{
  "title": "FLUID-2537",
  "summary": "Building a module with no javascript files causes an error",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-issue",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Michelle D'Souza",
  "reporter": "Michelle D'Souza",
  "date": "2009-04-06T12:30:08.000-0400",
  "updated": "2011-02-22T16:27:51.374-0500",
  "versions": [],
  "fixVersions": [
    "1.0"
  ],
  "components": [
    "Infrastructure"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2009-04-07T11:09:45.000-0400",
      "body": "During the war creation we were trying to copy files from a directory that didn't exist. I changed the format of the ant task to only copy the files if they are there.&#x20;\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-02-22T16:27:51.373-0500",
      "body": "Closing issues that were resolved for 1.0 and earlier releases.&#x20;\n"
    }
  ]
}
---
You can see this error by trying to build 'fss'.&#x20;

        