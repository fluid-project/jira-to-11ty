---json
{
  "title": "FLUID-4999",
  "summary": "Concatenate CSS files",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Won't Fix",
  "assignee": "Justin Obara",
  "reporter": "Justin Obara",
  "date": "2013-04-29T10:37:06.478-0400",
  "updated": "2015-06-26T09:58:11.030-0400",
  "versions": [],
  "fixVersions": [
    "1.9"
  ],
  "components": [
    "Build Scripts",
    "FSS"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2014-06-25T16:17:26.465-0400",
      "body": "FSS was deprecated in Infusion 1.5 and will be removed from Infusion 2.0\n"
    },
    {
      "author": "Justin Obara",
      "date": "2015-06-26T09:50:49.542-0400",
      "body": "Reopening to change the fix version to 1.9\n"
    }
  ]
}
---
After moving to font icons we should attempt to concatenate our CSS files, similarly to how we manage our JS files. We had previously attempted this but ran into an issue regarding the urls used for the images (FLUID-2767).&#x20;

        