---json
{
  "title": "ENGAGE-459",
  "summary": "My Collection is broken because preMap attempts to call toString() on media array length when it is an object.",
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
  "date": "2010-02-25T15:25:11.000-0500",
  "updated": "2014-03-03T13:46:08.571-0500",
  "versions": [
    "0.3b"
  ],
  "fixVersions": [
    "0.3b"
  ],
  "components": [],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/ENGAGE-457/",
      "key": "ENGAGE-457",
      "summary": "The view and viewByID have a bug in couchdb view where it fails for some of the artifacts."
    }
  ],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/ENGAGE/ENGAGE-459/ENGAGE-459.patch",
      "filename": "ENGAGE-459.patch"
    }
  ],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2010-02-25T15:30:46.000-0500",
      "body": "This is the same bug as <https://fluidproject.atlassian.net/browse/ENGAGE-457#icft=ENGAGE-457>, but in a different spot. It is caused by the fact that Sveto had to duplicate Yura's buggy view code in the myCollectionService.\n"
    }
  ]
}
---
My Collection is broken because preMap attempts to call toString() on media array length when it is an object.

        