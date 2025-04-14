---json
{
  "title": "FLUID-6688",
  "summary": "In mobile presentations, the text in the prefs editor tab is very small",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2021-10-20T08:54:01.763-0400",
  "updated": "2024-07-22T10:35:20.724-0400",
  "versions": [
    "3.0"
  ],
  "fixVersions": [
    "4.0"
  ],
  "components": [
    "Prefs Framework",
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-6688/prefs_editor_mobile.PNG",
      "filename": "prefs_editor_mobile.PNG"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2021-10-20T08:54:41.715-0400",
      "body": "prefs\\_editor\\_mobile.PNG shows the small \"Show Preferences\" text in the upper left hand corner of the page.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2021-10-20T11:41:52.689-0400",
      "body": "Will address in the <https://fluidproject.atlassian.net/browse/FLUID-6605#icft=FLUID-6605> PR <https://github.com/fluid-project/infusion/pull/1060>\n"
    }
  ]
}
---
Steps to reproduce:

1. Open the [UI Options demo](https://build-infusion.fluidproject.org/demos/uioptions/) in a narrow screen or mobile device
2. Notice that the text, "Show Preferences", on the UI Options tab is very small.

        