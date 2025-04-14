---json
{
  "title": "FLUID-5825",
  "summary": "Update Infusion's copy of jQuery",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Improvement",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Justin Obara",
  "reporter": "Anastasia Cheetham",
  "date": "2015-12-03T12:24:55.152-0500",
  "updated": "2019-07-12T09:15:02.723-0400",
  "versions": [],
  "fixVersions": [
    "2.0"
  ],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-5966/",
      "key": "FLUID-5966"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2015-12-03T12:26:28.006-0500",
      "body": "We'll probably want to pull in the latest version of Qunit at this time too.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2016-08-18T08:13:56.816-0400",
      "body": "It does not seem that we'll be able to upgrade Qunit at this time based on this comment: <https://issues.fluidproject.org/browse/FLUID-5810?focusedCommentId=31422&page=com.atlassian.jira.plugin.system.issuetabpanels:comment-tabpanel#comment-31422>\n"
    },
    {
      "author": "Justin Obara",
      "date": "2016-09-16T09:29:46.281-0400",
      "body": "Current versions:\\\njQuery - 3.1.0\\\njQuery UI - 1.12.1\n"
    }
  ]
}
---
At the time of writing, jQuery core is up to 2.1.4; Infusion still uses 1.11.0. We should update, since we're not longer supporting older browsers.

        