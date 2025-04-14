---json
{
  "title": "FLUID-3078",
  "summary": "move checkAll and uncheckAll functionality from builder.js to customBuild component",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Laurel Williams",
  "reporter": "Laurel Williams",
  "date": "2009-08-07T09:52:30.000-0400",
  "updated": "2009-10-22T16:24:19.000-0400",
  "versions": [],
  "fixVersions": [
    "1.2"
  ],
  "components": [
    "Infusion Builder"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Laurel Williams",
      "date": "2009-08-07T09:55:58.000-0400",
      "body": "Currently the checkall and uncheckall functionality is held in builder.js - a file which represents the code that the component user would create to add customBuild to a web page. This functionality is likely to be wanted, so move it into the component.\n\nAfter discussing this with JO and AC - we decided:\\\n1\\) to move checkAll and unCheckAll into the default selectors\\\n2\\) to add some setup code which checks the html code for existence of these selectors. If the selectors exist then click handlers are added to the html elements bearing these selectors so that when clicked the modules are all checked, or all unchecked.\n"
    },
    {
      "author": "Laurel Williams",
      "date": "2009-08-07T10:40:59.000-0400",
      "body": "Moved these elements over and refactored the code in response. Also required changes to the test code to accommodate the new functionality in the component. TODO still - add some tests for when the checkall and uncheckall buttons do not exist  in the interface.\n"
    },
    {
      "author": "Laurel Williams",
      "date": "2009-08-28T13:16:06.000-0400",
      "body": "Actually, my last TODO doesn't make sense. If the checkall and uncheckall buttons do not exist, then the click handlers are not added. There is no way to test that this doesn't happen because there is no \"error\" state if this occurs. Other tests already in place to ensure that click handler is added appropriately and performs the expected task. So this task is completed.\n"
    }
  ]
}
---

        