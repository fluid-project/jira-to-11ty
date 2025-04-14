---json
{
  "title": "SJRK-193",
  "summary": "Enable and disable Remove Block button based on selection state",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Open",
  "reporter": "Gregor Moss",
  "date": "2019-01-22T13:33:50.367-0500",
  "updated": "2019-04-01T14:25:52.377-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool UI"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/SJRK/SJRK-193/StorytellingTool_UpdatedUI_V6_SS_Page_2.jpg",
      "filename": "StorytellingTool_UpdatedUI_V6_SS_Page_2.jpg"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/SJRK/SJRK-193/StorytellingTool_UpdatedUI_V6_SS_Page_3.jpg",
      "filename": "StorytellingTool_UpdatedUI_V6_SS_Page_3.jpg"
    }
  ],
  "comments": [
    {
      "author": "Gregor Moss",
      "date": "2019-02-07T13:37:02.449-0500",
      "body": "Ran into an issue with gpii-binder and referred it to Tony, who has provided a dev release of the package until his PR is merged.\n\nIssue: <https://issues.gpii.net/browse/GPII-3699>\n\nDev release version: 1.0.5-dev.20190207T095932Z.9b324b8.GPII-3699\n"
    }
  ]
}
---
Adjust the UI so that the "Remove Block" button is only enabled when at least one block is selected, and is otherwise disabled.

This involves adding the imagery for the new disabled state of the button.

        