---json
{
  "title": "FLUID-3842",
  "summary": "In the Infusion Builder, a user should be able to select a module by clicking anywhere within the highlighted area",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Jonathan Hung",
  "reporter": "heidi valles",
  "date": "2010-11-16T11:00:37.540-0500",
  "updated": "2013-09-06T13:53:36.918-0400",
  "versions": [],
  "fixVersions": [],
  "components": [
    "Infusion Builder"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3842/builder_patch_3842.txt",
      "filename": "builder_patch_3842.txt"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2010-11-19T16:05:15.104-0500",
      "body": "\"Bug Parade Infusion 1.3\"&#x20;\n"
    },
    {
      "author": "heidi valles",
      "date": "2010-11-22T15:57:42.975-0500",
      "body": "new html & css - includes description in checkbox label\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2010-12-13T15:14:20.050-0500",
      "body": "I've reviewed Heidi's fix for this: it's clean, and works fine. There's a tiny change in spacing, but I don't think it's an issue at all. I think we can close this one.\n"
    }
  ]
}
---
When a user hovers over a module description in the Builder, a highlight is drawn around both the title and description paragraph. This suggests to the user that they can click anywhere in the highlighted area to select a module. However, only the title is actually clickable.

We should fix this by making the entire highlighted region clickable.

        