---json
{
  "title": "FLUID-642",
  "summary": "File Upload: IE: Borders on file queue don't draw correctly",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-issue",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Eli Cochran",
  "reporter": "Eli Cochran",
  "date": "2008-05-27T12:26:14.000-0400",
  "updated": "2008-12-02T15:30:41.000-0500",
  "versions": [
    "0.1",
    "0.3",
    "0.4beta1",
    "0.4",
    "0.5beta1"
  ],
  "fixVersions": [
    "0.5"
  ],
  "components": [
    "Uploader"
  ],
  "environment": "IE6 (Win XP)\n",
  "issueLinks": [
    {
      "type": "Related to",
      "url": "/browse/FLUID-892/",
      "key": "FLUID-892"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-1026/",
      "key": "FLUID-1026"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Eli Cochran",
      "date": "2008-06-16T22:49:18.000-0400",
      "body": "Cleaned up the way that CSS renders the borders. However, the Uploader still doesn't look great on IE6. I need to change the width of the scrolling area on IE6 when it is in scrolling mode.&#x20;\n"
    },
    {
      "author": "Michelle D'Souza",
      "date": "2008-09-02T12:53:19.000-0400",
      "body": "We should ensure that this issue is addressed as part of uploader 2.&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-09-16T14:02:47.000-0400",
      "body": "Affects uploader 2\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2008-09-17T20:07:32.000-0400",
      "body": "changed the CSS so that the Uploader will no longer push out of it's rectangle on IE6\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2008-09-18T14:17:17.000-0400",
      "body": "The fix for this was implemented in the Uploader2 code-base. Need to roll it into Uploader1.\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2008-09-19T11:58:22.000-0400",
      "body": "Fixes from Uploader2 applied to Uploader1 for 0.5 release\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-12-02T15:30:41.000-0500",
      "body": "appears to have been fixed\n"
    }
  ]
}
---
In both the inline and popup scenarios the borders of the file queue have missing edge sections.&#x20;

Border CSS needs to be refactored.

dev-iteration37\
dev-iteration43

        