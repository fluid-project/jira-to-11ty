---json
{
  "title": "FLUID-489",
  "summary": "Mouse pointer style doesn't change over reorderable portlets",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "Colin Clark",
  "reporter": "Herb Wideman",
  "date": "2008-04-10T15:21:15.000-0400",
  "updated": "2008-11-13T13:30:59.000-0500",
  "versions": [
    "0.3"
  ],
  "fixVersions": [
    "0.3"
  ],
  "components": [
    "Reorderer"
  ],
  "environment": "Win XP, IE7, FF2\n",
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Anastasia Cheetham",
      "date": "2008-04-21T16:11:27.000-0400",
      "body": "This is a styling issue in a poorly styled example that has been moved out of the distribution.\n"
    }
  ]
}
---
On mousing over the reorderable portlets on the portlets-with-precedence test page\
( <http://build.fluidproject.org/sakai-imagegallery-tool/sample-code/reorderer/abstract/portal/portlets.html> )\
the mouse pointer does not change style indicating the element is moveable (as required by the test procedures).

        