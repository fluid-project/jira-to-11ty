---json
{
  "title": "FLOE-214",
  "summary": "Implement focus and hover styles for feedback buttons",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Task",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Anastasia Cheetham",
  "date": "2014-08-14T09:35:36.998-0400",
  "updated": "2014-08-14T09:56:29.153-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Feedback Tool"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2014-08-14T09:56:29.098-0400",
      "body": "This work is being done as part of the tooltip work, <https://fluidproject.atlassian.net/browse/FLOE-207#icft=FLOE-207> (and possibly others)\n"
    }
  ]
}
---
We should implement the hover and keyboard focus styles for the icons in the tool bar. Right now, they have none, and it makes the tool seem very lifeless.

The wireframe for the feedback tool (page 12)\
<http://wiki.fluidproject.org/download/attachments/37855787/metadata-feedback.pdf>\
show the hover styles (yellow strip above icon) and keyboard focus styles (yellow background) for all the icons.

The tooltips should appear on both hover and keyboard focus.

        