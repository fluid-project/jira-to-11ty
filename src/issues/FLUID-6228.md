---json
{
  "title": "FLUID-6228",
  "summary": "tab focusing the contrast adjuster does not scroll it into view.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Justin Obara",
  "date": "2017-11-21T13:23:49.900-0500",
  "updated": "2017-11-22T10:29:04.590-0500",
  "versions": [
    "2.0"
  ],
  "fixVersions": [
    "3.0"
  ],
  "components": [
    "Prefs Framework",
    "UI Options"
  ],
  "environment": "Chrome 62 (macOS 10.13.1)\\\nFF 57 (macOS 10.13.1)\\\nIE 11 (Win 7)\\\nMS Edge 15 (Win 10)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Cindy Li",
      "date": "2017-11-21T16:27:56.514-0500",
      "body": "[The pull request](https://github.com/fluid-project/infusion/pull/861) has been merged into the project repo master branch at 9b4fde781cdac30b4eb89fce9f7f197fafd2c97a\n"
    }
  ]
}
---
When you tab focus the contrast panel, it is not automatically scrolled into view. This was initially found in the UIO+ browser extension and filed under <https://issues.gpii.net/browse/GPII-2725>

Steps to reproduce:

1. Open the [UIO demo](https://build.fluidproject.org/infusion/demos/uiOptions/)
2. Open the prefs editor
3. Using the keyboard tab through the adjusters to reach the contrast adjuster

Notice that the contrast adjuster gets focus, but it is not scrolled into view if it had been offscreen.

 

It seems that this is related to the backing radio button input being marked as position fixed (separated panel) or absolute (full page).

        