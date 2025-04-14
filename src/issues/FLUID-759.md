---json
{
  "title": "FLUID-759",
  "summary": "Anonymous users cannot access OSDPL design patterns",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Allison Bloodworth",
  "reporter": "Allison Bloodworth",
  "date": "2008-06-10T17:02:31.000-0400",
  "updated": "2011-01-14T12:53:10.185-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "OSDPL"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Allison Bloodworth",
      "date": "2008-06-10T17:02:46.000-0400",
      "body": "iteration11\n"
    },
    {
      "author": "Allison Bloodworth",
      "date": "2008-06-10T17:03:44.000-0400",
      "body": "I figured out that whenever a pattern was published, its entry in the node\\_access table was deleted. (I added the devel module to help figure this out, so you will see a new devel block on the right and a node\\_access report on the bottom of all node pages. I also found this tutorial on troubleshooting, but didn't have to use too much of it: <http://drupal.org/node/72108>.)&#x20;\n\nI ended up having to rebuild the permissions in Content Management -> Post settings. I read that \"it's intended to be a safety net in case your site's access is screwed up because of orphaned access control permissions that got left behind when an access control module was improperly un-installed.\" We must have done this at some point. Now there are no entries in the node\\_access table (and the \"Rebuild Permissions\" option doesn't show up anymore on the \"Post settings\" page), so I'm guessing it's only used when we some sort of access control (maybe Taxonomy Access Control?) is used. We should keep a lookout though if we have problems with anonymous users accessing content again, making especially sure they can see it as we start to add new content.&#x20;\n"
    }
  ]
}
---
Users receive a message saying "There are no patterns in this category" when you can clearly tell that there are patterns by looking at the sub-navigation, and when they click on a pattern they get an access denied error.

        