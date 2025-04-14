---json
{
  "title": "VULAB-193",
  "summary": "SVN Inconsistencies",
  "tags": "VULAB",
  "project": {
    "key": "VULAB",
    "title": "VULab"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "In Progress",
  "assignee": "Blake E",
  "reporter": "Blake E",
  "date": "2009-04-03T15:45:36.000-0400",
  "updated": "2009-04-21T13:56:02.000-0400",
  "versions": [
    "0.5"
  ],
  "fixVersions": [
    "0.5"
  ],
  "components": [
    "Web"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/VULAB/VULAB-193/VULAB-193.patch",
      "filename": "VULAB-193.patch"
    }
  ],
  "comments": [
    {
      "author": "Blake E",
      "date": "2009-04-03T15:47:31.000-0400",
      "body": "Here it is, please review - this seems like it clears up a myriad of problems.\n"
    }
  ]
}
---
So, I'm not sure how it happened, but svn has become VERY messy, and with patches not going in, being created on very old revisions, AND some patches just having small mistakes - the svn needed some cleaning.

Here is a patch that fixes a few small things.

a) curvycorners.js was not included into the header and the .js file itself was not uploaded\
b) missing images - background images, new logo images, etc, were not uploaded when we added johnc's redesign\
c) the signup page is a MESS, and I am reverting it back to the original, and will patch it again once the system itself is cleaned up.

Here we go! first step out of the darkness and confusion

        