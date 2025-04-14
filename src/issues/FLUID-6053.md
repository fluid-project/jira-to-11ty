---json
{
  "title": "FLUID-6053",
  "summary": "Enlarging inputs causes layout issues for Native textfield sliders",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Alan Harnum",
  "reporter": "Justin Obara",
  "date": "2016-11-09T09:31:32.711-0500",
  "updated": "2016-11-09T16:17:25.986-0500",
  "versions": [],
  "fixVersions": [
    "2.0"
  ],
  "components": [
    "Prefs Framework",
    "Textfield Slider",
    "UI Options"
  ],
  "environment": "Safari 10 (macOS 10.12)\\\nChrome 54 (Win 10)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-6053/screenshot.png",
      "filename": "screenshot.png"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2016-11-09T09:32:14.069-0500",
      "body": "screenshot.png shows the textfield wrapping to a new line, for the \"line spacing\" textfield slider.\n"
    },
    {
      "author": "Alan Harnum",
      "date": "2016-11-09T10:50:38.434-0500",
      "body": "Quick note that this problem does not occur if \"Adjust Text Size\" is also between 1.8 & 2.0\n"
    },
    {
      "author": "Alan Harnum",
      "date": "2016-11-09T11:59:11.384-0500",
      "body": "PR: <https://github.com/fluid-project/infusion/pull/782>\n\nIt was found in exploring this issue that this problem doesn't manifest with the jQuery UI slider because that slider doesn't respect the \"enlarge inputs\" option at all; this has been added to an existing JIRA at <https://issues.fluidproject.org/browse/FLUID-4606>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2016-11-09T16:17:08.257-0500",
      "body": "Merged PR ( <https://github.com/fluid-project/infusion/pull/782> ) into the project repo at 8fbd9a1ef3ee94b2dea8d9384348ac92b5a103d0\n"
    }
  ]
}
---
Steps to reproduce:

1\. Open the UI Options demo\
2\. Open the Preferences Editor\
3\. Under "emphasis" select "Enlarge buttons, menus, text-field, and other inputs"\
4\. Close and re-open the Preferences Editor so that the changes are applied to it

Notice that the layout for "text size" and "line space" are both off, as the textfield wraps to a new line.

        