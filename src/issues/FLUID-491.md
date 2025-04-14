---json
{
  "title": "FLUID-491",
  "summary": "vertical blinking cursor in selected portlet in FF2",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Trivial",
  "status": "Closed",
  "resolution": "Fixed",
  "reporter": "Herb Wideman",
  "date": "2008-04-10T15:54:47.000-0400",
  "updated": "2008-04-28T16:17:45.000-0400",
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
      "author": "Justin Obara",
      "date": "2008-04-28T12:03:55.000-0400",
      "body": "I have confirmed this in FF2 for WinXP; however, it does not appear in FF2 for Mac OS 10.5\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2008-04-28T16:17:45.000-0400",
      "body": "This example file has been retired.\n"
    }
  ]
}
---
A vertical blinking cursor will appear in a portlet selected by tabbing followed by arrow keys on the test page (URL below). Cursor appears only with FF2 not  IE7, and serves no apparent function.\
<http://build.fluidproject.org/sakai-imagegallery-tool/sample-code/reorderer/abstract/portal/portlets.html>

        