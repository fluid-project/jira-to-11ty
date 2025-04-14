---json
{
  "title": "SJRK-430",
  "summary": "Update SVG Icons usage to support theming by UIO",
  "tags": "SJRK",
  "project": {
    "key": "SJRK",
    "title": "Social Justice Repair Kit"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Open",
  "reporter": "Justin Obara",
  "date": "2020-11-25T14:42:07.855-0500",
  "updated": "2020-11-25T14:42:07.855-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Storytelling Tool UI"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
Currently a separate SVG image is used for each UIO contrast theme. Rather we should style the SVGs with CSS so that we only need one version of each SVG icon. 

In particular explore `<use>` as a means of importing the SVG icon while retaining the ability to style with CSS. 

This may require some modifications to the SVG file to enable access to the colours applied to it.

See: <https://wiki.fluidproject.org/display/fluid/Research+SVG+Icons>

        