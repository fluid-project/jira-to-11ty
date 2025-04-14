---json
{
  "title": "FLUID-1808",
  "summary": "Undo support for UIOptions",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Michelle D'Souza",
  "reporter": "Michelle D'Souza",
  "date": "2008-11-14T15:59:51.000-0500",
  "updated": "2011-02-22T16:27:44.206-0500",
  "versions": [],
  "fixVersions": [
    "0.6"
  ],
  "components": [
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2008-11-25T13:53:27.000-0500",
      "body": "There is a branch with Undo implemented in UIOptions. Whether or not this makes sense from a design standpoint is still debatable. The changes to UIOptions should be merged with trunk and a manual test should be created.&#x20;\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2008-11-25T15:13:47.000-0500",
      "body": "dev-iteration47\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2008-11-27T16:05:04.000-0500",
      "body": "UI Options now technically supports Undo however Undo is not recommended for use because of user experience issues. Currently, the undo will undo the last setting which in the case of UI Options is unlikely to be what the user wants. Probably with UI Options we'll want a batch undo operation. Also, the visual design of Undo in UI Options has not been explored.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-02-22T16:27:44.205-0500",
      "body": "Closing issues that were resolved for 1.0 and earlier releases.&#x20;\n"
    }
  ]
}
---

        