---json
{
  "title": "FLUID-2776",
  "summary": "The slider should be automatically updated after a reasonable delay.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Michelle D'Souza",
  "date": "2009-05-26T15:32:07.000-0400",
  "updated": "2024-07-22T12:34:49.322-0400",
  "versions": [
    "1.1",
    "1.1.1",
    "1.1.2",
    "1.2",
    "1.3",
    "1.4",
    "1.5"
  ],
  "fixVersions": [],
  "components": [
    "Textfield Slider"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2024-07-22T12:34:49.156-0400",
      "body": "It seems more predictable if the update takes effect after a user action. It’s hard to know what a reasonable amount of time would be for all users.\n"
    }
  ]
}
---
When a user is typing into the textfield of a TextfieldSlider and pauses for a 'reasonable' amount of time, the slider should be updated. See this conversation in the IRC room: \
<http://wiki.fluidproject.org/display/fluid/fluid-work+IRC+Logs-2009-05-26>

        