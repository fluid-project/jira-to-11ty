---json
{
  "title": "FLOE-106",
  "summary": "Inserted tables in the content do not have screen reader support.",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "reporter": "Alexey Novak",
  "date": "2012-11-01T10:04:37.047-0400",
  "updated": "2012-11-01T11:23:12.815-0400",
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
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLOE/FLOE-106/Screen Shot 2012-11-01 at 10.49.01 AM.png",
      "filename": "Screen Shot 2012-11-01 at 10.49.01 AM.png"
    }
  ],
  "comments": []
}
---
Each table inserted into OER Commons has too many links which could possibly make complicate overall user experience by tabbing through the content. Those controls do not announce anything useful to the users who use screen readers.\
Tables could be moved inside the OER content only using mouse but not the keyboard.\
There are no announcements for a cursor location inside of the table for a screen reader.\
There should be aria announcements whenever user adds or removes columns/rows using table controls.

In the attached screenshot for an extra 5x4 table there are extra 20 tab actions should be made in order to tab through the editable area.

        