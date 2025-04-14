---json
{
  "title": "FLUID-3257",
  "summary": "live region announcement in IE8 with JAWS repeats ",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Laurel Williams",
  "reporter": "Alison Benjamin",
  "date": "2009-10-08T11:45:49.000-0400",
  "updated": "2009-10-09T17:23:22.000-0400",
  "versions": [],
  "fixVersions": [
    "1.1.2"
  ],
  "components": [
    "Infusion Builder"
  ],
  "environment": "IE 8 / XP&#x20;\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3257/FLUID-3257.patch",
      "filename": "FLUID-3257.patch"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3257/FLUID-3257-b.patch",
      "filename": "FLUID-3257-b.patch"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2009-10-09T13:01:49.000-0400",
      "body": "Added an additional event to customBuild.js to broadcast after all model changes have occurred.&#x20;\n"
    },
    {
      "author": "Colin Clark",
      "date": "2009-10-09T17:23:10.000-0400",
      "body": "I've reviewed Justin's fix, it's been tested, and it looks good. +1\n"
    },
    {
      "author": "Colin Clark",
      "date": "2009-10-09T17:23:22.000-0400",
      "body": "Fixed at r8305\n"
    }
  ]
}
---
when a checkbox selection is made, the selection & its dependencies are announced 6 times.&#x20;

        