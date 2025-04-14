---json
{
  "title": "FLUID-1906",
  "summary": "OSDPL: Latest Update Pattern block is not properly displaying the true latest update.",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Minor",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jonathan Hung",
  "reporter": "Jonathan Hung",
  "date": "2008-12-03T10:34:28.000-0500",
  "updated": "2009-01-09T12:17:16.000-0500",
  "versions": [
    "0.6beta1"
  ],
  "fixVersions": [],
  "components": [
    "OSDPL"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-1899/",
      "key": "FLUID-1899",
      "summary": "OSDPL Community: Revamp the front page to emphasize community process and pattern content."
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2008-12-03T10:38:14.000-0500",
      "body": "iteration24\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2009-01-09T12:17:16.000-0500",
      "body": "The block is performing correctly. It is retrieving the time updated from the database. If a new pattern is submitted and has never been edited, it will not appear in this list.\n\nThis problem may go away once we have decided on a community process and workflow since all Published patterns will have been edited by an Editor anyway.\n"
    }
  ]
}
---
The latest updated pattern box is broken. Does not display the latest pattern that is updated... not sure what it is displaying actually... 😛

        