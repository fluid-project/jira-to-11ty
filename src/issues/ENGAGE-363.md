---json
{
  "title": "ENGAGE-363",
  "summary": "Catalogue page that shows a thumbnail, a title, and an artist/date has formatting issues: vertical scroll and the title and artist/date don't align properly",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jess Mitchell",
  "reporter": "Jess Mitchell",
  "date": "2010-02-09T16:12:45.000-0500",
  "updated": "2010-02-16T15:42:32.000-0500",
  "versions": [
    "0.3b"
  ],
  "fixVersions": [
    "0.3b"
  ],
  "components": [
    "Catalogue"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/ENGAGE/ENGAGE-363/ENGAGE-363.patch",
      "filename": "ENGAGE-363.patch"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/ENGAGE/ENGAGE-363/ENGAGE-363b.patch",
      "filename": "ENGAGE-363b.patch"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/ENGAGE/ENGAGE-363/ENGAGE-363fix.patch",
      "filename": "ENGAGE-363fix.patch"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/ENGAGE/ENGAGE-363/ENGAGE-363-trunk.patch",
      "filename": "ENGAGE-363-trunk.patch"
    }
  ],
  "comments": [
    {
      "author": "Jess Mitchell",
      "date": "2010-02-16T13:11:17.000-0500",
      "body": "needs review and then to close\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-02-16T15:42:32.000-0500",
      "body": "Reviewed and committed the latest patches for this issue. Made a change to one of them that basically just added a class name instead of referring to an element by it's tag. This prevented some side effects that were  happening.\n"
    }
  ]
}
---
Bug Parade Engage 0.3

<http://build.fluidproject.org:8095/engage/catalogue/view.html?db=mccord_exhibitions&title=Simply+Montr%C3%A9al%3A+Glimpses+of+a+Unique+City&lang=en>

        