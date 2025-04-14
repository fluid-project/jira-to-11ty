---json
{
  "title": "FLUID-465",
  "summary": "multiple dummy portlet drop location bars generated",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Duplicate",
  "reporter": "Herb Wideman",
  "date": "2008-04-07T15:44:58.000-0400",
  "updated": "2008-04-08T16:01:45.000-0400",
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
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-407/",
      "key": "FLUID-407",
      "summary": "Nested drop targets sometimes display the drop marker in the wrong place."
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2008-04-08T15:22:42.000-0400",
      "body": "This bug duplicates <https://fluidproject.atlassian.net/browse/FLUID-407#icft=FLUID-407>\n"
    },
    {
      "author": "Herb Wideman",
      "date": "2008-04-08T16:01:45.000-0400",
      "body": "<https://fluidproject.atlassian.net/browse/FLUID-407#icft=FLUID-407> concerns the misplacement of the location marker bar, but does not mention the multiple occurences of the marker bar I encountered... a somewhat different phenomenon.\n"
    }
  ]
}
---
After dragging several portlets around at \
<http://build.fluidproject.org/sakai-imagegallery-tool/sample-code/reorderer/abstract/portal/portlets.html>\
several horizontal green bars remain between portlets, confusing user as to which is the "real" drop location bar when dragging a portlet.

        