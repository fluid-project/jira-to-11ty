---json
{
  "title": "FLOE-89",
  "summary": "User Menu dropdown in OA does not explain itself for screen readers and has confusing interactions",
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
  "date": "2012-10-31T12:26:14.834-0400",
  "updated": "2014-03-03T12:39:22.460-0500",
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
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLOE/FLOE-89/Screen Shot 2012-11-01 at 10.08.43 AM.png",
      "filename": "Screen Shot 2012-11-01 at 10.08.43 AM.png"
    }
  ],
  "comments": []
}
---
In Open Author there is no way to know that you can open a User Menu by pressing Space or Tab. There is not enough information for users what this menu for if they open it.\
The menu does not support standard keyboard interactions since it behaves as a select.\
Menu does not hide when user navigates away from it.\
There should be a landmark and (possibly) a key shortcut for user to quickly access this menu

Related open ticket in Assembla <https://www.assembla.com/spaces/iskme/tickets/887#/activity/ticket:>

        