---json
{
  "title": "FLUID-485",
  "summary": "erratic behaviour of dragged sortable tabs with Firefox 2",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Herb Wideman",
  "date": "2008-04-10T14:43:34.000-0400",
  "updated": "2008-04-21T12:46:47.000-0400",
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
      "date": "2008-04-21T12:46:47.000-0400",
      "body": "This is a styling issue that arose in a test file that isn't well styled. This file is being moved out of the distribution.\n"
    }
  ]
}
---
Dragging tabs in FF2 on\
<http://build.fluidproject.org/sakai-imagegallery-tool/sample-code/reorderer/concrete/unordered-list-tabs/unordered-list-tabs.html#>\
does not work properly; some of the tabs move above the base row when tabs are dragged, making it next to impossible to determine where a tab will be droppped, and dropping behaviour is erratic. Tabs sometimes go where the red drop bar indicates and other times do not.

        