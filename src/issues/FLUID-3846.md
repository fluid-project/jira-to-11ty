---json
{
  "title": "FLUID-3846",
  "summary": "If Flash isn't installed, the user sees a single-file upload control instead of the HTML 5 version of Uploader",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "heidi valles",
  "reporter": "heidi valles",
  "date": "2010-11-18T11:59:33.002-0500",
  "updated": "2014-03-03T13:40:29.562-0500",
  "versions": [],
  "fixVersions": [
    "1.3"
  ],
  "components": [
    "Uploader"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [],
  "comments": [
    {
      "author": "heidi valles",
      "date": "2010-11-18T14:03:18.327-0500",
      "body": "if you don't have flash installed, you get the degraded non-js version of uploader. This check is likely leftover from when uploader was flash. prob happens on all browsers\n"
    },
    {
      "author": "Mike Lam",
      "date": "2010-11-18T15:36:57.005-0500",
      "body": "Removed basic enhancement instantiation from the HTML markup to fix the no Flash issue.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2010-11-19T10:34:46.631-0500",
      "body": "\"Bug Parade Infusion 1.3\"&#x20;\n"
    }
  ]
}
---
In cases where Flash isn't installed, the Uploader's progressive enhancement code incorrectly determines that the user shouldn't see the Uploader and instead delivers them the single-file upload control. Given that the HTML 5 version has no dependency on Flash, this is a bug.

        