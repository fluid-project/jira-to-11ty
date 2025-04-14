---json
{
  "title": "ENGAGE-120",
  "summary": "Allow browse and view components to work with artifact data that contains multiple categories",
  "tags": "ENGAGE",
  "project": {
    "key": "ENGAGE",
    "title": "Fluid Engage"
  },
  "type": "Task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "y z",
  "reporter": "y z",
  "date": "2009-10-13T18:15:58.000-0400",
  "updated": "2009-11-03T11:48:24.000-0500",
  "versions": [
    "0.1"
  ],
  "fixVersions": [],
  "components": [
    "Artifact View",
    "Browse"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/ENGAGE/ENGAGE-120/patch.txt",
      "filename": "patch.txt"
    }
  ],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2009-10-14T14:15:41.000-0400",
      "body": "yura: colinclark: the issue with navigation from browse to view is not broken anymore with that patch. and it also makes the Related Artifacts link not just back/forward button because once you navigate to view and consequently click on Related Artifacts the list of related artifacts might look different than the one we navigated from to the view, all thanks to a better match of multiple categories\\\n\\[1:42pm] colinclark: yura: Ok\\\n\\[1:42pm] colinclark: So we're saying that either:\\\n\\[1:42pm] colinclark: 1) We remove the Related Artifacts link in Artifact View\\\n\\[1:42pm] colinclark: or\\\n\\[1:42pm] colinclark: 2) We add this patch and it will work as-planned for this release?\\\n\\[1:44pm] yura: colinclark: exactly\n"
    },
    {
      "author": "Colin Clark",
      "date": "2009-10-14T14:16:00.000-0400",
      "body": "Bug Parade Engage 0.1\n"
    },
    {
      "author": "Colin Clark",
      "date": "2009-10-14T17:37:16.000-0400",
      "body": "Yura resolved this issue as part of his r8312 and r8319 commits.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2009-11-03T11:48:24.000-0500",
      "body": "Closed as per previous comment\n"
    }
  ]
}
---
Right now artifact view  and browse cant handle multiple categories and we need to implement that.

        