---json
{
  "title": "FLOE-101",
  "summary": "Write Step has many popups which do not have screen reader support",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "reporter": "Alexey Novak",
  "date": "2012-11-01T09:08:52.925-0400",
  "updated": "2012-11-01T11:20:02.147-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Authoring Tool"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLOE/FLOE-101/Screen Shot 2012-11-01 at 9.08.17 AM.png",
      "filename": "Screen Shot 2012-11-01 at 9.08.17 AM.png"
    },
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLOE/FLOE-101/Screen Shot 2012-11-01 at 9.08.25 AM.png",
      "filename": "Screen Shot 2012-11-01 at 9.08.25 AM.png"
    }
  ],
  "comments": []
}
---
There are couple of popups in Write Step in Open Author (e.g. Link button, Insert Media button, ...)\
There are no announcements to the user when such popup appear on the screen. Hence user has no idea if buttons worked or not and if dialogs are present on the screen or not.\
Moreover, those popups do not get the focus right away and hence it is very hard to get the focus inside and navigate through the dialog controls.\
Finally, those popups do not work well with Learner Options (some of the examples are included as screenshots)

related Assembla ticket <https://www.assembla.com/spaces/iskme/tickets/792>

        