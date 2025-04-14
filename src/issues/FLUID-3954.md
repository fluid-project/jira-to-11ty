---json
{
  "title": "FLUID-3954",
  "summary": "The layout reorderer unit tests failing in IE 9",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Harris Wong",
  "reporter": "Justin Obara",
  "date": "2010-12-18T13:21:03.576-0500",
  "updated": "2011-07-08T16:16:00.032-0400",
  "versions": [
    "1.3"
  ],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "Reorderer"
  ],
  "environment": "IE9 (Win7)\n",
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3954/screenshot-1.jpg",
      "filename": "screenshot-1.jpg"
    }
  ],
  "comments": [
    {
      "author": "Harris Wong",
      "date": "2011-05-10T14:18:42.311-0400",
      "body": "LayoutReorderer no longer crashes IE9, but gives an error for \"#3.10 - Temporary moved state is cleared.\"\n"
    },
    {
      "author": "Justin Obara",
      "date": "2011-05-11T07:43:51.890-0400",
      "body": "Updated description with latest info provided in Harris's comment above\n"
    },
    {
      "author": "Harris Wong",
      "date": "2011-05-16T16:05:23.659-0400",
      "body": "Bug Parade Infusion\n"
    },
    {
      "author": "Harris Wong",
      "date": "2011-05-18T10:54:30.322-0400",
      "body": "This is fixed at commit: 06be9930f637062dcfbe.\n"
    }
  ]
}
---
After updating jQuery UI to 1.8.11, the layout reorderer unit tests no longer crash IE 9 on page load. However, there are still failing unit tests.

3.10 - Temporary moved state is cleared.\
(See screenshot-1.jpg)

Steps to reproduce:

1\) Open the layout reorderer unit tests, notice that test 3.10 fails.\
<http://build.fluidproject.org/infusion/tests/component-tests/reorderer/html/LayoutReorderer-test.html>

        