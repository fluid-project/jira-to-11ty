---json
{
  "title": "FLUID-6782",
  "summary": "Picking a contrast other than default will change the background of the separate panel to white before the styling should be applied",
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
  "date": "2024-10-07T09:17:28.137-0400",
  "updated": "2025-01-15T10:52:57.818-0500",
  "versions": [
    "4.7.1"
  ],
  "fixVersions": [
    "4.8.0"
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
      "date": "2024-10-31T06:37:03.525-0400",
      "body": "At the dev meeting yesterday we discussed if the contrast.scss file is still needed. It’s the drop in styling for the contrast theme that includes all the `!important` declarations. However, as discussed it is still useful as an easier integration, and or start to using UIO.&#x20;\n\n@@Simon Bates also suggested to improve the documentation to   mention an additional intermediate approach of an integrator creating their own similar override style sheet instead, to reduce the amount of of overrides they may have to deal with . This would be for the case where an integrator may not have access to fully use the css custom properties from the contrast base file but also doesn’t want/need all the overrides from the contrast file. (i.e. using a platform to build there site and don’t have knowledge of or access to all the styles but can add additional css files.)\n"
    },
    {
      "author": "Justin Obara",
      "date": "2024-12-05T07:32:32.992-0500",
      "body": "[PR #1110](https://github.com/fluid-project/infusion/pull/1110) merged into the project repo at [9dfe6ec](https://github.com/fluid-project/infusion/commit/9dfe6eccbb6026d101eb4b62d49e3ec4dcd80d92).\n"
    }
  ]
}
---
Steps to reproduce:

* Open the UIO demo
* Open UIO panel
* Select a contrast theme other than default
* Notice that the background of the UIO immediately changes to white
* Select the default theme
* Notice that the background goes back to the way it should be

The background of UIO should not change until it has been closed and re-opened.&#x20;

        