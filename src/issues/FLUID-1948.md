---json
{
  "title": "FLUID-1948",
  "summary": "After Stop Upload the Upload button is still dimmed",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Sub-task",
  "priority": "Major",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Eli Cochran",
  "reporter": "Eli Cochran",
  "date": "2008-12-08T20:21:40.000-0500",
  "updated": "2008-12-12T14:23:14.000-0500",
  "versions": [
    "0.6beta1"
  ],
  "fixVersions": [
    "0.6"
  ],
  "components": [
    "Uploader"
  ],
  "environment": null,
  "issueLinks": [],
  "attachments": [
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1948/FLUID-1947-48.patch",
      "filename": "FLUID-1947-48.patch"
    },
    {
      "type": "file",
      "url": "https://idrc.cachefly.net/issues.fluidproject.org/FLUID/FLUID-1948/FLUID-1948-cleanup.patch",
      "filename": "FLUID-1948-cleanup.patch"
    }
  ],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-12-09T15:34:37.000-0500",
      "body": "Bug Parade 0.6 release&#x20;\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2008-12-10T15:19:21.000-0500",
      "body": "A fix for 1947 and 1948\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2008-12-11T15:22:19.000-0500",
      "body": "This patch addresses the disabled button. It doesn't seem to work fully on <https://fluidproject.atlassian.net/browse/FLUID-1947#icft=FLUID-1947> (see comments on that issue).\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2008-12-11T16:18:44.000-0500",
      "body": "Upload button is now active after Stop Upload.&#x20;\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-12-11T16:55:57.000-0500",
      "body": "Verified fix using:\n\nFF2, FF3, Opera 9.5, Safari 3 (Mac OS 10.5)\\\nFF2, FF3, IE7, Opera 9.5 (Win XP)\\\nFF3, IE7 (Win Vista)\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-12-12T10:13:05.000-0500",
      "body": "some cleanup to the code needed\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2008-12-12T11:24:12.000-0500",
      "body": "Added FLUID-1948-cleanup.patch which removes some experiemental code that should not have been checked-in.&#x20;\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2008-12-12T12:03:18.000-0500",
      "body": "I'm not as familiar as colin or eli with the Uploade code, but this cleanup patch looks good to me.\n"
    },
    {
      "author": "Eli Cochran",
      "date": "2008-12-12T12:07:12.000-0500",
      "body": "patch committed waiting for test\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-12-12T14:23:14.000-0500",
      "body": "Verified fix using:\n\nFF2, FF3, Opera 9.5 (Mac OS 10.5)\\\nFF3, IE7 (Win Vista)\\\nFF3, IE6 (Win XP)\n"
    }
  ]
}
---
After Stop Upload the Upload button is still dimmed

        