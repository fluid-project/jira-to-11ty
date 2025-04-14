---json
{
  "title": "DECA-207",
  "summary": "genpdf should allow for different dimensions aside from default A4",
  "tags": "DECA",
  "project": {
    "key": "DECA",
    "title": "Decapod"
  },
  "type": "New Feature",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jonathan Hung",
  "reporter": "Jonathan Hung",
  "date": "2012-01-11T14:43:05.496-0500",
  "updated": "2012-06-11T15:08:38.546-0400",
  "versions": [],
  "fixVersions": [
    "0.6"
  ],
  "components": [
    "genpdf"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/DECA-227/",
      "key": "DECA-227"
    },
    {
      "type": "Related to",
      "url": "/browse/DECA-274/",
      "key": "DECA-274",
      "summary": "Test genpdf and the new features for Decapod 0.6"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2012-06-01T10:33:11.523-0400",
      "body": "implemented but needs testing\n"
    }
  ]
}
---
Currently Decapod exports all content to an A4 resolution (A4 @ 300 DPI?). There should be options to allow the user to specify the DPI and the horizontal and vertical dimensions.

        