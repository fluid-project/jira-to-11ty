---json
{
  "title": "FLUID-3921",
  "summary": "When on first or last page, \"previous\" and \"next\" links, respectively, aren't grayed out",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Bug",
  "priority": "Major",
  "status": "Reopened",
  "reporter": "Jen Chow",
  "date": "2010-12-16T13:52:06.887-0500",
  "updated": "2021-07-15T08:31:06.797-0400",
  "versions": [
    "1.3",
    "1.3.1",
    "1.4",
    "1.5",
    "2.0",
    "3.0"
  ],
  "fixVersions": [],
  "components": [
    "Pager"
  ],
  "environment": "Mac OSX 10.6, Safari 5 and FF 3.6\\\nFirefox 29, Chrome 35, Safari 7 (Mac OS 10.9)\\\nIE 8, 9, 10, 11 (Windows 7)\n",
  "issueLinks": [
    {
      "type": "Duplicate",
      "url": "/browse/FLUID-5736/",
      "key": "FLUID-5736"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-2779/",
      "key": "FLUID-2779"
    },
    {
      "type": "Related to",
      "url": "/browse/FLUID-5561/",
      "key": "FLUID-5561"
    }
  ],
  "attachments": [
    {
      "type": "image",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-3921/Capture3.PNG",
      "filename": "Capture3.PNG"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2013-09-06T12:36:07.580-0400",
      "body": "screenshot.png shows the \"Next\" link not greyed out when on the last page.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2014-06-03T12:01:17.829-0400",
      "body": "This issue only affects the main pager demo.\\\n<http://build.fluidproject.org/infusion/demos/pager/>\n"
    },
    {
      "author": "sparsh paliwal",
      "date": "2016-03-03T09:41:22.060-0500",
      "body": "I have sent PR for the fix of this issue and FUILD-2779.\n\n<https://github.com/fluid-project/infusion/pull/674>\n"
    },
    {
      "author": "sparsh paliwal",
      "date": "2016-03-07T12:16:37.863-0500",
      "body": "@@sparsh paliwal\n\nWhat should happen is the text \"Previous\" should no longer look like a link. If a link doesn't do anything, it should look disabled.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2016-07-08T10:14:12.893-0400",
      "body": "Removed the missing screenshot (screenshot.png)\n"
    }
  ]
}
---
Per QA test, the links described in the summary should be grayed out, but they aren't changing.

        