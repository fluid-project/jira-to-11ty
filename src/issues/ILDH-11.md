---json
{
  "title": "ILDH-11",
  "summary": "ILDH logo doesn't respond to contrast changes",
  "tags": "ILDH",
  "project": {
    "key": "ILDH",
    "title": "Inclusive Learning Design Handbook"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Cannot Reproduce",
  "assignee": "Jonathan Hung",
  "reporter": "Anastasia Cheetham",
  "date": "2014-08-06T17:32:40.506-0400",
  "updated": "2019-08-19T14:26:42.234-0400",
  "versions": [],
  "fixVersions": [],
  "components": [],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Jonathan Hung",
      "date": "2015-12-14T08:11:48.795-0500",
      "body": "This has been fixed with static site.\n"
    }
  ]
}
---
The ILDH is implemented using MediaWiki, which manages the site's logo itself using an \<img> tag. Since it's an \<img> tag, it isn't affected by UIO contrast changes.

I'm not sure what would be required to have MediaWiki not manage the logo. It might be simple, but I haven't investigated yet.

        