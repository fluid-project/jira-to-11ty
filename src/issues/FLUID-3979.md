---json
{
  "title": "FLUID-3979",
  "summary": "Tiny MCE editor too wide in rich text demo",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "heidi valles",
  "date": "2010-12-20T16:51:16.347-0500",
  "updated": "2014-08-06T11:27:16.902-0400",
  "versions": [
    "1.3",
    "1.4"
  ],
  "fixVersions": [],
  "components": [
    "Inline Edit"
  ],
  "environment": "Win XP, IE8\\\nMac 10.5, FF3.6\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Harris Wong",
      "date": "2011-02-24T16:33:57.287-0500",
      "body": "As well for Chrome\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2014-08-06T11:27:16.883-0400",
      "body": "This still happens in that the editor window is a fixed width, and if the browser window is narrower than that, horizontal scrolling is required. However, a) we're no longer using the demo portal, so a very narrow \"window\" doesn't happen the way it used to, and b) this page has been relegated to a test page instead of a demo.\n"
    }
  ]
}
---
When the TinyMCE editor opens, it opens beyond the width of the demo window.

In IE, it changes width once you start editing. In firefox, it's wide as soon as it's opened.

        