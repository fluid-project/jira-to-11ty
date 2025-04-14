---json
{
  "title": "FLUID-4120",
  "summary": "Update the README to be used for the 1.4-SNAPSHOT ",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Michelle D'Souza",
  "reporter": "Justin Obara",
  "date": "2011-02-25T10:10:48.871-0500",
  "updated": "2011-05-17T13:18:11.760-0400",
  "versions": [],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "Release"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-4120/FLUID-4120.patch",
      "filename": "FLUID-4120.patch"
    }
  ],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2011-03-04T16:27:13.001-0500",
      "body": "<https://fluidproject.atlassian.net/browse/FLUID-4120#icft=FLUID-4120>.patch has updates to the release notes that specify the exact jquery UI widgets that we depend on and mentions that accordion was removed in 1.4\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2011-03-07T11:08:32.642-0500",
      "body": "These changes will be good for the 1.4 release notes, but I think they will need to be incorporated much closer to the actual release. For now, these are the release notes for 1.3.1.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2011-04-06T10:24:23.463-0400",
      "body": "Now that the release notes are in the main project repo and have been crafted to start describing the next release (1.4), we could probably incorporate your changes, Michelle\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2011-05-17T13:18:05.911-0400",
      "body": "I've applied Michelle's patch updating the Release Notes.\n"
    }
  ]
}
---
Since the README is so prevalent on github, we should make it meaningful for the snapshot versions, and not just the final release

        