---json
{
  "title": "FLUID-6740",
  "summary": "Document restrictions on containerRenderingView markup requiring to be single-rooted",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Open",
  "assignee": "Antranig Basman",
  "reporter": "Antranig Basman",
  "date": "2022-06-21T08:46:10.064-0400",
  "updated": "2022-06-21T08:46:10.064-0400",
  "versions": [
    "4.1"
  ],
  "fixVersions": [],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": []
}
---
@@Tony Atkins reports being surprised by the limitations in our rather primitive containerRenderingView which simply defers to jQuery to build its DOM. <https://matrix.to/#/!JcoHDrfLedPQdFhAXn:matrix.org/$H3F4fd29hxf7mplIcMVXuHifyV9yy0gj7PnDf0TE49U?via=matrix.org> - and then in this PR comment. <https://github.com/continuing-creativity/youme/pull/2/files#diff-0fc429a4adb45daae4cf6999778dea58e34ef3497388bb7a4ebcdd39a48e1513R30>

We should document this more clearly

        