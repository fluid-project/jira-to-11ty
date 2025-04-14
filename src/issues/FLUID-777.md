---json
{
  "title": "FLUID-777",
  "summary": "Multi Inline Editors: clicking multiple times in one of the editors causes focus to be applied to another editor",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Michelle D'Souza",
  "reporter": "Michelle D'Souza",
  "date": "2008-06-16T15:30:39.000-0400",
  "updated": "2008-06-23T17:42:48.000-0400",
  "versions": [
    "0.4"
  ],
  "fixVersions": [
    "0.4"
  ],
  "components": [
    "Inline Edit"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2008-06-17T08:53:35.000-0400",
      "body": "I tried to write an automated test to show this bug, however, QUnit is interfering with normal browser focus and I can't reproduce it.&#x20;\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2008-06-17T09:31:43.000-0400",
      "body": "The click handler on the body was causing focus to be put on a different Inline Edit component when the user clicked inside an edit field.&#x20;\n"
    }
  ]
}
---
To recreate this issue, look at an inline edit example with multiple inline editors on the page such as: <http://build.fluidproject.org/fluid/sample-code/inline-edit/announcements/announcements.html>

Click on the first Inline Edit. Click in the text box. You will see that a different Inline Edit component has browser focus. Pressing enter right now will put the other Inline Edit into edit mode.&#x20;

        