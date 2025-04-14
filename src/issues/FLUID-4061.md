---json
{
  "title": "FLUID-4061",
  "summary": "Scrolling while uploading",
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
  "date": "2011-02-14T10:18:37.864-0500",
  "updated": "2016-11-08T12:27:31.251-0500",
  "versions": [
    "1.4"
  ],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "Uploader"
  ],
  "environment": "FF3.6\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-3837/",
      "key": "FLUID-3837",
      "summary": "Clean up Uploader's markup"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-6045/",
      "key": "FLUID-6045"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-6028/",
      "key": "FLUID-6028"
    }
  ],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-4061/FLUID-4061.patch",
      "filename": "FLUID-4061.patch"
    }
  ],
  "comments": [
    {
      "author": "Colin Clark",
      "date": "2011-02-15T11:06:31.479-0500",
      "body": "This issue is caused by a bug in <https://fluidproject.atlassian.net/browse/FLUID-3837#icft=FLUID-3837>, which is a blocker for the 1.3.1 release. Accordingly, I've filed this fix as a blocker for the release as well.\n"
    },
    {
      "author": "heidi valles",
      "date": "2011-02-15T16:22:35.384-0500",
      "body": "thead - The way it worked before is the scrollable area has position:relative. Adding this to fl-table-scrollable-scroller fixes this issue but breaks the absolutely positioned thead as it can no longer move above the scrollable as it does now.&#x20;\n\nprogress bars - The progress bars for each file are injected as divs outside/below the file queue table, and then positioned absolutely within the scrollable with a top value. When scrolling, this top value isn't relative to the scrollable, so it stays in position, moving away from its intended row. &#x20;\n"
    },
    {
      "author": "heidi valles",
      "date": "2011-02-16T17:00:19.529-0500",
      "body": "patch for css in <https://github.com/colinbdclark/infusion/tree/FLUID-4061>\n"
    },
    {
      "author": "heidi valles",
      "date": "2011-02-25T10:33:42.462-0500",
      "body": "We backed the scrollableTable out of 1.3.1 uploader/fluid\\_view because of this blocker and went back to using two tables (one for header, one for file queue).\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-05-17T11:44:40.280-0400",
      "body": "closed as per previous comment, about rolling back the commit that caused this issue.\n"
    }
  ]
}
---
Add several files the queue and click upload. While a large file is uploading, scroll the queue window. The green progress bar moves to different rows as you scroll.

        