---json
{
  "title": "FLUID-371",
  "summary": "Upgrade OSDPL to latest version",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jonathan Hung",
  "reporter": "Allison Bloodworth",
  "date": "2008-03-17T20:37:42.000-0400",
  "updated": "2008-08-20T10:02:15.000-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "OSDPL"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-410/",
      "key": "FLUID-410"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Allison Bloodworth",
      "date": "2008-03-17T20:38:14.000-0400",
      "body": "iteration06\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2008-04-02T16:02:42.000-0400",
      "body": "Upgrade guide can be found here:\\\n<http://drupal.org/upgrade/tutorial-introduction>\n\nSeems pretty straight forward. Hard to anticipate if anything will go wrong during the update.\n\nSince we're running a pretty generic Drupal site, I hope that we won't run into problems.\n\nbackup and creating a test site will be necessary to ensure we do not have downtime during a migration.\n"
    },
    {
      "author": "Jonathan Hung",
      "date": "2008-04-02T16:09:33.000-0400",
      "body": "My recommendation.\n\nSince CCK and Views is still in development on Drupal 6.x, I think we should get OSDPL working the way we want in Drupal 5.7 since all the modules we need are present and stable.\n\nDo a test upgrade to 6.x once CCK + Views is available for that version. If everything looks good, then we can then do a real upgrade on the live site.\n"
    }
  ]
}
---

        