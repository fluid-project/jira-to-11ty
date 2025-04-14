---json
{
  "title": "FLUID-3722",
  "summary": "Port Gears uploader work to HTML5",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-task",
  "priority": "Critical",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Mike Lam",
  "reporter": "Justin Obara",
  "date": "2010-09-09T13:28:07.594-0400",
  "updated": "2014-03-03T13:41:26.502-0500",
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
      "author": "Justin Obara",
      "date": "2010-10-04T14:57:23.056-0400",
      "body": "\"Bug Parade Infusion 1.3\"\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-12-02T18:31:51.081-0500",
      "body": "We've also been using this issue as a catch-all for major commits related to implementing the HTML 5 version of the Uploader. Now that the immediate issue has been resolved, I'm going to resolve this JIRA and we'll start using more specific issues for bug parade.\n"
    },
    {
      "author": "Colin Clark",
      "date": "2010-12-02T18:33:19.760-0500",
      "body": "Mike migrated the Gears-related code that was relevant to HTML 5, resolving this issue at r10307 with refinements from me at r10315. We'll resolve this in favour of more specific issues going forward.\n"
    }
  ]
}
---
In the past, we implemented a prototypal non-Flash version of the Uploader using Google Gears. Since Gears served as the basis for HTML 5, some of this implementation should be useful. In particular, the code to manually create multipart MIME file requests (needed in Firefox 4).

This work should be ported to the HTML 5 strategy.

        