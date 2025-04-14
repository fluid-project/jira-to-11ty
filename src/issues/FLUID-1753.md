---json
{
  "title": "FLUID-1753",
  "summary": "title hover area and title visible area different areas",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Trivial",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Gonzalo David Silverio",
  "reporter": "Gonzalo David Silverio",
  "date": "2008-10-30T14:38:28.000-0400",
  "updated": "2008-12-03T11:55:36.000-0500",
  "versions": [
    "0.6beta1"
  ],
  "fixVersions": [],
  "components": [
    "Inline Edit"
  ],
  "environment": "FF2, FF3, Saf 1.3, Opera\n",
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-1301/",
      "key": "FLUID-1301",
      "summary": "Inline Edit - entire container is \"hot\", not just the interesting part (the editable unit)"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Antranig Basman",
      "date": "2008-11-13T22:08:30.000-0500",
      "body": "Probably resolved along with the fix to <https://fluidproject.atlassian.net/browse/FLUID-1310#icft=FLUID-1310>. Please reverify\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-12-03T11:55:36.000-0500",
      "body": "appears to be fixed\n"
    }
  ]
}
---
This is a trivial issue in isolation but may represent a small problem in implementation. I feel very picky reporting it.

Title tooltip shows correctly when hovering over text. It also shows to the right of the text all the way to the end of the containing cell. I was looking at the Sakai Announcements testing demo page.

        