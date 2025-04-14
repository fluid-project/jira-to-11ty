---json
{
  "title": "FLUID-6781",
  "summary": "404 error for sourcing open-sans font in SeparatedPanelPrefsEditor styles.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2024-07-30T09:56:46.145-0400",
  "updated": "2024-07-30T11:23:48.262-0400",
  "versions": [
    "4.7"
  ],
  "fixVersions": [
    "4.7.1"
  ],
  "components": [
    "Prefs Framework",
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2024-07-30T11:23:48.262-0400",
      "body": "Merged [PR 1107](https://github.com/fluid-project/infusion/pull/1107)\n"
    }
  ]
}
---
The path to the open-sans font in src/framework/preferences/css/sass/SeparatedPanelPrefsEditor.scss is pointing at the old lib location that was updated in the 4.7.0 release. This spot was missed during the changes.

        