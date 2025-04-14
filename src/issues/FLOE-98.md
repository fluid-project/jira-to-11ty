---json
{
  "title": "FLOE-98",
  "summary": "Text selection is lost when user tabs backwards through TOC",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Alexey Novak",
  "reporter": "Alexey Novak",
  "date": "2012-10-31T16:41:54.536-0400",
  "updated": "2014-03-03T12:37:16.493-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Authoring Tool"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Alexey Novak",
      "date": "2012-11-28T11:07:19.145-0500",
      "body": "This problem is addressed in <http://issues.fluidproject.org/browse/FLOE-97>\\\nUsers now can use keyboard shortcuts or quick focus navigation shortcuts in order to execute write toolbar function for the selected text.\n"
    }
  ]
}
---
User loses text selection in the content area when tabs backwards. Headings/subheadings are converted into editable inputs whenever they get a focus and therefore they remove text selection in the editable area.\
Also since not every button has a key shortcut and there are no landmarks in Write Step users might want to tab backwards to use write toolbar buttons

        