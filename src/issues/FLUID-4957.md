---json
{
  "title": "FLUID-4957",
  "summary": "Reset and Show-Hide tabs missing rounded corners and icons",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jonathan Hung",
  "reporter": "Jonathan Hung",
  "date": "2013-03-28T07:04:27.994-0400",
  "updated": "2013-04-29T09:11:39.327-0400",
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
      "date": "2013-03-28T07:20:33.675-0400",
      "body": "Instructions on updating font sets can be found in the comments section of <https://fluidproject.atlassian.net/browse/FLUID-4949#icft=FLUID-4949>: <http://issues.fluidproject.org/browse/FLUID-4949?focusedCommentId=23508&page=com.atlassian.jira.plugin.system.issuetabpanels:comment-tabpanel#comment-23508>\n"
    }
  ]
}
---
The reset and show/hide bar does not match the wireframe. Specifically the following should be implemented to make it match:

1\. The bottom-left corner of reset should be rounded.\
2\. The bottom-right corner of the show-hide should be rounded.\
3\. Icon fonts need to be generated for Reset and added. (see <https://fluidproject.atlassian.net/browse/FLUID-4949#icft=FLUID-4949> for current font set and instructions on updating fonts in markup)\
4\. Javascript needs to be updated so that Icon Font related styles do not get stripped out and are added back in.

        