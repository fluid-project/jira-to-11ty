---json
{
  "title": "FLUID-488",
  "summary": "Scheduler elements cannot be dragged and dropped in FF2",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Herb Wideman",
  "date": "2008-04-10T15:08:46.000-0400",
  "updated": "2008-04-21T12:40:16.000-0400",
  "versions": [
    "0.3"
  ],
  "fixVersions": [
    "0.3"
  ],
  "components": [
    "Reorderer"
  ],
  "environment": "Win XP, FF2\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2008-04-21T12:40:16.000-0400",
      "body": "This is a styling issue: there is no visible drop indicator, so it's hard to tell when you are successfully over a drop target and when you're not.\n\nThis example is being moved out into the sandbox, so we won't be fixing it.\n"
    }
  ]
}
---
List elements on the scheduler test page\
<http://build.fluidproject.org/sakai-imagegallery-tool/sample-code/reorderer/concrete/scheduler/scheduler.html>\
cannot be reordered via drag and drop using FF2. On drop, item simply returns to its original location, despite other elements of the move being supported (ie opening up of space for the moved item as you drag it). (Note: crtl-arrow movements do work.)

Addendum: this also holds true for the nested scheduler test page:\
<http://build.fluidproject.org/sakai-imagegallery-tool/sample-code/reorderer/concrete/scheduler/RSFStyleScheduler.html>

        