---json
{
  "title": "FLUID-3355",
  "summary": "investigate issues around moving the website out of CMSMS",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "Laurel Williams",
  "reporter": "Laurel Williams",
  "date": "2009-11-03T14:27:03.000-0500",
  "updated": "2011-01-20T17:28:54.289-0500",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Website"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Laurel Williams",
      "date": "2009-11-16T13:54:14.000-0500",
      "body": "Issues with moving the website out of CMSMS:\\\n1\\) RSS feed\n\n2\\) Repeated blocks of code such as header, footer - we would not like to maintain these repeated blocks on every page\n\n3\\) Automated news handling - write story and it is added to page automatically, as well as a summary on front page\n\n4\\) Automated menu generation - menu items, including the depth of the menu is handled automatically by CMSMS\n\n5\\) Automated breadcrumb generation\n\n6\\) Site down maintenance mode.\n\nNext steps:\n\n1\\) Do a site scrape, or at least capture a few representative pages and install on the server somewhere so we can 'play'\n\n2\\) Try to address some of the issues above - discuss technology options, do we want to use javascript? php? other technology?\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-03-30T19:21:37.000-0400",
      "body": "Laurel and Jess: Is this issue fixed? Can we close it?\n"
    }
  ]
}
---
Spend some time investigating the challenges around moving the website out of CMSMS.

        