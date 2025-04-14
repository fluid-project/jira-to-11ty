---json
{
  "title": "FLUID-1922",
  "summary": "Update to the latest stable jQuery UI 1.5.3",
  "tags": "FLUID",
  "project": {
    "key": "FLUID",
    "title": "Fluid Infusion"
  },
  "type": "Task",
  "priority": "Blocker",
  "status": "Closed",
  "resolution": "Fixed",
  "assignee": "Anastasia Cheetham",
  "reporter": "Colin Clark",
  "date": "2008-12-04T11:33:17.000-0500",
  "updated": "2008-12-10T13:33:37.000-0500",
  "versions": [],
  "fixVersions": [
    "0.6"
  ],
  "components": [
    "Framework"
  ],
  "environment": null,
  "issueLinks": [
    {
      "type": "Dependence",
      "url": "/browse/FLUID-1658/",
      "key": "FLUID-1658"
    }
  ],
  "attachments": [],
  "comments": [
    {
      "author": "Justin Obara",
      "date": "2008-12-08T11:36:50.000-0500",
      "body": "Bug Parade 0.6 release\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2008-12-09T10:31:45.000-0500",
      "body": "Ok, I've tested everything against jQuery UI trunk. Everything works except the nested reorderers manual test page: Moving items (using the mouse) within an inner reorderer moves both the inner item and the outer item that it is inside. Haven't figured out why yet.\n\nOddly, this doesn't happen with the nested case of the Image Reorderer inside the Layout Reorderer in the uPortal mock-up.\n\nI'm going to try 1.5.3 next.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2008-12-09T12:09:50.000-0500",
      "body": "The weirdness with nested reorderers does NOT happen with 1.5.3. The behaviour is just fine.\n"
    },
    {
      "author": "Anastasia Cheetham",
      "date": "2008-12-09T12:54:28.000-0500",
      "body": "The jQuery UI files have been upgraded to the 1.5.3 version. No changes to the Fluid code were needed.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-12-09T16:05:49.000-0500",
      "body": "closed in error... needs to under go code review still\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-12-09T16:06:12.000-0500",
      "body": "Anastasia had resolved this issue\n"
    },
    {
      "author": "Colin Clark",
      "date": "2008-12-10T13:21:53.000-0500",
      "body": "I've reviewed this code. +1.\n"
    },
    {
      "author": "Justin Obara",
      "date": "2008-12-10T13:33:37.000-0500",
      "body": "Verified fix using:\n\nFF3, FF2 (Mac OS 10.5)\n\nFF3, IE7 (Win Vista)\n"
    }
  ]
}
---
We currently link against jQuery UI 1.5.1. The latest stable version is 1.5.3. Let's upgrade to the latest stable version, but also ensure that we're compatible with the latest trunk version of UI 1.6, which is due out any day now. This will ease the upgrade transition for our end-users signficantly.

        