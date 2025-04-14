---json
{
  "title": "FLUID-2132",
  "summary": "OSDPL Accessibility: Remove \"More\" links in Views and replace with custom links.",
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
  "date": "2009-01-15T15:40:16.000-0500",
  "updated": "2009-01-22T13:52:27.000-0500",
  "versions": [
    "0.6"
  ],
  "fixVersions": [],
  "components": [
    "OSDPL"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2009-01-22T13:51:37.000-0500",
      "body": "iteration25\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2009-01-22T13:52:27.000-0500",
      "body": "Inadvertently fixed using Panels. Panels has the ability to over-ride titles of blocks, so now the \"Welcome to ...\" string does not appear.\n"
    }
  ]
}
---
In Views, using the "More" option creates a "More" link at the bottom of the View when displayed to the user. This system generated  link is not helpful for accessibility purposes.

Link text should be more helpful as to describe what it is linking to.

Task:

* Disable the "more" option in the View.
* In that View's block, add the appropriate link manually using the l() function.

Affected Views:

* recent\_news\_titles (link <http://osdpl.fluidproject.org/designPatterns/update>)
* LatestModifiedPatternTeaser  (link <http://osdpl.fluidproject.org/news>)

        