---json
{
  "title": "FLUID-3630",
  "summary": "jquery tabs example - drag avatar incorrectly styled",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Jonathan Hung",
  "date": "2010-04-12T15:37:41.000-0400",
  "updated": "2010-12-08T15:41:30.576-0500",
  "versions": [
    "1.2beta1"
  ],
  "fixVersions": [
    "1.3"
  ],
  "components": [
    "Reorderer"
  ],
  "environment": "Wndows XP, FF3.6\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2010-12-08T15:41:30.570-0500",
      "body": "This bug is no longer relevant because demo has been removed. See <https://fluidproject.atlassian.net/browse/FLUID-3731#icft=FLUID-3731>.\n"
    }
  ]
}
---
In the jquery tabs example, the drag avatar is incorrectly styled.

To reproduce:

* load the jquery tabs example. (<http://build.fluidproject.org/infusion/standalone-demos/reorderer/html/jquery-tabs.html>)
* click and focus the first tab.
* drag the tab: the "Welcome" avatar lacks a background and is hard to read.

This can be reproduced on any tab.

        