---json
{
  "title": "FLOE-308",
  "summary": "Improve attachTooltip component to be able to take in the component container for attaching tooltip",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "Cindy Li",
  "reporter": "Cindy Li",
  "date": "2015-04-24T10:48:47.794-0400",
  "updated": "2015-04-24T11:24:50.408-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Cindy Li",
      "date": "2015-04-24T11:24:45.222-0400",
      "body": "According to the conversation with Antranig in the fluid-work channel - <https://botbot.me/freenode/fluid-work/2015-04-24/?tz=America/Havana>, from 11:00AM, using the empty string \"\" at the left hand side of \"tooltipContentMap\" can resolve the issue. No special handling is needed.\n"
    }
  ]
}
---
The current attachTooltip looks into the "selectors" block to find DOM elements to attach tooltips. At implementing the sticky key feature, the component container itself is the one that needs a tooltip. The attachTooltip component needs to be improved to handle that.

        