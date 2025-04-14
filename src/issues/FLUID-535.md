---json
{
  "title": "FLUID-535",
  "summary": "jQuery UI Tabs example does not work in IE",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jonathan Hung",
  "reporter": "Jonathan Hung",
  "date": "2008-04-25T11:35:42.000-0400",
  "updated": "2008-06-23T17:58:39.000-0400",
  "versions": [],
  "fixVersions": [
    "0.3"
  ],
  "components": [
    "Keyboard Accessibility"
  ],
  "environment": "WinXP IE7\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2008-04-28T13:19:13.000-0400",
      "body": "This is a styling issue - there is no style applied when a tab gets focus.&#x20;\n"
    }
  ]
}
---
In IE7, keyboard navigation does not work in the jQuery UI Tabs example. Tabs don't get focus and cursor keys don't work.

        