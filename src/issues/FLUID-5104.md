---json
{
  "title": "FLUID-5104",
  "summary": "Reset on the Full UIO with Preview demo modifies the entire page instead of just the preview pane. ",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Cindy Li",
  "reporter": "Michelle D'Souza",
  "date": "2013-07-26T15:42:27.481-0400",
  "updated": "2013-08-13T13:28:48.046-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2013-08-13T13:28:48.040-0400",
      "body": "Merged into project repo at 7af4641\n"
    }
  ]
}
---
Selecting reset on the full UIO with preview should reset only the preview pane. If the user wants to have the entire page reset, they would then select the "save and apply".&#x20;

<http://build.fluidproject.org/infusion/tests/manual-tests/html/uiOptionsFullWithPreview.html>

Steps to reproduce:\
1\. Make a change to the default settings and save them. \
2\. Press 'Reset'.\
Notice that the entire page has the default settings applied.\
3\. Reload the page.\
Notice that the page now has the settings you set in step 1.&#x20;

        