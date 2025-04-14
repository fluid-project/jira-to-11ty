---json
{
  "title": "FLUID-4444",
  "summary": "Uploader is a blank screen when no flash installed",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "heidi valles",
  "date": "2011-09-13T10:43:21.684-0400",
  "updated": "2011-09-16T17:38:23.905-0400",
  "versions": [
    "1.4"
  ],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "Uploader"
  ],
  "environment": "IE9 Win7 & IE8, IE7, IE6 Win XP without flash\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-4445/",
      "key": "FLUID-4445"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "heidi valles",
      "date": "2011-09-13T11:54:06.097-0400",
      "body": "<http://build.fluidproject.org/infusion/components/uploader/html/Uploader.html>   works\n"
    },
    {
      "author": "Colin Clark",
      "date": "2011-09-16T15:29:11.442-0400",
      "body": "Assigning to Mike because he produced a fix for this issue\n"
    },
    {
      "author": "Colin Clark",
      "date": "2011-09-16T15:29:51.531-0400",
      "body": "Mike's pull request for this issue is available at: <https://github.com/fluid-project/infusion/pull/166>\n"
    },
    {
      "author": "Colin Clark",
      "date": "2011-09-16T15:31:37.349-0400",
      "body": "Assigning to Justin for code review\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-09-16T17:38:20.721-0400",
      "body": "Merged Mike's pull request into the project repo at f2f18094eeb6aa02b6ee54b7e594e6af3a3cea0d\n"
    }
  ]
}
---
When loading <http://build.fluidproject.org/infusion/demos/uploader/html/uploader.html> in IE without flash, get a blank screen

        