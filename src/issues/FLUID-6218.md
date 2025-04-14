---json
{
  "title": "FLUID-6218",
  "summary": "Container does not scroll as the webpage zooms in, so that the container blocks bottom half of the content.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "reporter": "Yao Ding",
  "date": "2017-10-30T15:34:58.984-0400",
  "updated": "2024-07-24T12:46:06.608-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Prefs Framework",
    "UX: User Testing"
  ],
  "environment": "macOS Sierra (10.12.6)\\\nSafari Version 11.0 (12604.1.38.1.7)\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2017-11-02T12:54:10.213-0400",
      "body": "I can't reproduce this on Chrome on Windows\n"
    }
  ]
}
---
How the issue was found:

1. Open [https://ul.gpii.net](https://ul.gpii.net/)
2. Mouse click "+ show display preferences"
3. Zoom in with Safari keyboard shortcut - command + option + shift + =

Description of the issue:

1. All UI components in the "display preferences" container get enlarged but not the container.
2. The container only scrolls horizontally but not vertically, so the bottom half of the content gets blocked.
3. Close and re-open the container would re-size the container to fit size of the content.

        