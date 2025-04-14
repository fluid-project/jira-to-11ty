---json
{
  "title": "FLUID-467",
  "summary": "Tab only selects first portlet on test page",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Anastasia Cheetham",
  "reporter": "Herb Wideman",
  "date": "2008-04-07T15:59:34.000-0400",
  "updated": "2008-11-13T13:28:48.000-0500",
  "versions": [
    "0.3"
  ],
  "fixVersions": [
    "0.3"
  ],
  "components": [
    "Reorderer"
  ],
  "environment": "Win XP, IE 7\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2008-04-08T09:59:41.000-0400",
      "body": "The documentation has been updated to better indicate that the tab key is used to move focus to the collection of reorderable elements, but the arrow keys (or i/k/m/j) are used to select other reorderable elements.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2008-04-08T10:34:32.000-0400",
      "body": "The wiki holding the test protocol is temporarily unable to save, so I'm reopening this until I can finish making the fix to the documentation.\n"
    }
  ]
}
---
Keyboard operation test protocol specifies ability to tab to any element in the portlets box\
<http://build.fluidproject.org/sakai-imagegallery-tool/sample-code/reorderer/abstract/portal/portlets.html>\
but in fact tab only selects the first portlet in the box - further selection of another portlet requires use of arrow keys

        