---json
{
  "title": "FLUID-3927",
  "summary": "Items per page displayed is incorrect after it's changed and browser is refreshed in IE7 and 8",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Jen Chow",
  "date": "2010-12-16T14:31:22.674-0500",
  "updated": "2014-06-25T15:58:45.750-0400",
  "versions": [
    "1.3"
  ],
  "fixVersions": [],
  "components": [
    "Pager"
  ],
  "environment": "Win XP IE7 and 8\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Michelle D'Souza",
      "date": "2010-12-23T15:42:44.883-0500",
      "body": "Please check if this is done and either close it or put it into another release.\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2014-06-25T15:58:45.749-0400",
      "body": "We no longer actively support IE6, IE7 and IE8. We will consider patches for certain issues.\n"
    }
  ]
}
---
When changing items per page to 20 or 50 and then refreshing, the number of items displayed reverts to 10, but the drop-down menu value for items per page doesn't revert to 10. If for example 20 is chosen, the browser is refreshed, the items per page menu shows 20, but the actual number of items is 10. If the drop down is opened and 20 is reselected, there is also no change to the number of items displayed.

        