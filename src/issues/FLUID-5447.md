---json
{
  "title": "FLUID-5447",
  "summary": "With prefs framework demo: the reset and hide buttons may be obscured by the page content",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "reporter": "Cindy Li",
  "date": "2014-06-13T16:08:17.770-0400",
  "updated": "2024-07-23T07:55:07.961-0400",
  "versions": [
    "1.5"
  ],
  "fixVersions": [],
  "components": [
    "Demos"
  ],
  "environment": "IE 8, 9, 10 & 11\\\nMS Edge 126 & FF 128 (macOS 14.5)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-5447/screenshot.png",
      "filename": "screenshot.png"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-5447/Screenshot 2024-07-23 at 7.54.50 AM.png",
      "filename": "Screenshot 2024-07-23 at 7.54.50 AM.png"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2015-06-16T12:02:59.410-0400",
      "body": "It's probably because the main content area floats over the hide/show tab.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-06-16T12:03:58.496-0400",
      "body": "screenshot.png shows the hide/show tab below the page content. Note that the reset button is visible, but the hide button is not.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2024-07-23T07:51:46.624-0400",
      "body": "In recent versions of this demo increasing the font size along with letter and word spacing will cause the buttons to wrap in their container and partially render below the page content.\n"
    }
  ]
}
---
1\. Open the prefs framework demo: <http://build.fluidproject.org/infusion/demos/prefsFramework/>

2\. Turn on these preferences: max out text size; max out line spacing; turn on "enlarge buttons, menus, text-fields, and other inputs"; turn on table of contents

3\. Note that the bottom line for the "reset" and "hide" buttons disappears.

The issue doesn't occur with UIOptions demo: <http://build.fluidproject.org/infusion/demos/uiOptions/>

        