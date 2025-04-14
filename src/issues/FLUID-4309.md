---json
{
  "title": "FLUID-4309",
  "summary": "Set background colour of UIOptions Fat Panel",
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
  "date": "2011-06-28T10:09:46.972-0400",
  "updated": "2013-10-04T10:01:59.363-0400",
  "versions": [
    "1.3.1"
  ],
  "fixVersions": [
    "1.4"
  ],
  "components": [
    "UI Options"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-4309/fluid-4309-whitegap.png",
      "filename": "fluid-4309-whitegap.png"
    }
  ],
  "comments": [
    {
      "author": "heidi valles",
      "date": "2011-06-28T10:09:56.572-0400",
      "body": "Bug Parade Infusion\n"
    },
    {
      "author": "heidi valles",
      "date": "2011-06-28T14:51:42.227-0400",
      "body": "Pull req sent <https://github.com/fluid-project/infusion/pull/91>\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2011-06-28T16:17:57.577-0400",
      "body": "Pull request <https://github.com/fluid-project/infusion/pull/91> merged into project repo at c01607e3f136bab3f4c1e4e1ca0f5be34dc9472c\n"
    },
    {
      "author": "Harris Wong",
      "date": "2011-07-26T13:00:49.294-0400",
      "body": "As of \"11ec3fac8c562d6085a41bdf81ad1c0d79250f44\", the FatPanel background have a white gap at the bottom after saving the preferences.\n"
    },
    {
      "author": "Harris Wong",
      "date": "2011-07-26T13:03:37.138-0400",
      "body": "attached fluid-4309-whitegap.png to illustrate the white gap problem mentioned above.\n"
    },
    {
      "author": "Harris Wong",
      "date": "2011-07-26T13:16:39.102-0400",
      "body": "Pull request <https://github.com/fluid-project/infusion/pull/115>\n"
    }
  ]
}
---
Background of panel should be white by default, not the bg colour of the page. See src/webapp/tests/manual-tests/html/SomeKindOfNews.html

        