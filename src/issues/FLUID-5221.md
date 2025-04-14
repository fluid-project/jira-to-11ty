---json
{
  "title": "FLUID-5221",
  "summary": "The table of content switch doesn't show \"on\" state in full page demos",
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
  "reporter": "Cindy Li",
  "date": "2013-11-22T09:41:23.012-0500",
  "updated": "2014-04-09T15:12:21.554-0400",
  "versions": [
    "1.4"
  ],
  "fixVersions": [
    "1.5"
  ],
  "components": [
    "Prefs Framework"
  ],
  "environment": "IE8\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2014-04-04T15:37:59.933-0400",
      "body": "Has a pull request: <https://github.com/fluid-project/infusion/pull/441>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-04-09T15:12:21.511-0400",
      "body": "Merged pull request ( <https://github.com/fluid-project/infusion/pull/441> ) into the project repo at ff275c0a685a23a155b9f3aae51b31f546404d7b\n"
    }
  ]
}
---
In any of these full page demos, with or without preview

<http://build.fluidproject.org/infusion/tests/manual-tests/html/prefsEditorFullWithPreviewSchema.html>\
<http://build.fluidproject.org/infusion/tests/manual-tests/html/prefsEditorFullNoPreviewSchema.html>\
<http://build.fluidproject.org/infusion/tests/manual-tests/html/prefsEditorFullWithPreview.html>\
<http://build.fluidproject.org/infusion/tests/manual-tests/html/prefsEditorFullNoPreview.html>

click on "table of content" to turn it on. The enactor reacts fine by applying table of content on the page, but the "table of content" checkbox still shows "off" state.

If icon fonts don't work in IE8, the "table of content" button should fall back to regular check box in IE8 such as what separated panel demo (<http://build.fluidproject.org/infusion/tests/manual-tests/html/prefsEditorSeparatedPanelSchema.html>) does in IE8.&#x20;

        