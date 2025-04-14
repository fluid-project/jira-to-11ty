---json
{
  "title": "ENGAGE-376",
  "summary": "Some links on the exhibition and catalogue pages are broken.",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Colin Clark",
  "reporter": "y z",
  "date": "2010-02-12T09:42:59.000-0500",
  "updated": "2010-02-12T15:59:46.000-0500",
  "versions": [
    "0.3b"
  ],
  "fixVersions": [
    "0.3b"
  ],
  "components": [
    "Catalogue",
    "Exhibitions"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/ENGAGE/ENGAGE-376/ids.patch",
      "filename": "ids.patch"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/ENGAGE/ENGAGE-376/idskettle.patch",
      "filename": "idskettle.patch"
    }
  ],
  "comments": [
    {
      "author": "Jess Mitchell",
      "date": "2010-02-12T09:47:25.000-0500",
      "body": "Bug Parade Engage 0.3\n"
    },
    {
      "author": "y z",
      "date": "2010-02-12T09:47:48.000-0500",
      "body": "Bug Parade Engage 0.3\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-02-12T13:49:59.000-0500",
      "body": "I've reviewed Yura's first patches and they look pretty good. They do indeed work, and fix the bugs we've experienced with Exhibition About and Catalogue not opening.\n\nI've asked him to modify the catalogue/\\_view/browseByID Couch View to, at very least, use magic symbols in the case where we're outputting all artifacts. This is something that will need be properly addressed post-0.3b.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-02-12T15:59:46.000-0500",
      "body": "I've reviewed Yura's fix for this issue and committed it. These broken pages are working nicely again, and our URL handling is a little more robust as a result. +1 for Enage 0.3b\n"
    }
  ]
}
---
Some of the links on the exhibition and catalogue pages are broken. We need to implement the strategy of accessing those focuments using their ids.

        