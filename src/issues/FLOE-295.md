---json
{
  "title": "FLOE-295",
  "summary": "Text size changes should only adjust the text size, and keep controls and layout sizes unchanged",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Duplicate",
  "assignee": "Cindy Li",
  "reporter": "Cindy Li",
  "date": "2015-03-30T14:30:59.039-0400",
  "updated": "2015-11-12T14:46:08.330-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "First Discovery"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLOE-320/",
      "key": "FLOE-320"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Cindy Li",
      "date": "2015-11-12T14:46:08.327-0500",
      "body": "This report has been copied to the GPII bug tracker: <https://issues.gpii.net/browse/GPII-1373> and all activities should be carried on there.\n"
    }
  ]
}
---
The text size adjuster should only affect the text and not all of the the controls and layout (i.e. it should not scale the entire interface).

Wireframes showing screen when text is small:\
<https://wiki.fluidproject.org/download/attachments/40797428/First%20Discovery%20January%2021%2015%20text%20size.jpg>

This will change if preview is implemented:\
<https://wiki.fluidproject.org/download/attachments/40797428/First%20Discovery%20preview.pdf>

        