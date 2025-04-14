---json
{
  "title": "FLUID-1991",
  "summary": "After dragging portlet over locked portet, portlet does not return to initial posiiton on release",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "reporter": "Herb Wideman",
  "date": "2008-12-16T15:19:16.000-0500",
  "updated": "2011-01-14T09:53:27.339-0500",
  "versions": [
    "0.6"
  ],
  "fixVersions": [
    "0.6"
  ],
  "components": [
    "Demos",
    "Layout Reorderer"
  ],
  "environment": "XP - FF3, IE7, Opera 9.5\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-12-18T10:47:05.000-0500",
      "body": "This was an error with the test protocol. It has now been updated\n"
    }
  ]
}
---
When dragging a non-contiguous portlet over a locked portlet, upon release of the portlet avatar the portal is not "returned" to its initial position, but moves adjacent to the locked portal (in the test page with the locked portlet at the top of the column, the portal you are attempting to move above the locked portlet drops right below the locked portlet, rather than returning to its initial position further down the column as specified in the test procedure).

        