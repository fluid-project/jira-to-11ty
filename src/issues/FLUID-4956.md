---json
{
  "title": "FLUID-4956",
  "summary": "Vertical scroll bar appears in UIO Fat Panel in Webkit browsers",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Jonathan Hung",
  "date": "2013-03-28T06:59:42.729-0400",
  "updated": "2013-04-29T09:18:10.810-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "UI Options"
  ],
  "environment": "Chrome, Safari\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-4938/",
      "key": "FLUID-4938"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2013-04-01T10:44:39.429-0400",
      "body": "This was being caused by Apple's system preferences of showing scrollbars always.\\\nTo fix, go to:\\\n1\\. System preferences > General > Show scroll bars\\\n2\\. Set to \"When Scroll\" or \"Automatic\"\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2013-04-01T17:00:33.699-0400",
      "body": "Reopening this issue because it appears to be an issue on Chrome Windows.\n"
    }
  ]
}
---
In Webkit browsers, a vertical scrollbar appears in the Fat Panel UIO. This should be removed.

        