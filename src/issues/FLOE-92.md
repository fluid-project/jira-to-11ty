---json
{
  "title": "FLOE-92",
  "summary": "Add co-author dialog lacks good screen reader support, keyboard accessibility and UIO support",
  "tags": "FLOE",
  "project": {
    "key": "FLOE",
    "title": "Floe"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Open",
  "reporter": "Alexey Novak",
  "date": "2012-10-31T12:49:32.538-0400",
  "updated": "2012-11-01T10:21:48.016-0400",
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
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLOE/FLOE-92/Screen Shot 2012-10-31 at 12.50.56 PM.png",
      "filename": "Screen Shot 2012-10-31 at 12.50.56 PM.png"
    }
  ],
  "comments": []
}
---
Add co-author dialog generates lots of dynamic changes to its UI without any aria announcements or screen reader support to notify a user that something is changed. Hence users with screen readers have no idea if this dialog works at all.\
(e.g. Searching process, Results found, Results changed)\
Screen reader does not announce enough information about the results When user tabs through the search results(If entry is Student, Teacher, Homeschool Instructor, etc)

There should be a better keyboard user experience while navigating through the search pages.\
Dialog stays on the screen even when user navigates away from it.

This dialog does not work well with Learner Options (text size, high contrast themes, etc)

        