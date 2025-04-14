---json
{
  "title": "FLUID-1406",
  "summary": "Improve jQuery UI Dialog accessibility",
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
  "reporter": "Michelle D'Souza",
  "date": "2008-09-02T14:10:40.000-0400",
  "updated": "2011-01-30T11:58:18.938-0500",
  "versions": [],
  "fixVersions": [
    "0.6"
  ],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2008-09-16T13:23:41.000-0400",
      "body": "dev-iteration43\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2008-09-19T16:02:23.000-0400",
      "body": "David and I have been talking with Scott Gonzalez about the fix. Scott has added the required id on the title that we need for full ARIA on a dialog. David and I have a patch that we are working on and we'll likely commit on Monday that adds a reworked version of Chris Hoffman's jARIA to jQuery UI core.&#x20;\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2008-09-22T12:36:49.000-0400",
      "body": "David and I committed our patch to jQuery ui.core and ui.dialog. We tested in Jaws and the correct title and role now get read for the dialog.&#x20;\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2008-09-30T08:48:02.000-0400",
      "body": "We need to move to the trunk version of dialog for Uploader 2 in order to get the accessible dialog.&#x20;\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2009-01-05T11:06:02.000-0500",
      "body": "We don't need to do anything for the Uploader because the jQuery UI dialog is no longer hard baked into the component.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-01-30T11:56:38.027-0500",
      "body": "Reopening these issues to add the frameworkcomponent\n"
    }
  ]
}
---
dev-iteration42

        